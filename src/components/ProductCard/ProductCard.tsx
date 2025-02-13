import styles from "./ProductCard.module.scss";
import { IProduct } from "../../types/product";
import ProductLike from "./components/ProductLike/ProductLike";
import ProductChangeCart from "./components/ProductChangeCart/ProductChangeCart";

type ProductProps = {
  product: IProduct;
};

const ProductCard = ({ product }: ProductProps) => {
  return (
    <div className={styles.product}>
      <a href="#" className={styles.productImage}>
        <img src={product.images[0]} alt="" />
      </a>
      <div className={styles.productRating}>{product.rating}</div>
      <ProductLike productId={product.id} />
      <div className={styles.productInfo}>
        <h2 className={styles.productTitle}>{product.title}</h2>
        <div className={styles.productPrice}>
          <span className={styles.productPriceValue}>{product.price} $</span>
          <span className={styles.productPriceDiscount}>
            {product.discountPercentage}%
          </span>
        </div>
        <ProductChangeCart productId={product.id} />
      </div>
    </div>
  );
};

export default ProductCard;
