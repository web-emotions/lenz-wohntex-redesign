import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

const port = process.env.PORT ? parseInt(process.env.PORT) : 4321;

export default defineConfig({
  site: 'https://www.lenz-wohntex.de',
  output: "hybrid",
  server: { port },

  build: {
    format: 'directory',
  },

  adapter: cloudflare()
});