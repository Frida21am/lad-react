import { BrowserRouter, Routes, Route } from "react-router";
import { useState } from "react";
import { data } from "./data";
import { IDisplayProduct, IProduct } from "./types/product";
import { IProductInCart } from "./types/productInCart";
import { IProductInFavorite } from "./types/productInFavorite";
import { Layout, CatalogPage } from "./components/index";
import CartPage from "./pages/CartPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  const [products] = useState<IProduct[]>(data);
  const [productsInCart, setProductsInCart] = useState<IProductInCart[]>([]);
  const [favoriteProduсts, setFavoriteProducts] = useState<
    IProductInFavorite[]
  >([]);

  const handleAddToCart = (productId: number) => {
    setProductsInCart((oldProducts) => {
      // Получить текущий productInCart, на котором мы нажали "Добавить в корзину" или Increment
      const productInCart = oldProducts.find((p) => p.id == productId);
      // Если такой товар уже есть в корзине, то увеличить его количество на единицу (нажата кнопка Increment)
      if (productInCart) {
        productInCart.countInCart++;
        return [...oldProducts];
      }
      // Если такого товара в корзине еще не было, то добавить к существующему массиву productsInCart новый объект
      return [...oldProducts, { id: productId, countInCart: 1 }];
    });
  };

  const handleRemoveFromCart = (productId: number) => {
    setProductsInCart((oldProducts) => {
      // Получить текущий productInCart, на котором мы нажали "Убрать из корзины"
      const productInCart = oldProducts.find((p) => p.id == productId);
      // Если такой товар уже есть в корзине, то удалить его
      if (productInCart) {
        return [...oldProducts.filter((p) => p.id != productId)];
      }
      return oldProducts;
    });
  };

  const handleDecreaseCounter = (productId: number) => {
    setProductsInCart((oldProducts) => {
      // Получить текущий productInCart, на котором мы нажали Decrement
      const productInCart = oldProducts.find((p) => p.id == productId);
      // Если такой товар уже есть в корзине, то уменьшить его количество на единицу
      if (productInCart) {
        productInCart.countInCart--;
        // Если свойство countInCart в текущем productInCart достигнет 0, то удалить этот элемент из массива productsInCart
        if (productInCart.countInCart == 0) {
          return [...oldProducts.filter((p) => p.id != productId)];
        }
        return [...oldProducts];
      }
      return oldProducts;
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
        productsInCart.find((el) => el.id == product.id)?.countInCart ?? 0,
      isFavorite: favoriteProduсts.some((el) => el.id == product.id),
    };
  });
  const displayProductsInCart = displayProducts.filter(
    (product) => product.countInCart > 0,
  );

  return (
    <BrowserRouter>
      <Layout productsInCart={productsInCart}>
        <Routes>
          <Route
            path="/"
            element={
              <CatalogPage
                products={displayProducts}
                onAddToCart={handleAddToCart}
                onRemoveFromCart={handleRemoveFromCart}
                onDecreaseCounter={handleDecreaseCounter}
                onAddToFavorite={handleAddToFavorite}
                onRemoveFromFavorite={handleRemoveFromFavorite}
              />
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/cart"
            element={<CartPage productsInCart={displayProductsInCart} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
