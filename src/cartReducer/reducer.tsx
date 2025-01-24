import { ImmerReducer } from "use-immer";
import { CartAction, CartState } from "./types";
import { IProductInCart } from "../types/productInCart";

export const cartReducer: ImmerReducer<CartState, CartAction> = (
  draft,
  action: CartAction,
) => {
  switch (action.type) {
    case "ADD_PRODUCT_ITEM":
      draft.cart = handleAddToCart(draft.cart, action.productId);
      break;
    case "REMOVE_PRODUCT_ITEM":
      draft.cart = handleDecreaseCounter(draft.cart, action.productId);
      break;
    case "REMOVE_ALL_PRODUCT_ITEMS":
      draft.cart = handleRemoveFromCart(draft.cart, action.productId);
      break;
    case "SET_PRODUCT_ITEMS_COUNT":
      draft.cart = handleChangeCounter(
        draft.cart,
        action.productId,
        action.count,
      );
  }
};

const handleAddToCart = (oldProducts: IProductInCart[], productId: number) => {
  // Получить текущий productInCart, на котором мы нажали "Добавить в корзину" или Increment
  const productInCart = oldProducts.find((p) => p.id == productId);
  // Если такой товар уже есть в корзине, то увеличить его количество на единицу (нажата кнопка Increment)
  if (productInCart) {
    productInCart.countInCart++;
    return [...oldProducts];
  }
  // Если такого товара в корзине еще не было, то добавить к существующему массиву productsInCart новый объект
  return [...oldProducts, { id: productId, countInCart: 1 }];
};

const handleRemoveFromCart = (
  oldProducts: IProductInCart[],
  productId: number,
) => {
  // Получить текущий productInCart, на котором мы нажали "Убрать из корзины"
  const productInCart = oldProducts.find((p) => p.id == productId);
  // Если такой товар уже есть в корзине, то удалить его
  if (productInCart) {
    return [...oldProducts.filter((p) => p.id != productId)];
  }
  return oldProducts;
};

const handleDecreaseCounter = (
  oldProducts: IProductInCart[],
  productId: number,
) => {
  // Получить текущий productInCart, на котором мы нажали Decrement
  const productInCart = oldProducts.find((p) => p.id == productId);
  // Если такой товар уже есть в корзине, то уменьшить его количество на единицу
  if (productInCart) {
    productInCart.countInCart--;
    // Если свойство countInCart в текущем productInCart достигнет 0, то удалить этот элемент из массива productsInCart
    if (productInCart.countInCart == 0) {
      return [...oldProducts.filter((p) => p.id != productId)];
    }
    return [...oldProducts];
  }
  return oldProducts;
};

const handleChangeCounter = (
  oldProducts: IProductInCart[],
  productId: number,
  value: number,
) => {
  // Получить текущий productInCart, на котором мы нажали Decrement
  const productInCart = oldProducts.find((p) => p.id == productId);
  // Если такой товар уже есть в корзине, то задать ему количество, которое мы ввели в инпут
  if (productInCart) {
    productInCart.countInCart = value;
    // Если свойство countInCart в текущем productInCart достигнет 0, то удалить этот элемент из массива productsInCart
    if (productInCart.countInCart == 0) {
      return [...oldProducts.filter((p) => p.id != productId)];
    }
    return [...oldProducts];
  }
  return oldProducts;
};
