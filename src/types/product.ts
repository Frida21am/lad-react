export interface IProduct {
  id: number;
  title: string;
  price: number;
  discountPercentage?: number;
  rating: number;
  images: string[];
}
