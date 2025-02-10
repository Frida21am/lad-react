import { IDisplayProduct } from "./product";

export interface IProductsContext {
  displayProducts: IDisplayProduct[] | undefined;
  displayProductsInCart: IDisplayProduct[] | undefined;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
}
