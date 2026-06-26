import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const productionSiteUrl = "https://arslan-jaffar-portfolio.vercel.app";
const localSiteUrl = "http://localhost:3000";
const vercelUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : undefined;
const vercelEnv = process.env.VERCEL_ENV;
const branch = process.env.VERCEL_GIT_COMMIT_REF;
const isLocalDev = !vercelEnv;
const isStaging = branch === "staging";
const isProduction = vercelEnv === "production" || branch === "main";

const siteUrl =
  process.env.VITE_SITE_URL?.replace(/\/$/, "") ||
  (isLocalDev && localSiteUrl) ||
  (isStaging && vercelUrl) ||
  (isProduction && productionSiteUrl) ||
  vercelUrl ||
  productionSiteUrl;

const noIndex =
  process.env.VITE_NOINDEX === "true" || isLocalDev || isStaging
    ? "true"
    : "false";

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
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          if (
            id.includes("react-pdf") ||
            id.includes("pdfjs-dist") ||
            id.includes("@react-pdf")
          ) {
            return "pdf";
          }

          if (id.includes("tsparticles") || id.includes("react-tsparticles")) {
            return "particles";
          }

          if (id.includes("framer-motion")) {
            return "motion";
          }

          if (id.includes("react-icons")) {
            return "icons";
          }

          if (id.includes("react-github-calendar")) {
            return "github-calendar";
          }

          if (
            id.includes("react-dom") ||
            id.includes("react-router") ||
            id.includes("scheduler") ||
            /[/\\]react[/\\]/.test(id)
          ) {
            return "react-vendor";
          }

          if (id.includes("@radix-ui") || id.includes("/radix-ui/")) {
            return "radix";
          }
        },
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
  },
});
