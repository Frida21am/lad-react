import { createContext } from "react";
import { IFavoriteContext } from "../types/favoriteContext";

export const FavoriteContext = createContext<IFavoriteContext>({
  favoriteProduсts: [],
  onAddToFavorite: () => {},
  onRemoveFromFavorite: () => {},
});
