import { getProducts } from "../services/products";
import { useQuery } from "@tanstack/react-query";

function useGetProducts() {
  const {
    data: products,
    error,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    retry: 3,
    retryDelay: 1000,
  });
  return { products, isLoading, isError, error };
}

export default useGetProducts;
