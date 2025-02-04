import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ICartContext } from "../types/cartContext";

export const useCartContext = () => {
  return useContext<ICartContext>(CartContext);
};
