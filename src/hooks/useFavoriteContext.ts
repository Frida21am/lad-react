import { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext";
import { IFavoriteContext } from "../types/favoriteContext";

export const useFavoriteContext = () => {
  return useContext<IFavoriteContext>(FavoriteContext);
};
