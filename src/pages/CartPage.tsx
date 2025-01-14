import { Cart } from "../components/index";
import { IProductInCart } from "../types/productInCart";

type ProductInCartProps = {
  productsInCart: IProductInCart[];
};

function CartPage({ productsInCart }: ProductInCartProps) {
  return <Cart productsInCart={productsInCart} />;
}

export default CartPage;
