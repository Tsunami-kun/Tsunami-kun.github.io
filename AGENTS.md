# Repository Guidelines

## Project Structure & Module Organization
This repository is an Astro static site. Route files live in `src/pages/` (`index.astro`, `about/index.astro`, `works/[slug].astro`). Shared UI belongs in `src/components/`, page shells in `src/layouts/`, and small helpers in `src/lib/` such as `withBase.ts` and `i18n.ts`. Content is schema-validated through `src/content.config.ts`: research/project entries live in `src/content/works/*.mdx`, and travelogue posts live in `src/content/posts/*.md`. Static assets belong in `public/` (`public/thumbs`, `public/art`, `public/audio`). Do not edit generated output in `dist/` or `.astro/`.

## Build, Test, and Development Commands
Use `npm install` to install dependencies. `npm run dev` starts the Astro dev server with polling enabled, which is the safest default in this repo. `npm run dev:native` uses native file watching, and `npm run dev:host` exposes the site on port `4321` for LAN/mobile checks. `npm run build` creates the static production build in `dist/`, and `npm run preview` serves that build locally. To scaffold content with valid frontmatter, use `npm run new:post -- "Title"` or `npm run new:work -- "Title"`.

## Coding Style & Naming Conventions
Use 2-space indentation across `.astro`, `.ts`, Markdown, and CSS. Follow existing naming patterns: `PascalCase.astro` for components, camelCase for utilities, lowercase route directories, and kebab-case content slugs. Prefer the `@/` import alias for files under `src/`. Keep CSS aligned with the current style: shared tokens in `src/styles/global.css` and readable BEM-like class names such as `nav__inner`.

## Testing Guidelines
There is no dedicated unit test suite yet. Treat `npm run build` as the required pre-merge validation step. For UI or content edits, also run `npm run dev` and manually verify the affected routes, thumbnails, language text, and generated `[slug]` pages. If contributors want stricter type checks, they can add `@astrojs/check` and run `npm run astro -- check`, but that is not configured by default today.

## Commit & Pull Request Guidelines
Git history is minimal, but the existing commit uses a short, imperative subject with an optional colon: `Initial commit: Astro dark Swiss grid starter`. Keep commit titles concise, under about 72 characters, and group related content or UI changes together. PRs should include a short summary, the main files or routes affected, and screenshots for visible changes. Call out any new assets, frontmatter fields, or schema updates explicitly.
