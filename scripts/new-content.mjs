#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const [, , type, ...titleParts] = process.argv;

if (!type || !['post', 'work'].includes(type)) {
  console.error('Usage: node scripts/new-content.mjs <post|work> "<Title>"');
  process.exit(1);
}

const title = titleParts.join(' ').trim();
if (!title) {
  console.error('Error: title is required.');
  process.exit(1);
}

const now = new Date();
const date = now.toISOString().slice(0, 10);
const year = now.getFullYear();
const generatedSlug = `${type}-${now.toISOString().replace(/[-:TZ.]/g, '').slice(0, 14)}`;
const slug = slugify(title) || generatedSlug;

const baseDir =
  type === 'post'
    ? path.join(process.cwd(), 'src/content/posts')
    : path.join(process.cwd(), 'src/content/works');
const ext = type === 'post' ? '.md' : '.mdx';
const filePath = path.join(baseDir, `${slug}${ext}`);

if (fs.existsSync(filePath)) {
  console.error(`Error: file already exists: ${path.relative(process.cwd(), filePath)}`);
  process.exit(1);
}

fs.mkdirSync(baseDir, { recursive: true });
fs.writeFileSync(filePath, buildTemplate(type, title, date, year), 'utf8');

if (slug === generatedSlug) {
  console.warn(`Title could not be converted to slug, using generated slug: ${slug}`);
}

console.log(`Created: ${path.relative(process.cwd(), filePath)}`);
console.log('Next step: run `npm run dev` and open http://localhost:4321');

function slugify(input) {
  return input
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function buildTemplate(contentType, contentTitle, contentDate, contentYear) {
  if (contentType === 'post') {
    return `---
title: "${escapeQuotes(contentTitle)}"
date: "${contentDate}"
tags: ["note"]
excerpt: "Write a short summary for archive cards."
thumbnail: "/thumbs/post.svg"
---

Start writing your post here.
`;
  }

  return `---
title: "${escapeQuotes(contentTitle)}"
description: "One-line summary of this work."
thumbnail: "/thumbs/project.svg"
category: "Project"
year: ${contentYear}
metrics:
  - { label: "Metric A", value: "0" }
links:
  - { label: "Link", url: "https://example.com" }
---

## Context

Add background and intent.

## What Was Built

Describe your solution and key decisions.

## Outcome

Summarize measurable impact.
`;
}

function escapeQuotes(input) {
  return input.replace(/"/g, '\\"');
}
