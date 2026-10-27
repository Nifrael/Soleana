import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const priceItemSchema = z.object({
  name: z.string(),
  duration: z.string(),
  price: z.string(),
  description: z.string(),
});

const prestationsCollection = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/prestations" }),
  schema: ({ image }) => {
    const imageSchema = z.object({
      src: image(),
      alt: z.string(),
    });

    return z.object({
      title: z.string(),
      description: z.string().optional(),
      professionalDisclaimer: z.string().optional(),
      familyInfo: z.string().optional(),
      subtitle: z.string().optional(),
      quote: z.string(),
      image: imageSchema,
      icon: imageSchema,
      priceTables: z
        .array(
          z.object({
            title: z.string(),
            prices: z.array(priceItemSchema),
          }),
        )
        .min(1),
      note: z.string().optional(),
      homeService: z.boolean().default(true),
    });
  },
});

const partenairesCollection = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/partenaires" }),
  schema: z.object({
    name: z.string(),
    location: z.string(),
    websiteUrl: z.url(),
    description: z.string(),
  }),
});

export const collections = {
  prestations: prestationsCollection,
  partenaires: partenairesCollection,
};
