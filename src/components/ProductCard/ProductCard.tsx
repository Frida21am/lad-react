import styles from "./ProductCard.module.scss";
import { IProduct } from "../../types/product";
import { ProductLike } from "../index";

type ProductProps = {
  product: IProduct;
};

const ProductCard = ({ product }: ProductProps) => {
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
        <button
          type="button"
          className={styles.productButton}
          onClick={() => alert("Товар добавлен в корзину")}
        >
          В корзину
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
