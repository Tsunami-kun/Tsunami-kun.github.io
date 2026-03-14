# Content Workflow

This project uses Astro content collections:

- `src/content/posts/*.md` for archive posts
- `src/content/works/*.mdx` for works/projects

## 1) Update Content Smoothly

Use these commands to generate files with valid frontmatter:

```bash
npm run new:post -- "Your Post Title"
npm run new:work -- "Your Work Title"
```

Then edit the created file:

- Posts: `src/content/posts/<slug>.md`
- Works: `src/content/works/<slug>.mdx`

If you already have content, you can still edit files directly inside those two folders.

## 2) Preview Locally Without Git Push

Install dependencies once:

```bash
npm install
```

Run local dev server (hot reload enabled):

```bash
npm run dev
```

Open:

- `http://localhost:4321`

For LAN/mobile preview on the same Wi-Fi:

```bash
npm run dev:host
```

The terminal will print an address like `http://192.168.x.x:4321`.

## Optional Production-like Preview

```bash
npm run build
npm run preview
```
