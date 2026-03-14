/**
 * Prepend the Astro base path to any site-internal URL.
 * Works both at build time (SSG) and dev time.
 *
 * Usage:
 *   import { withBase } from '@/lib/withBase';
 *   <a href={withBase('/works')}>Works</a>
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL; // always ends with /
  // Avoid double slashes
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${clean}`;
}
