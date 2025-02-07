//import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./null.scss";
import "./styles.scss";
import App from "./App";
import ThemeProvider from "./context/ThemeProvider";
import ProductsProvider from "./context/ProductsProvider";
import FavoriteProvider from "./context/FavoriteProvider";
import CartProvider from "./context/CartProvider";

createRoot(document.getElementById("root")!).render(
  //<StrictMode>
  <ThemeProvider>
    <ProductsProvider>
      <FavoriteProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FavoriteProvider>
    </ProductsProvider>
  </ThemeProvider>,
  //</StrictMode>,
);
