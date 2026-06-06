// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: update this to your production domain (used for sitemap + canonical URLs).
  site: 'https://ridwanhidayat.dev',
  integrations: [sitemap()],
  build: {
    // Inline small stylesheets to cut render-blocking requests.
    inlineStylesheets: 'auto',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
