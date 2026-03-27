/**
 * Vite config: bundles React for the browser.
 * Run `npm run dev` for local preview.
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
