export interface IProduct {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  discount?: number;
  rating: number;
}

export interface IDisplayProduct extends IProduct {
  isFavorite: boolean;
  countInCart: number;
}
