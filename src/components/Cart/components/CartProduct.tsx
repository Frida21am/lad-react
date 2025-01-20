import styles from "./CartProduct.module.scss";
import { IDisplayProduct } from "../../../types/product";
import { ProductCounter } from "../../index";

type ProductProps = {
  productInCart: IDisplayProduct;
  onAddToCart: (productId: number) => void;
  onDecreaseCounter: (productId: number) => void;
  onRemoveFromCart: (productId: number) => void;
  onChangeCounter: (productId: number, value: number) => void;
};

function CartProduct({
  productInCart,
  onAddToCart,
  onDecreaseCounter,
  onRemoveFromCart,
  onChangeCounter,
}: ProductProps) {
  return (
    <div className={styles.product}>
      <div className={styles.productImg}>
        <img src={productInCart.imageUrl} alt="product" />
      </div>
      <div className={styles.productTitle}>{productInCart.name}</div>
      <div className={styles.productCount}>
        <ProductCounter
          productInCart={productInCart}
          onIncrement={() => onAddToCart(productInCart.id)}
          onDecrement={() => onDecreaseCounter(productInCart.id)}
          onChangeInput={(value) => onChangeCounter(productInCart.id, value)}
        />
      </div>
      <div className={styles.productPrice}>{productInCart.price}</div>
      <div className={styles.productControls}>
        <img
          src="/trash.png"
          alt="удалить"
          onClick={() => onRemoveFromCart(productInCart.id)}
        />
      </div>
    </div>
  );
}

export default CartProduct;
