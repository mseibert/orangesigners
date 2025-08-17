// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://orangesingers.de',
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwind()],
  },
});