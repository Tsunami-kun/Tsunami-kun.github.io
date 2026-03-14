import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// GitHub Pages base path auto-detection
// - username.github.io → base is "/"
// - project repo → base is "/<repo>/"
const site = process.env.GITHUB_ACTIONS
  ? `https://${process.env.GITHUB_REPOSITORY_OWNER}.github.io`
  : 'http://localhost:4321';

function getBase() {
  if (!process.env.GITHUB_ACTIONS) return '/';
  const repo = process.env.GITHUB_REPOSITORY || '';
  const repoName = repo.split('/')[1] || '';
  const owner = process.env.GITHUB_REPOSITORY_OWNER || '';
  // If repo is username.github.io, base is /
  if (repoName === `${owner}.github.io`) return '/';
  return `/${repoName}/`;
}

export default defineConfig({
  site,
  base: getBase(),
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [mdx()],
  output: 'static',
  vite: {
    server: {
      watch: {
        // Ignore large binary artifacts and generated output to avoid EMFILE watcher exhaustion.
        ignored: [
          '**/dist/**',
          '**/.astro/**',
          '**/*.zip',
          '**/*.7z',
          '**/*.rar',
          '**/*.tar',
          '**/*.tar.gz',
          '**/*.tgz',
          '**/*.pdf',
        ],
      },
    },
  },
});
