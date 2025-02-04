import { ImmerReducer } from "use-immer";
import { CartAction, CartState } from "./types";
import { IProductInCart } from "../types/productInCart";

export const cartReducer: ImmerReducer<CartState, CartAction> = (
  draft,
  action,
) => {
  switch (action.type) {
    case "ADD_PRODUCT_ITEM":
      draft.cart = onAddToCart(draft.cart, action.productId);
      break;
    case "REMOVE_PRODUCT_ITEM":
      draft.cart = onDecreaseCounter(draft.cart, action.productId);
      break;
    case "REMOVE_ALL_PRODUCT_ITEMS":
      draft.cart = onRemoveFromCart(draft.cart, action.productId);
      break;
    case "SET_PRODUCT_ITEMS_COUNT":
      draft.cart = onChangeCounter(draft.cart, action.productId, action.count);
  }
};

const onAddToCart = (oldProducts: IProductInCart[], productId: number) => {
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

const onRemoveFromCart = (oldProducts: IProductInCart[], productId: number) => {
  // Получить текущий productInCart, на котором мы нажали "Убрать из корзины"
  const productInCart = oldProducts.find((p) => p.id == productId);
  // Если такой товар уже есть в корзине, то удалить его
  if (productInCart) {
    return [...oldProducts.filter((p) => p.id != productId)];
  }
  return oldProducts;
};

const onDecreaseCounter = (
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

const onChangeCounter = (
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
