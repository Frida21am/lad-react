import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { data } from "./data";
import { IDisplayProduct, IProduct } from "./types/product";
import { useFavoriteContext } from "./hooks/useFavoriteContext";
import { useCartContext } from "./hooks/useCartContext";
import { Layout } from "./components";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import CatalogPage from "./pages/CatalogPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  const [products] = useState<IProduct[]>(data);

  const favoriteContext = useFavoriteContext();
  const cartContext = useCartContext();

  // Добавляем к product дополнительные свойства countInCart и isFavorite, и собираем это в отдельном массиве displayProducts
  const displayProducts: IDisplayProduct[] = products.map((product) => {
    return {
      ...product,
      countInCart:
        cartContext.productsInCart.cart.find((el) => el.id == product.id)
          ?.countInCart ?? 0,
      isFavorite: favoriteContext.favoriteProduсts.some(
        (el) => el.id == product.id,
      ),
    };
  });
  const displayProductsInCart = displayProducts.filter(
    (product) => product.countInCart > 0,
  );

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<CatalogPage products={displayProducts} />}
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
