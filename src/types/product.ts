export interface IProduct {
  id: number;
  title: string;
  price: number;
  discountPercentage?: number;
  rating: number;
  images: string[];
}

export interface IDisplayProduct extends IProduct {
  isFavorite: boolean;
  countInCart: number;
}
