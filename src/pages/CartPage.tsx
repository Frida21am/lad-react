import { Cart } from "../components/index";
import { IDisplayProduct } from "../types/product";

type ProductInCartProps = {
  productsInCart: IDisplayProduct[];
};

function CartPage({ productsInCart }: ProductInCartProps) {
  return <Cart productsInCart={productsInCart} />;
}

export default CartPage;
