// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Images optimisées au build (pas de sharp à l'exécution sur Cloudflare).
  adapter: cloudflare({ imageService: 'compile' }),
  site: 'https://linstant-soleana.fr',
  integrations: [sitemap()]
});
