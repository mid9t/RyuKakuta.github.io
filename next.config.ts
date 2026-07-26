import type { NextConfig } from "next";
import path from "path";

/**
 * The site is published to GitHub Pages at https://<user>.github.io/RyuKakuta.github.io/,
 * so every asset and route is served under this base path.
 */
const basePath = "/RyuKakuta.github.io";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  // Emit `<route>/index.html` so URLs keep their trailing slash on GitHub Pages.
  trailingSlash: true,
  images: {
    // GitHub Pages has no image optimization server.
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  // Pin the Turbopack root to this package so a lockfile higher in the tree
  // (e.g. ~/package-lock.json) does not confuse workspace detection.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
