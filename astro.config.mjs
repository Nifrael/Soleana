// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import { fileURLToPath } from "node:url";

import vercel from "@astrojs/vercel";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  site: "https://linstant-soleana.fr",
  integrations: [sitemap()],
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
  experimental: {
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
  },
});
