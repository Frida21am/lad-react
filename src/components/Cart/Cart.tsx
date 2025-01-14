import styles from "./Cart.module.scss";
import { CartProduct } from "../index";
import { IProductInCart } from "../../types/productInCart";

type ProductInCartProps = {
  productsInCart: IProductInCart[];
};

function Cart({ productsInCart }: ProductInCartProps) {
  return (
    <section className={styles.cart}>
      <section className={styles.cartHeader}>
        <div className={styles.cartHeaderTitle}>наименование</div>
        <div className={styles.cartHeaderCount}>количество</div>
        <div className={styles.cartHeaderCost}>стоимость</div>
      </section>
      {productsInCart.map((product) => (
        <CartProduct key={product.id} product={product} />
      ))}
      <section className={styles.cartFooter}>
        <div className={styles.cartFooterCount}>5 ед.</div>
        <div className={styles.cartFooterPrice}>10 000 руб.</div>
      </section>
    </section>
  );
}

export default Cart;
