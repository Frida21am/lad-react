import { Link } from "react-router-dom";
import styles from "./ButtonCart.module.scss";
import { useThemeContext } from "../../../../hooks/useThemeContext";
import { useCartContext } from "../../../../hooks/useCartContext";

function ButtonCart() {
  const { theme } = useThemeContext();

  const { productsInCart } = useCartContext();

  return (
    <Link to="/cart" className={styles.btnCart}>
      <span className={styles.btnCartCount}>{productsInCart.cart.length}</span>
      {theme === "light" ? (
        <img src="/blackCartBtn.png" alt="" className={styles.btnCartImage} />
      ) : (
        <img src="/whiteCartBtn.png" alt="" className={styles.btnCartImage} />
      )}
    </Link>
  );
}

export default ButtonCart;
