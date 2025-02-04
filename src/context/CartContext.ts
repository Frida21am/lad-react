import { createContext } from "react";
import { ICartContext } from "../types/cartContext";

export const CartContext = createContext<ICartContext>({
  productsInCart: { cart: [] },
  onAddToCart: () => {},
  onRemoveFromCart: () => {},
  onDecreaseCounter: () => {},
  onChangeCounter: () => {},
});
