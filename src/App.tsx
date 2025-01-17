import { BrowserRouter, Routes, Route } from "react-router";
import { useState } from "react";
import { data } from "./data";
import { IProduct } from "./types/product";
import { IProductInCart } from "./types/productInCart";
import { Layout, CatalogPage } from "./components/index";
import CartPage from "./pages/CartPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  const [products, setProducts] = useState<IProduct[]>(data);

  const handleChangeFavorite = (product: IProduct) => {
    setProducts((prev) => {
      return prev.map((item) => {
        // Изменить свойство isFavorite в product на противположное
        if (item.id === product.id) {
          return product;
        }
        // Остальные элементы просто вернуть
        return { ...item };
      });
    });
  };

  const [productsInCart, setProductsInCart] = useState<IProductInCart[]>([]);

  const handleChangeCart = (product: IProduct) => {
    setProducts((oldProducts) => {
      return oldProducts.map((item) => {
        // Изменить свойство isAddedToCart в product на противположное
        if (item.id === product.id) {
          return product;
        }
        // Остальные элементы просто вернуть
        return { ...item };
      });
    });
    setProductsInCart((oldProductsInCart) => {
      // Если нажато "Убрать из корзины" удалить из списка productsInCart этот элемент
      if (!product.isAddedToCart) {
        return oldProductsInCart.filter((el) => el.id !== product.id);
      }
      // Если нажато "Добавить в корзину" к предыдущему массиву productsInCart добавить новый элемент
      return [
        ...oldProductsInCart,
        {
          id: product.id,
          countInCart: 1,
          name: product.name,
          imageUrl: product.imageUrl,
          price: product.price,
        },
      ];
    });
  };

  const handleChangeCounter = (productInCart: IProductInCart) => {
    setProducts((products) => {
      return products.map((product) => {
        // Если свойство countInCart текущего элемента равно 0, то у текущего продукта изменить свойство isAddedToCart на false
        if (
          product.id === productInCart.id &&
          productInCart.countInCart === 0
        ) {
          return {
            ...product,
            isAddedToCart: false,
          };
        }
        // Если свойство countInCart текущего элемента больше 0, то просто вернуть тот же продукт
        return { ...product };
      });
    });
    setProductsInCart((oldProductsInCart) => {
      // Если свойство countInCart текущего элемента равно 0, удалить этот элемент из массива productsInCart
      if (productInCart.countInCart === 0) {
        return productsInCart.filter((el) => el.id !== productInCart.id);
      }
      return oldProductsInCart.map((item) => {
        // Изменить свойство countInCart в productInCart
        if (item.id === productInCart.id) {
          return productInCart;
        }
        // Остальные элементы просто вернуть
        return { ...item };
      });
    });
  };

  return (
    <BrowserRouter>
      <Layout productsInCart={productsInCart}>
        <Routes>
          <Route
            path="/"
            element={
              <CatalogPage
                products={products}
                productsInCart={productsInCart}
                onChangeFavorite={handleChangeFavorite}
                onChangeCart={handleChangeCart}
                onChangeCounter={handleChangeCounter}
              />
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/cart"
            element={<CartPage productsInCart={productsInCart} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
