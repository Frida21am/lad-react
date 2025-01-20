import { Cart } from "../components/index";
import { IDisplayProduct } from "../types/product";

type ProductInCartProps = {
  productsInCart: IDisplayProduct[];
  onAddToCart: (productId: number) => void;
  onDecreaseCounter: (productId: number) => void;
  onRemoveFromCart: (productId: number) => void;
  onChangeCounter: (productId: number, value: number) => void;
};

function CartPage({
  productsInCart,
  onAddToCart,
  onDecreaseCounter,
  onRemoveFromCart,
  onChangeCounter,
}: ProductInCartProps) {
  return (
    <Cart
      productsInCart={productsInCart}
      onAddToCart={onAddToCart}
      onDecreaseCounter={onDecreaseCounter}
      onRemoveFromCart={onRemoveFromCart}
      onChangeCounter={onChangeCounter}
    />
  );
}

export default CartPage;
