import { IProductInFavorite } from "./productInFavorite";

export interface IFavoriteContext {
  favoriteProduсts: IProductInFavorite[];
  onAddToFavorite: (productId: number) => void;
  onRemoveFromFavorite: (productId: number) => void;
}
