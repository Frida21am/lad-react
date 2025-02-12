import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./null.scss";
import "./styles.scss";
import App from "./App";
import ThemeProvider from "./context/ThemeProvider";
import ProductsProvider from "./context/ProductsProvider";
import FavoriteProvider from "./context/FavoriteProvider";
import CartProvider from "./context/CartProvider";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <ProductsProvider>
          <FavoriteProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FavoriteProvider>
        </ProductsProvider>
      </ThemeProvider>
    </QueryClientProvider>
    ,
  </StrictMode>,
);
