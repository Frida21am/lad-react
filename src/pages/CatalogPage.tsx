import { Button, ProductCatalog } from "../components/index";
import { IProduct } from "../types/product";
import { IProductInCart } from "../types/productInCart";

type ProductProps = {
  products: IProduct[];
  productsInCart: IProductInCart[];
  onChangeFavorite: (product: IProduct) => void;
  onChangeCart: (product: IProduct) => void;
  onChangeCounter: (productInCart: IProductInCart) => void;
};

const CatalogPage = ({
  products,
  productsInCart,
  onChangeFavorite,
  onChangeCart,
  onChangeCounter,
}: ProductProps) => {
  return (
    <div className="container">
      <ProductCatalog
        products={products}
        productsInCart={productsInCart}
        onChangeFavorite={onChangeFavorite}
        onChangeCart={onChangeCart}
        onChangeCounter={onChangeCounter}
      />
      <Button />
    </div>
  );
};

export default CatalogPage;
