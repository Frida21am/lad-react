import { ProductCatalog } from "../components/index";
import { IDisplayProduct } from "../types/product";

type ProductProps = {
  products: IDisplayProduct[];
};

const CatalogPage = ({ products }: ProductProps) => {
  return (
    <div className="container">
      <ProductCatalog products={products} />
    </div>
  );
};

export default CatalogPage;
