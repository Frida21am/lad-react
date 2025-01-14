import styles from "./CartProduct.module.scss";
import { IProductInCart } from "../../../types/productInCart";

type ProductProps = {
  productInCart: IProductInCart;
};

function CartProduct({ productInCart }: ProductProps) {
  return (
    <div className={styles.product}>
      <div className={styles.productImg}>
        <img src={productInCart.imageUrl} alt="product" />
      </div>
      <div className={styles.productTitle}>{productInCart.name}</div>
      <div className={styles.productCount}>{productInCart.countInCart}</div>
      <div className={styles.productPrice}>{productInCart.price}</div>
      <div className={styles.productControls}>удалить</div>
    </div>
  );
}

export default CartProduct;
