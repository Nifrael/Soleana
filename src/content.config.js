import { defineCollection, z } from "astro:content";

const priceItemSchema = z.object({
  name: z.string(),
  duration: z.string(),
  price: z.string(),
  description: z.string(),
});

const prestationsCollection = defineCollection({
  type: "data",
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
      // Autant de grilles que nécessaire (Femmes, Hommes, Formules…), dans l'ordre d'affichage.
      priceTables: z
        .array(
          z.object({
            title: z.string(),
            prices: z.array(priceItemSchema),
          }),
        )
        .min(1),
      // Phrase affichée sous les tarifs (produits utilisés, hygiène…).
      note: z.string().optional(),
      // false pour une prestation hors domicile : masque la liste des villages.
      homeService: z.boolean().default(true),
    });
  },
});

const partenairesCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    location: z.string(),
    websiteUrl: z.string().url(),
    description: z.string(),
  }),
});

export const collections = {
  prestations: prestationsCollection,
  partenaires: partenairesCollection,
};
