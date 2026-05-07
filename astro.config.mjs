import { defineConfig } from 'astro/config';

const port = process.env.PORT ? parseInt(process.env.PORT) : 4321;

export default defineConfig({
  site: 'https://www.lenz-wohntex.de',
  output: 'static',
  server: { port },
  build: {
    format: 'directory',
  },
});
