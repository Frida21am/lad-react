import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../services/products";

function useGetProducts() {
  const {
    data: products,
    error,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    retry: 3,
    retryDelay: 1000,
  });
  return { products, isLoading, isError, error };
}

export default useGetProducts;
