// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://33rdventures.com',

  server: {
    port: 4200,
    host: true, // bind to LAN so the site is reachable from phones on the same Wi-Fi
  },

  vite: {
    plugins: [tailwindcss()],
  },
});