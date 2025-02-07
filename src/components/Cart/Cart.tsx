import styles from "./Cart.module.scss";
import { CartProduct } from "../index";
import { useProductsContext } from "../../hooks/useProductsContext";

function Cart() {
  const { displayProductsInCart } = useProductsContext();

  const itemsInCart: number[] = [];
  displayProductsInCart.forEach((p) => {
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
      {displayProductsInCart.length ? (
        displayProductsInCart.map((productInCart) => (
          <CartProduct key={productInCart.id} productInCart={productInCart} />
        ))
      ) : (
        <h3 className={styles.cartEmpty}>Нет товаров в корзине</h3>
      )}
      <section className={styles.cartFooter}>
        <div className={styles.cartFooterCount}>
          {displayProductsInCart.length} ед.
        </div>
        <div className={styles.cartFooterPrice}>{sumOfPrices} руб.</div>
      </section>
    </section>
  );
}

export default Cart;
