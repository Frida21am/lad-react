import { IProductInCart } from "./productInCart";

export interface ICartContext {
  productsInCart: { cart: IProductInCart[] };
  onAddToCart: (productId: number) => void;
  onRemoveFromCart: (productId: number) => void;
  onDecreaseCounter: (productId: number) => void;
  onChangeCounter: (productId: number, value: number) => void;
}
