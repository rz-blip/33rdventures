// ─────────────────────────────────────────────────────────────────────────
// THE LIVING RÉSUMÉ — all site content lives in this one file.
// Edit anything here and the page updates on save. No markup knowledge needed.
// Source of truth: Robert-Zukerman-Resume.pdf (2026 edition).
// ─────────────────────────────────────────────────────────────────────────

export const identity = {
  name: 'Robert Zukerman',
  shortName: 'Rob Zukerman',
  location: 'New York, NY',
  email: 'rz@fairfax.plus',
  roleLine:
    'Founder-operator with a realized exit — now in the public markets, building toward private-markets work.',
  openTo: ['Deal sourcing', 'Portfolio operations', 'Investor relations'],
};

export const summary = `Co-founded, bootstrapped, and scaled a consumer products company to $5M+ in cumulative revenue before selling the business in 2024, then moved into investor relations — leading investor-marketing programs for publicly traded small-cap companies and working directly with their executive teams. Combines a founder's command of operations, unit economics, and cash management with day-to-day exposure to capital markets, disclosure compliance, and shareholder communications — and the AI fluency to build the tools the work runs on.`;

// Quick facts — the ledger block beside the summary.
export const facts = [
  { label: 'Location', value: 'New York, NY' },
  { label: 'Currently', value: 'Head of Investor Marketing, Fairfax+' },
  { label: 'Track record', value: '$5M+ revenue built · exited 2024' },
  { label: 'Focus', value: 'Private markets — deals, ops, IR' },
];

// ── NOW — what's on the desk this month. Update freely; date it.
export const now = {
  asOf: 'July 2026',
  items: [
    'Running investor-awareness programs for a multi-client roster of small- and micro-cap public companies at Fairfax Partners.',
    'Publishing The Sunrise Investor — a global-markets newsletter with a compliant sponsored-content program.',
    'Circulating a self-directed take-private analysis of QuinStreet, Inc. (NASDAQ: QNST) — available on request.',
    'Building the AI-agent back office the firm runs on — inbox triage, client files, reporting decks, compliance-checked drafting.',
  ],
};

// ── EXPERIENCE
export const experience = [
  {
    company: 'Fairfax Partners',
    alias: 'Fairfax+',
    location: 'New York, NY',
    role: 'Head of Investor Marketing',
    dates: '2025 — Present',
    tag: null,
    bullets: [
      'Lead investor-awareness and IR-marketing programs for publicly traded small- and micro-cap companies on U.S. and Canadian exchanges, advising CEOs and management teams on positioning and market communications.',
      'Own the full engagement lifecycle: strategy, messaging, paid-channel budget allocation, and executive-level performance reporting.',
      'Designed and built an in-house analytics platform integrating ad-platform, web-analytics, and market data — share price, volume, news flow — used daily for client reporting and campaign decisions.',
      'Run daily operations on self-built AI agent workflows — inbox triage, client-file management, reporting decks, and compliance-checked drafting — leverage that lets a small firm serve a multi-client roster.',
      'Operate under securities-advertising compliance discipline: sponsorship disclosure, jurisdictional disclaimers, and strict separation between marketing performance and share-price claims.',
      'Publish The Sunrise Investor, a global-markets investor newsletter with a compliant sponsored-content program.',
    ],
  },
  {
    company: 'Max Yield Bins Inc.',
    alias: null,
    location: 'Vancouver, BC',
    role: 'Co-Founder & Chief Operating Officer',
    dates: '2020 — 2024',
    tag: 'Company acquired, 2024',
    bullets: [
      'Co-founded and bootstrapped a direct-to-consumer product company; scaled it to $5M+ in cumulative revenue and exited via acquisition by the company’s wholesale partner.',
      'Ran the business end to end: product development, manufacturing and supply chain, pricing and margin strategy, customer acquisition, customer service, and finance.',
      'Built the growth engine that drove the brand: 1M+ YouTube views, 15,000+ subscribers, and paid-social acquisition managed to unit-level economics.',
      'Expanded internationally (Australia launch, 2024) and negotiated the wholesale partnerships that became the path to acquisition.',
      'Owned budgeting, cash-flow management, and financial reporting from first sale through exit negotiations.',
    ],
  },
  {
    company: 'Haven Apparel Inc.',
    alias: null,
    location: 'Vancouver, BC',
    role: 'Executive Assistant — Finance & Operations',
    dates: '2017 — 2020',
    tag: null,
    bullets: [
      'Core operations support to the leadership team through a period of rapid growth: revenue scaled from ~$8M to $22M+ and headcount from 20 to 50 during tenure.',
      'Ran payroll, accounts payable, and financial reporting across the growth period.',
      'Led brand events, retail installations, and cross-functional special projects.',
    ],
  },
];

