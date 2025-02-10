import styles from "./ProductCatalog.module.scss";
import { ProductCard } from "../index";
import { useProductsContext } from "../../hooks/useProductsContext";

function ProductCatalog() {
  const productsContext = useProductsContext();

  return (
    <>
      {productsContext.isLoading ? (
        <h2 className={styles.loading}>Загрузка...</h2>
      ) : productsContext.isError || productsContext.displayProducts == null ? (
        <h2 className={styles.loading}>{productsContext.error?.message}</h2>
      ) : (
        <div className={styles.products}>
          {productsContext.displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}

export default ProductCatalog;
