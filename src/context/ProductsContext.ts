import { createContext } from "react";
import { IProductsContext } from "../types/productsContext";

export const ProductsContext = createContext<IProductsContext>({
  displayProducts: [],
  displayProductsInCart: [],
  isLoading: false,
  isError: false,
  error: null,
});
