import styles from "./ProductChangeCart.module.scss";
import { useCartContext } from "../../../../hooks/useCartContext";
import ProductCounter from "../ProductCounter/ProductCounter";

type ChangeCartProps = {
  productId: number;
};

function ProductChangeCart({ productId }: ChangeCartProps) {
  const cartContext = useCartContext();
  const productInCart = cartContext.productsInCart.cart.find(
    (cartProduct) => cartProduct.id == productId,
  );

  return (
    <div className={styles.productButtons}>
      <button
        type="button"
        className={
          productInCart?.countInCart
            ? styles.productButton + " " + styles.active
            : styles.productButton
        }
        onClick={() =>
          productInCart?.countInCart
            ? cartContext.onRemoveFromCart(productId)
            : cartContext.onAddToCart(productId)
        }
      >
        {productInCart?.countInCart
          ? "Убрать из корзины"
          : "Добавить в корзину"}
      </button>
      {productInCart?.countInCart ? (
        <ProductCounter productInCart={productInCart} />
      ) : null}
    </div>
  );
}

export default ProductChangeCart;
