import { Button, ProductCatalog } from "../components/index";
import { IDisplayProduct } from "../types/product";

type ProductProps = {
  products: IDisplayProduct[];
  onAddToCart: (productId: number) => void;
  onRemoveFromCart: (productId: number) => void;
  onDecreaseCounter: (productId: number) => void;
  onAddToFavorite: (productId: number) => void;
  onRemoveFromFavorite: (productId: number) => void;
};

const CatalogPage = ({
  products,
  onAddToCart,
  onRemoveFromCart,
  onAddToFavorite,
  onRemoveFromFavorite,
  onDecreaseCounter,
}: ProductProps) => {
  return (
    <div className="container">
      <ProductCatalog
        products={products}
        onAddToCart={onAddToCart}
        onRemoveFromCart={onRemoveFromCart}
        onDecreaseCounter={onDecreaseCounter}
        onAddToFavorite={onAddToFavorite}
        onRemoveFromFavorite={onRemoveFromFavorite}
      />
      <Button />
    </div>
  );
};

export default CatalogPage;
