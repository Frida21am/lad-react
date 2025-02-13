import styles from "./Cart.module.scss";
import { useCartContext } from "../../hooks/useCartContext";
import useGetProducts from "../../hooks/useGetProducts";
import CartProduct from "./components/CartProduct";

function Cart() {
  const productsInCart = useCartContext().productsInCart.cart;
  const products = useGetProducts().products;

  const arrayOfIds = productsInCart.map((p) => p.id);

  const filteredProducts = products?.filter((p) => arrayOfIds.includes(p.id));

  const itemsInCart: number[] = [];
  productsInCart.forEach((p) => {
    for (let count = 0; count < p.countInCart; count++) {
      const curProduct = filteredProducts?.find(
        (product) => product.id === p.id,
      );
      itemsInCart.push(curProduct ? curProduct.price : 0);
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
            filteredProducts={filteredProducts}
            productInCart={productInCart}
          />
        ))
      ) : (
        <h3 className={styles.cartEmpty}>Нет товаров в корзине</h3>
      )}
      <section className={styles.cartFooter}>
        <div className={styles.cartFooterCount}>
          {productsInCart.length} ед.
        </div>
        <div className={styles.cartFooterPrice}>{sumOfPrices.toFixed(2)} $</div>
      </section>
    </section>
  );
}

export default Cart;
