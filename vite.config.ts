import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served from https://<user>.github.io/Ash-Uchida-assesment/ on GitHub Pages,
// so assets must be referenced under that subpath.
export default defineConfig({
  base: "/Ash-Uchida-assesment/",
  plugins: [react()],
});
