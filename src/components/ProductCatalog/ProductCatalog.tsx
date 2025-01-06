import styles from "./ProductCatalog.module.scss";
import { products } from "../../data";
import { ProductCard } from "../index";

function ProductCatalog() {
  return (
    <div className={styles.products}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductCatalog;
