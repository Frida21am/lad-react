import styles from "./ProductCatalog.module.scss";
import { ProductCard } from "../index";
import { IDisplayProduct } from "../../types/product";

type ProductProps = {
  products: IDisplayProduct[];
  onAddToCart: (productId: number) => void;
  onRemoveFromCart: (productId: number) => void;
  onDecreaseCounter: (productId: number) => void;
  onChangeCounter: (productId: number, value: number) => void;
  onAddToFavorite: (productId: number) => void;
  onRemoveFromFavorite: (productId: number) => void;
};

function ProductCatalog({
  products,
  onAddToCart,
  onRemoveFromCart,
  onDecreaseCounter,
  onChangeCounter,
  onAddToFavorite,
  onRemoveFromFavorite,
}: ProductProps) {
  return (
    <div className={styles.products}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onRemoveFromCart={onRemoveFromCart}
          onDecreaseCounter={onDecreaseCounter}
          onChangeCounter={onChangeCounter}
          onAddToFavorite={onAddToFavorite}
          onRemoveFromFavorite={onRemoveFromFavorite}
        />
      ))}
    </div>
  );
}

export default ProductCatalog;
