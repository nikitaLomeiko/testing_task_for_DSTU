import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      app: "/src/app",
      pages: "/src/pages",
      components: "/src/components",
      store: "/src/store",
      shared: "/src/shared",
      api: "/src/api",
    },
  },
});
