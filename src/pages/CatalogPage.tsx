import { ProductCatalog } from "../components/index";
import { IDisplayProduct } from "../types/product";

type ProductProps = {
  products: IDisplayProduct[];
  onAddToCart: (productId: number) => void;
  onRemoveFromCart: (productId: number) => void;
  onDecreaseCounter: (productId: number) => void;
  onChangeCounter: (productId: number, value: number) => void;
  onAddToFavorite: (productId: number) => void;
  onRemoveFromFavorite: (productId: number) => void;
};

const CatalogPage = ({
  products,
  onAddToCart,
  onRemoveFromCart,
  onDecreaseCounter,
  onChangeCounter,
  onAddToFavorite,
  onRemoveFromFavorite,
}: ProductProps) => {
  return (
    <div className="container">
      <ProductCatalog
        products={products}
        onAddToCart={onAddToCart}
        onRemoveFromCart={onRemoveFromCart}
        onDecreaseCounter={onDecreaseCounter}
        onChangeCounter={onChangeCounter}
        onAddToFavorite={onAddToFavorite}
        onRemoveFromFavorite={onRemoveFromFavorite}
      />
    </div>
  );
};

export default CatalogPage;
