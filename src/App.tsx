import { BrowserRouter, Routes, Route } from "react-router";
import { useState } from "react";
import { useImmerReducer } from "use-immer";
import { data } from "./data";
import { cartReducer } from "./cartReducer/reducer";
import { IDisplayProduct, IProduct } from "./types/product";
import { IProductInFavorite } from "./types/productInFavorite";
import {
  Layout,
  CatalogPage,
  CartPage,
  AboutPage,
  NotFoundPage,
} from "./components/index";

const App = () => {
  const [products] = useState<IProduct[]>(data);
  const [productsInCart, dispatch] = useImmerReducer(cartReducer, { cart: [] });
  const [favoriteProduсts, setFavoriteProducts] = useState<
    IProductInFavorite[]
  >([]);

  const handleAddToCart = (productId: number) => {
    dispatch({
      type: "ADD_PRODUCT_ITEM",
      productId,
    });
  };

  const handleRemoveFromCart = (productId: number) => {
    dispatch({
      type: "REMOVE_ALL_PRODUCT_ITEMS",
      productId,
    });
  };

  const handleDecreaseCounter = (productId: number) => {
    dispatch({
      type: "REMOVE_PRODUCT_ITEM",
      productId,
    });
  };

  const handleChangeCounter = (productId: number, value: number) => {
    dispatch({
      type: "SET_PRODUCT_ITEMS_COUNT",
      productId,
      count: value,
    });
  };

  const handleAddToFavorite = (productId: number) => {
    setFavoriteProducts((oldProducts) => {
      // Добавить новый элемент в массив favoriteProduсts (нажата кнопка "Добавить в избранное")
      return [...oldProducts, { id: productId }];
    });
  };

  const handleRemoveFromFavorite = (productId: number) => {
    setFavoriteProducts((oldProducts) => {
      // Удалить элемент из массива favoriteProduсts (нажата кнопка "Убрать из избранного")
      return [...oldProducts.filter((p) => p.id != productId)];
    });
  };

  // Добавляем к product дополнительные свойства countInCart и isFavorite, и собираем это в отдельном массиве displayProducts
  const displayProducts: IDisplayProduct[] = products.map((product) => {
    return {
      ...product,
      countInCart:
        productsInCart.cart.find((el) => el.id == product.id)?.countInCart ?? 0,
      isFavorite: favoriteProduсts.some((el) => el.id == product.id),
    };
  });
  const displayProductsInCart = displayProducts.filter(
    (product) => product.countInCart > 0,
  );

  return (
    <BrowserRouter>
      <Layout productsInCart={productsInCart.cart}>
        <Routes>
          <Route
            path="/"
            element={
              <CatalogPage
                products={displayProducts}
                onAddToCart={handleAddToCart}
                onRemoveFromCart={handleRemoveFromCart}
                onDecreaseCounter={handleDecreaseCounter}
                onChangeCounter={handleChangeCounter}
                onAddToFavorite={handleAddToFavorite}
                onRemoveFromFavorite={handleRemoveFromFavorite}
              />
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/cart"
            element={
              <CartPage
                productsInCart={displayProductsInCart}
                onAddToCart={handleAddToCart}
                onDecreaseCounter={handleDecreaseCounter}
                onRemoveFromCart={handleRemoveFromCart}
                onChangeCounter={handleChangeCounter}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
