import { ProductsContext } from "./ProductsContext";
import { IDisplayProduct } from "../types/product";
import { useFavoriteContext } from "../hooks/useFavoriteContext";
import { useCartContext } from "../hooks/useCartContext";
import useGetProducts from "../hooks/useGetProducts";

type ProductsProviderProps = {
  children: React.ReactNode;
};

const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const { products, isLoading, isError, error } = useGetProducts();
  const favoriteContext = useFavoriteContext();
  const cartContext = useCartContext();

  // Добавляем к product дополнительные свойства countInCart и isFavorite, и собираем это в отдельном массиве displayProducts
  const displayProducts: IDisplayProduct[] | undefined = products?.map(
    (product) => {
      return {
        ...product,
        countInCart:
          cartContext.productsInCart.cart.find((el) => el.id == product.id)
            ?.countInCart ?? 0,
        isFavorite: favoriteContext.favoriteProduсts.some(
          (el) => el.id == product.id,
        ),
      };
    },
  );
  const displayProductsInCart = displayProducts?.filter(
    (product) => product.countInCart > 0,
  );

  const value = {
    displayProducts,
    displayProductsInCart,
    isLoading,
    isError,
    error,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
