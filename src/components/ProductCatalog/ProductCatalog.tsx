import styles from "./ProductCatalog.module.scss";
import { ProductCard } from "../index";
import { IDisplayProduct } from "../../types/product";

type ProductProps = {
  products: IDisplayProduct[];
};

function ProductCatalog({ products }: ProductProps) {
  return (
    <div className={styles.products}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductCatalog;
