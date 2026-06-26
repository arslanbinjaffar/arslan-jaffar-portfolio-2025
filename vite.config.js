import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const productionSiteUrl = "https://arslan-jaffar-portfolio-2025.vercel.app";
const vercelUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : undefined;
const isStagingBranch = process.env.VERCEL_GIT_COMMIT_REF === "staging";

const siteUrl =
  process.env.VITE_SITE_URL?.replace(/\/$/, "") ||
  (isStagingBranch && vercelUrl) ||
  vercelUrl ||
  productionSiteUrl;

const noIndex =
  process.env.VITE_NOINDEX === "true" || isStagingBranch ? "true" : "false";

export default defineConfig({
  define: {
    "import.meta.env.VITE_SITE_URL": JSON.stringify(siteUrl),
    "import.meta.env.VITE_NOINDEX": JSON.stringify(noIndex),
  },
  plugins: [react(), tailwindcss()],
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "dist",
    sourcemap: false,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
  },
});
