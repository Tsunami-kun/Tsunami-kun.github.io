import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const works = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/works' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string(),
    category: z.enum(['Paper', 'Project', 'Product', 'Artwork']),
    year: z.number(),
    metrics: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
          progress: z.number().min(0).max(100).optional(),
        })
      )
      .optional()
      .default([]),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string(),
        })
      )
      .optional()
      .default([]),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    originalDate: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
    excerpt: z.string().optional().default(''),
    thumbnail: z.string().optional(),
  }),
});

export const collections = { works, posts };
