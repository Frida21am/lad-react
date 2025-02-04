import { useImmerReducer } from "use-immer";
import { CartContext } from "./CartContext";
import { cartReducer } from "../cartReducer/reducer";

type CartProviderProps = {
  children: React.ReactNode;
};

const CartProvider = ({ children }: CartProviderProps) => {
  // Создаем useImmerReducer, в параметры которого кладутся функция reducer и initialState - объект под названием productsInCart,
  // внутри которого будет лежать cart, и в нем пустой массив для будущих IProductInCart
  const [productsInCart, dispatch] = useImmerReducer(cartReducer, { cart: [] });

  const onAddToCart = (productId: number) => {
    dispatch({
      type: "ADD_PRODUCT_ITEM",
      productId,
    });
  };

  const onRemoveFromCart = (productId: number) => {
    dispatch({
      type: "REMOVE_ALL_PRODUCT_ITEMS",
      productId,
    });
  };

  const onDecreaseCounter = (productId: number) => {
    dispatch({
      type: "REMOVE_PRODUCT_ITEM",
      productId,
    });
  };

  const onChangeCounter = (productId: number, value: number) => {
    dispatch({
      type: "SET_PRODUCT_ITEMS_COUNT",
      productId,
      count: value,
    });
  };

  const value = {
    productsInCart,
    onAddToCart,
    onRemoveFromCart,
    onDecreaseCounter,
    onChangeCounter,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
