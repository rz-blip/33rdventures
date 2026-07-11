"""Generate favicon.ico (PNG-in-ICO) and apple-touch-icon.png for the 33 marque.

Rasterizes the same geometry as public/favicon.svg — elliptical badge ring with
twin blade "33" — on a dark rounded tile. No image libs needed.

Usage: python3 scripts/gen_icons.py public
"""
import math, struct, zlib, sys, os

BG = (16, 18, 20)     # #101214 tile
FG = (232, 235, 238)  # #E8EBEE badge

# ── badge geometry in its 260x150 design space (mirrors badge.svg) ──
CX, CY, RX, RY, STROKE = 130.0, 75.0, 120.0, 62.0, 12.0
ROT = math.radians(6.0)          # ellipse is drawn rotated -6°; undo with +6°
TAN12 = math.tan(math.radians(12.0))
GLYPH_TX, GLYPH_TY = 80.0, 39.0

# one "3": right spine + three bladed bars (local coords)
BARS = [
    [(39, 0), (50, 0), (50, 72), (39, 72)],
    [(5, 0), (50, 0), (50, 11), (0, 11)],
    [(13, 30.5), (50, 30.5), (50, 41.5), (9, 41.5)],
    [(0, 61), (50, 61), (50, 72), (5, 72)],
]

def transformed_polys():
    polys = []
    for dx in (0.0, 65.0):
        for bar in BARS:
            polys.append([
                (GLYPH_TX + (x + dx) - TAN12 * y, GLYPH_TY + y) for x, y in bar
            ])
    return polys

POLYS = transformed_polys()

def in_poly(px, py, poly):
    inside = False
    j = len(poly) - 1
    for i in range(len(poly)):
        xi, yi = poly[i]
        xj, yj = poly[j]
        if (yi > py) != (yj > py) and px < (xj - xi) * (py - yi) / (yj - yi) + xi:
            inside = not inside
        j = i
    return inside

def in_ring(px, py):
    dx, dy = px - CX, py - CY
    c, s = math.cos(ROT), math.sin(ROT)
    xr = c * dx - s * dy
    yr = s * dx + c * dy
    h = STROKE / 2
    outer = (xr / (RX + h)) ** 2 + (yr / (RY + h)) ** 2
    inner = (xr / (RX - h)) ** 2 + (yr / (RY - h)) ** 2
    return outer <= 1.0 and inner >= 1.0

# badge placement inside the 64x64 tile (mirrors favicon.svg)
SCALE = 56.0 / 260.0
OX, OY = 4.0, (64.0 - 150.0 * SCALE) / 2.0

def color_at(u, v):
    """RGBA for tile-space coords (u,v) in [0,64)."""
    r = 14.0
    cx = min(max(u, r), 64 - r)
    cy = min(max(v, r), 64 - r)
    if (u - cx) ** 2 + (v - cy) ** 2 > r * r:
        return (0, 0, 0, 0)
    bu, bv = (u - OX) / SCALE, (v - OY) / SCALE
    if 0 <= bu <= 260 and 0 <= bv <= 150:
        if in_ring(bu, bv) or any(in_poly(bu, bv, p) for p in POLYS):
            return (*FG, 255)
    return (*BG, 255)

def render(size, ss=4):
    rows = []
    for y in range(size):
        row = bytearray()
        for x in range(size):
            acc = [0, 0, 0, 0]
            for sy in range(ss):
                for sx in range(ss):
                    u = (x + (sx + 0.5) / ss) * 64.0 / size
                    v = (y + (sy + 0.5) / ss) * 64.0 / size
                    px = color_at(u, v)
                    for i in range(4):
                        acc[i] += px[i]
            n = ss * ss
            row += bytes(round(a / n) for a in acc)
        rows.append(bytes(row))
    return rows

def write_png(path, size, rows):
    raw = b"".join(b"\x00" + r for r in rows)
    def chunk(tag, data):
        c = tag + data
        return struct.pack(">I", len(data)) + c + struct.pack(">I", zlib.crc32(c))
    ihdr = struct.pack(">IIBBBBB", size, size, 8, 6, 0, 0, 0)
    png = (b"\x89PNG\r\n\x1a\n" + chunk(b"IHDR", ihdr)
           + chunk(b"IDAT", zlib.compress(raw, 9)) + chunk(b"IEND", b""))
    with open(path, "wb") as f:
        f.write(png)
    return png

out = sys.argv[1]
png64 = write_png(os.path.join(out, "icon-64.png"), 64, render(64))
write_png(os.path.join(out, "apple-touch-icon.png"), 180, render(180))

ico = struct.pack("<HHH", 0, 1, 1) + struct.pack(
    "<BBBBHHII", 64, 64, 0, 0, 1, 32, len(png64), 22) + png64
with open(os.path.join(out, "favicon.ico"), "wb") as f:
    f.write(ico)
os.remove(os.path.join(out, "icon-64.png"))
print("wrote favicon.ico + apple-touch-icon.png")
