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
        if (item.id === product.id) {
          return product;
        }
        return { ...item };
      });
    });
  };

  const [productsInCart, setProductsInCart] = useState<IProductInCart[]>([]);

  const handleChangeCart = (product: IProduct) => {
    setProductsInCart((prev) => {
      if (!product.isAddedToCart) {
        return prev.filter((el) => el.id !== product.id);
      }
      return [
        ...prev,
        {
          id: product.id,
          countInCart: 1,
        },
      ];
    });
    setProducts((prev) => {
      return prev.map((item) => {
        if (item.id === product.id) {
          return product;
        }
        return { ...item };
      });
    });
  };

  const handleChangeCounter = (productInCart: IProductInCart) => {
    setProductsInCart((prev) => {
      return prev.map((item) => {
        if (item.id === productInCart.id) {
          return productInCart;
        }
        return { ...item };
      });
    });
    setProducts((products) => {
      return products.map((product) => {
        if (
          productInCart.countInCart === 0 &&
          product.id === productInCart.id
        ) {
          return {
            ...product,
            isAddedToCart: false,
          };
        }
        return { ...product };
      });
    });
  };
  //console.log(productsInCart);
  // const arr: boolean[] = [];
  // products.forEach((el) => {
  //   arr.push(el.isAddedToCart);
  // });
  // console.log(arr);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout productsInCart={productsInCart} />}>
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
