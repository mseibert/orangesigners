// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://orangesingers.de',
  output: 'server',
  adapter: vercel(),
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwind()],
    // Stelle sicher, dass Umgebungsvariablen bei der Generierung verfügbar sind
    define: {
      'import.meta.env.SKIP_AUTH': JSON.stringify(process.env.SKIP_AUTH || 'false'),
    },
  },
});