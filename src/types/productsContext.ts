import { IDisplayProduct } from "./product";

export interface IProductsContext {
  displayProducts: IDisplayProduct[];
  displayProductsInCart: IDisplayProduct[];
}
