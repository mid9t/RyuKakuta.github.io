import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    runtimeErrorOverlay(),
    themePlugin(),
  ],
  root: 'client',
  resolve: {
    alias: {
      "@": resolve(__dirname, "client/src"),
    },
  },
  build: {
    outDir: resolve(__dirname, "../dist"),
    emptyOutDir: true,
  },
});
