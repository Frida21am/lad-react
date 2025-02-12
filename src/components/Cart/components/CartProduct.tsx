import styles from "./CartProduct.module.scss";
import { IDisplayProduct } from "../../../types/product";
import { ProductCounter } from "../../index";
import { useCartContext } from "../../../hooks/useCartContext";

type ProductProps = {
  productInCart: IDisplayProduct;
};

function CartProduct({ productInCart }: ProductProps) {
  const cartContext = useCartContext();

  return (
    <div className={styles.product}>
      <div className={styles.productImg}>
        <img src={productInCart.images[0]} alt="product" />
      </div>
      <div className={styles.productTitle}>{productInCart.title}</div>
      <div className={styles.productCount}>
        <ProductCounter
          productInCart={productInCart}
          onIncrement={() => cartContext.onAddToCart(productInCart.id)}
          onDecrement={() => cartContext.onDecreaseCounter(productInCart.id)}
          onChangeInput={(value) =>
            cartContext.onChangeCounter(productInCart.id, value)
          }
        />
      </div>
      <div className={styles.productPrice}>{productInCart.price}</div>
      <div className={styles.productControls}>
        <img
          src="/trash.png"
          alt="удалить"
          onClick={() => cartContext.onRemoveFromCart(productInCart.id)}
        />
      </div>
    </div>
  );
}

export default CartProduct;
