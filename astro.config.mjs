// @ts-check

import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // Add the production domain here once it is known. It is required by
  // @astrojs/sitemap and used for canonical URLs.
  // site: "https://example.com",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
