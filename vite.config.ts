import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("/node_modules/@base-ui/") || id.includes("/node_modules/@floating-ui/")) {
            return "ui-primitives";
          }
          if (id.includes("/node_modules/react") || id.includes("/node_modules/scheduler/")) {
            return "react";
          }
        }
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
});
