import { useState } from "react";
import { IProduct } from "../types/product";
import { getProducts } from "../services/products";

function useGetProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);

  const fetchProducts = async () => {
    try {
      const { data } = await getProducts();
      setProducts(data.products);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };
  fetchProducts();

  return products;
}

export default useGetProducts;
