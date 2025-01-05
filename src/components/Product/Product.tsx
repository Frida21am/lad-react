import styles from "./Products.module.scss";
import { product } from "../../data";
import { ProductLike } from "../../components/index";

function Product() {
  return (
    <div className={styles.product}>
      <a href="#" className={styles.productImage}>
        <img src={product.imageUrl} alt="" />
      </a>
      <div className={styles.productRating}>{product.rating}</div>
      <ProductLike />
      <div className={styles.productInfo}>
        <h2 className={styles.productTitle}>{product.name}</h2>
        <div className={styles.productPrice}>
          <span className={styles.productPriceValue}>{product.price} ₽</span>
          <span className={styles.productPriceDiscount}>
            {product.discount}%
          </span>
        </div>
        <button type="button" className={styles.productButton}>
          В корзину
        </button>
      </div>
    </div>
  );
}

export default Product;