// ── VENTURES — things owned / built / published under the 33rd umbrella.
export const ventures = [
  {
    name: 'The Sunrise Investor',
    domain: 'thesunriseinvestor.com',
    href: 'https://thesunriseinvestor.com',
    blurb:
      'Global-markets investor newsletter with a compliant sponsored-content program.',
    status: 'Publishing',
  },
  {
    name: 'Max Yield Bins',
    domain: 'maxyieldbins.com',
    href: 'https://maxyieldbins.com',
    blurb:
      'Direct-to-consumer products company — co-founded, scaled to $5M+ cumulative revenue, acquired by its wholesale partner.',
    status: 'Exited 2024',
  },
  {
    name: 'Gonzo Cream',
    domain: 'gonzocream.com',
    href: 'https://gonzocream.com',
    blurb: 'Independent consumer products brand.',
    status: 'Side venture',
  },
];

// ── BUILT — software and systems, proof of the AI-native claim.
export const built = [
  {
    name: 'Market & campaign analytics platform',
    context: 'Fairfax+ · in production',
    blurb:
      'In-house platform integrating ad-platform, web-analytics, and market data — share price, volume, news flow — used daily for client reporting and campaign decisions.',
  },
  {
    name: 'Agentic back office',
    context: 'Fairfax+ · in production',
    blurb:
      'Self-built AI agent workflows for inbox triage, client-file management, reporting decks, and compliance-checked drafting — the leverage that lets a small firm serve a multi-client roster.',
  },
  {
    name: 'This site',
    context: '33rdventures.com',
    blurb:
      'A living résumé. Every section on this page renders from a single data file — edited continuously, shipped on save.',
  },
];

// ── INDEPENDENT ANALYSIS
export const analysis = {
  title: 'QuinStreet, Inc.',
  ticker: 'NASDAQ: QNST',
  kind: 'Sponsor-led take-private analysis',
  year: '2026',
  blurb:
    'Self-directed memorandum evaluating a sponsor-led take-private: business quality, trading and precedent-transaction comparables, and leveraged-buyout framing.',
  cta: 'Request the memo',
  ctaHref:
    'mailto:rz@fairfax.plus?subject=QNST%20memo%20request',
};

// ── SKILLS — grouped for scanning.
export const skills = [
  {
    group: 'Finance & deal work',
    items: [
      'Financial reporting & budgeting',
      'Unit economics & pricing strategy',
      'Deal analysis — comparables, precedent transactions, LBO fundamentals',
    ],
  },
  {
    group: 'Capital markets',
    items: [
      'Capital-markets communications',
      'Securities-marketing compliance',
      'Executive-level performance reporting',
    ],
  },
  {
    group: 'Growth',
    items: [
      'Paid customer acquisition (Meta, Google)',
      'Funnel & acquisition economics',
      'Brand & content programs',
    ],
  },
  {
    group: 'AI-native tooling',
    items: [
      'Agentic workflows',
      'LLM-assisted research',
      'Full-stack analytics dashboards',
    ],
  },
];

export const education = [
  {
    school: 'University of Calgary',
    detail: 'Economics & Communications',
    dates: '2013 — 2016',
  },
  {
    school: 'BrainStation',
    detail: 'Digital Marketing Certificate',
    dates: '2023',
  },
];

// ── LINKS — handles confirmed 2026-07-11.
export const links = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/robzukeman' },
  { label: 'GitHub', href: 'https://github.com/rz-blip' },
];

export const calendly = 'https://calendly.com/robzukeman'; // TODO: confirm URL

export const meta = {
  version: 'v2',
  siteTitle: 'Robert Zukerman — 33rd Ventures',
  description:
    'Founder-operator with a realized exit, now working in the public markets. The living résumé of Robert Zukerman — experience, ventures, analysis, and contact.',
};
