export interface PriceItem {
  name: string;
  duration: string;
  price: string;
  description: string;
}

export interface PrestationData {
  title: string;
  subtitle?: string;
  quote: string;
  image: ImageMetadata;
  icon: ImageMetadata;
  priceTableTitle: string;
  prices: PriceItem[];
  secondPriceTableTitle?: string;
  secondPrices?: PriceItem[];
}
