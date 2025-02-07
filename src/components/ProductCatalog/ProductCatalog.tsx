import styles from "./ProductCatalog.module.scss";
import { ProductCard } from "../index";
import { useProductsContext } from "../../hooks/useProductsContext";

function ProductCatalog() {
  const { displayProducts } = useProductsContext();

  return (
    <>
      <div className={styles.products}>
        {displayProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default ProductCatalog;
