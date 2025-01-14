import styles from "./ProductCatalog.module.scss";
import { ProductCard } from "../index";
import { IProduct } from "../../types/product";
import { IProductInCart } from "../../types/productInCart";

type ProductProps = {
  products: IProduct[];
  productsInCart: IProductInCart[];
  onChangeFavorite: (product: IProduct) => void;
  onChangeCart: (product: IProduct) => void;
  onChangeCounter: (productInCart: IProductInCart) => void;
};

function ProductCatalog({
  products,
  productsInCart,
  onChangeFavorite,
  onChangeCart,
  onChangeCounter,
}: ProductProps) {
  return (
    <div className={styles.products}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          productsInCart={productsInCart}
          onChangeFavorite={onChangeFavorite}
          onChangeCart={onChangeCart}
          onChangeCounter={onChangeCounter}
        />
      ))}
    </div>
  );
}

export default ProductCatalog;
