import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { IProductsContext } from "../types/productsContext";

export const useProductsContext = () => {
  return useContext<IProductsContext>(ProductsContext);
};
