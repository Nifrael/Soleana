// @ts-check
import { defineConfig, envField, fontProviders } from "astro/config";
import { fileURLToPath } from "node:url";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.linstant-soleana.fr",
  trailingSlash: "always",
  integrations: [
    sitemap({ filter: (page) => !page.includes("/contact/merci") && !page.includes("/404") }),
  ],
  vite: {
    resolve: {
      alias: {
        "@styles": fileURLToPath(new URL("./src/styles", import.meta.url)),
      },
    },
  },
  build: {
    inlineStylesheets: "always",
  },
  env: {
    schema: {
      WEB3FORMS_CLE: envField.string({ context: "server", access: "public" }),
    },
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Playfair Display",
      cssVariable: "--font-title",
      weights: ["400 900"],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["serif"],
    },
    {
      provider: fontProviders.google(),
      name: "Maven Pro",
      cssVariable: "--font-text",
      weights: ["400 900"],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["sans-serif"],
    },
    {
      provider: fontProviders.google(),
      name: "Inria Serif",
      cssVariable: "--font-little-text",
      weights: ["400"],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["serif"],
    },
  ],
});
