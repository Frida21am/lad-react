import styles from "./Cart.module.scss";
import { CartProduct } from "../index";
import { IDisplayProduct } from "../../types/product";

type ProductInCartProps = {
  productsInCart: IDisplayProduct[];
  onAddToCart: (productId: number) => void;
  onDecreaseCounter: (productId: number) => void;
  onRemoveFromCart: (productId: number) => void;
  onChangeCounter: (productId: number, value: number) => void;
};

function Cart({
  productsInCart,
  onAddToCart,
  onDecreaseCounter,
  onRemoveFromCart,
  onChangeCounter,
}: ProductInCartProps) {
  const itemsInCart: number[] = [];
  productsInCart.forEach((p) => {
    for (let count = 0; count < p.countInCart; count++) {
      itemsInCart.push(p.price);
    }
  });
  const sumOfPrices: number = itemsInCart.reduce(function (a, b) {
    return a + b;
  }, 0);

  return (
    <section className={styles.cart}>
      <section className={styles.cartHeader}>
        <div className={styles.cartHeaderTitle}>наименование</div>
        <div className={styles.cartHeaderCount}>количество</div>
        <div className={styles.cartHeaderCost}>стоимость</div>
      </section>
      {productsInCart.length ? (
        productsInCart.map((productInCart) => (
          <CartProduct
            key={productInCart.id}
            productInCart={productInCart}
            onAddToCart={onAddToCart}
            onDecreaseCounter={onDecreaseCounter}
            onRemoveFromCart={onRemoveFromCart}
            onChangeCounter={onChangeCounter}
          />
        ))
      ) : (
        <h3 className={styles.cartEmpty}>Нет товаров в корзине</h3>
      )}
      <section className={styles.cartFooter}>
        <div className={styles.cartFooterCount}>
          {productsInCart.length} ед.
        </div>
        <div className={styles.cartFooterPrice}>{sumOfPrices} руб.</div>
      </section>
    </section>
  );
}

export default Cart;
