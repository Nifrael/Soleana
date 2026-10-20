// @ts-check
import { defineConfig, envField, fontProviders } from "astro/config";
import { fileURLToPath } from "node:url";

import vercel from "@astrojs/vercel";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  site: "https://linstant-soleana.fr",
  // La page de remerciement du formulaire n'a rien à faire dans le sitemap.
  integrations: [sitemap({ filter: (page) => !page.includes("/contact/merci") })],
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
      // Clé d'accès Web3Forms (publique par nature : elle figure dans le HTML).
      // Optionnelle : sans elle, la page contact n'affiche pas le formulaire.
      WEB3FORMS_CLE: envField.string({ context: "server", access: "public", optional: true }),
    },
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
