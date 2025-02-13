import styles from "./ProductCatalog.module.scss";
import useGetProducts from "../../hooks/useGetProducts";
import ProductCard from "../ProductCard/ProductCard";

function ProductCatalog() {
  const productsData = useGetProducts();

  return (
    <>
      {productsData.isLoading ? (
        <h2 className={styles.loading}>Загрузка...</h2>
      ) : productsData.isError || productsData.products == null ? (
        <h2 className={styles.loading}>{productsData.error?.message}</h2>
      ) : (
        <div className={styles.products}>
          {productsData.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}

export default ProductCatalog;
