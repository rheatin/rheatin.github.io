import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://rheatin.github.io',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
