import { api } from "../api/api";
import { IProduct } from "../types/product";

interface IProductsData {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}

export const getProducts = () => {
  return api.get<IProductsData>("/products");
};

export const getProduct = (id: number) => {
  return api.get<IProduct>(`/products${id}`);
};
