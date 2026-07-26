/**
 * Base path the site is deployed under on GitHub Pages. Keep this in sync with
 * `basePath` in `next.config.ts`. Used for static (non-router) links such as the
 * hand-authored article pages under `public/articles/**` and raw asset URLs.
 */
export const BASE_PATH = "/RyuKakuta.github.io";

/** Prefix an absolute site path with the deployment base path. */
export function withBase(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalized}`;
}
