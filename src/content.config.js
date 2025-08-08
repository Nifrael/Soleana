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
      subtitle: z.string().optional(),
      quote: z.string(),
      image: imageSchema,
      icon: imageSchema,
      priceTableTitle: z.string(),
      prices: z.array(priceItemSchema),
      secondPriceTableTitle: z.string().optional(),
      secondPrices: z.array(priceItemSchema).optional()
    });
  }
});

export const collections = {
  'prestations': prestationsCollection
};