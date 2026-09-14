import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://snax.you',
  output: 'static',
  integrations: [sitemap()],
});
