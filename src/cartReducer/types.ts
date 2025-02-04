import { IProductInCart } from "../types/productInCart";

export type CartState = { cart: IProductInCart[] };

export type CartAction =
  | {
      type: "ADD_PRODUCT_ITEM";
      productId: number;
    }
  | {
      type: "REMOVE_ALL_PRODUCT_ITEMS";
      productId: number;
    }
  | {
      type: "SET_PRODUCT_ITEMS_COUNT";
      productId: number;
      count: number;
    }
  | {
      type: "REMOVE_PRODUCT_ITEM";
      productId: number;
    };
