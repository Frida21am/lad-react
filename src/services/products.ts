import { api } from "../api/api";
import { IProduct } from "../types/product";

interface IProductsData {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}

export const getProducts = async () => {
  const { data } = await api.get<IProductsData>("/products");
  return data.products;
};

export const getProduct = async (id: number) => {
  const { data } = await api.get<IProduct>(`/products${id}`);
  return data;
};
