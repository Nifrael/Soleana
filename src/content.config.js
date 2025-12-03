import { defineCollection, z } from 'astro:content';

const priceItemSchema = z.object({
  name: z.string(),
  duration: z.string(),
  price: z.string(),
  description: z.string()
});


const prestationsCollection = defineCollection({
  type: 'data',
  schema: ({ image }) => {

    const imageSchema = z.object({
      src: image(),
      alt: z.string(),
    });

    return z.object({
      title: z.string(),
      description: z.string().optional(),
      pageLayout: z.string().optional(),
      professionalDisclaimer: z.string().optional(),
      subtitle: z.string().optional(),
      quote: z.string(),
      image: imageSchema,
      icon: imageSchema,
      priceTableTitle: z.string(),
      prices: z.array(priceItemSchema),
      secondPriceTableTitle: z.string().optional(),
      secondPrices: z.array(priceItemSchema).optional(),
      thirdPriceTableTitle: z.string().optional(),
      thirdPrices: z.array(priceItemSchema).optional(),
      fourthPriceTableTitle: z.string().optional(),
      fourthPrices: z.array(priceItemSchema).optional()
    });
  }
});

const partenairesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    location: z.string(),
    websiteUrl: z.string().url(),
    description: z.string(),
  })
});

const newsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    image: z.string().optional(),
    link: z.string().optional(),
    linkText: z.string().optional(),
    isNew: z.boolean().default(false),
  })
});

export const collections = {
  'prestations': prestationsCollection,
  'partenaires': partenairesCollection,
  'news': newsCollection
};