import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig, PluginOption } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

import react from "@vitejs/plugin-react-swc";

export default defineConfig(() => {
  return {
    resolve: {
      preserveSymlinks: true,
    },
    build: {
      chunkSizeWarningLimit: 2000,
      emptyOutDir: true,
      outDir: "build",
    },
    server: {
      host: 'localhost',
      https: false,
      port: 3000,
    },
    plugins: [
      svgr(),
      react(),
      tsconfigPaths(),
      visualizer({
        brotliSize: true,
        gzipSize: true,
        template: "treemap",
        filename: "stats/rollup-stats.html",
        title: "Web ANVISA - Visualizer Bundle",
      }) as PluginOption,
    ],
  };
});
