# Ridwan Hidayat — Portfolio

A fast, accessible personal portfolio built with [Astro](https://astro.build/). Ships zero
client-side framework JavaScript — only a small progressive-enhancement script for scroll reveals
and the mobile menu.

## Tech

- **Astro 5** — static output, component islands, build-time image optimization
- **TypeScript** (strict) — typed content data
- **@astrojs/sitemap** — generated `sitemap-index.xml`
- Self-contained CSS with design tokens (no UI framework)

## Getting started

```bash
bun install      # install dependencies
bun run dev      # start the dev server at http://localhost:4321
bun run build    # build the static site to ./dist
bun run preview  # preview the production build locally
bun run check    # type-check .astro / .ts files
```

## Project structure

```text
src/
├── assets/            # images processed/optimized by Astro (profile.png)
├── components/        # one component per page section
├── data/              # typed content — edit copy here, not in markup
│   ├── site.ts        # name, role, contact details, stats
│   ├── navigation.ts  # nav links
│   ├── services.ts    # "I can help you with"
│   ├── experience.ts  # work history
│   ├── skills.ts      # skill groups
│   ├── projects.ts    # recent projects
│   └── products.ts    # SaaS products
├── layouts/
│   └── BaseLayout.astro  # <html> shell, SEO meta, fonts, JSON-LD
├── pages/
│   └── index.astro    # composes the section components
├── scripts/
│   └── interactions.ts   # nav scroll state, mobile menu, reveal, counters
└── styles/
    └── global.css     # tokens, reset, shared utilities & components
```

## Editing content

All copy lives in `src/data/*.ts`. For example, to add a project, append an entry to
`src/data/projects.ts` — the numbering and layout update automatically.

## Before deploying

Update `site` in [`astro.config.mjs`](./astro.config.mjs) to your production domain so the sitemap
and canonical/Open Graph URLs are correct.

The original single-file design is preserved for reference in [`reference/`](./reference/).
