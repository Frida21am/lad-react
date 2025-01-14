import styles from "./CartProduct.module.scss";
import { IProductInCart } from "../../../types/productInCart";

type ProductInCartProps = {
  product: IProductInCart;
};

function CartProduct({ product }: ProductInCartProps) {
  return (
    <div className={styles.product}>
      <div className={styles.productImg}>
        <img
          src="https://static.insales-cdn.com/images/products/1/4108/504852492/YN55-325A661.jpg"
          alt="product"
        />
      </div>
      <div className={styles.productTitle}>{product.id}</div>
      <div className={styles.productCount}>количество</div>
      <div className={styles.productPrice}>1000р.</div>
      <div className={styles.productControls}>удалить</div>
    </div>
  );
}

export default CartProduct;
