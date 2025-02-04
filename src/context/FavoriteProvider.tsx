import { useState } from "react";
import { FavoriteContext } from "./FavoriteContext";
import { IProductInFavorite } from "../types/productInFavorite";

type FavoriteProviderProps = {
  children: React.ReactNode;
};

const FavoriteProvider = ({ children }: FavoriteProviderProps) => {
  const [favoriteProduсts, setFavoriteProducts] = useState<
    IProductInFavorite[]
  >([]);

  const onAddToFavorite = (productId: number) => {
    setFavoriteProducts((oldProducts) => {
      // Добавить новый элемент в массив favoriteProduсts (нажата кнопка "Добавить в избранное")
      return [...oldProducts, { id: productId }];
    });
  };

  const onRemoveFromFavorite = (productId: number) => {
    setFavoriteProducts((oldProducts) => {
      // Удалить элемент из массива favoriteProduсts (нажата кнопка "Убрать из избранного")
      return [...oldProducts.filter((p) => p.id != productId)];
    });
  };

  const value = {
    favoriteProduсts,
    onAddToFavorite,
    onRemoveFromFavorite,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
