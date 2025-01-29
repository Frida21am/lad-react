import { Link } from "react-router-dom";
import styles from "./ButtonCart.module.scss";
import { IProductInCart } from "../../../../types/productInCart";
import { useThemeContext } from "../../../../hooks/useThemeContext";

type HeaderProps = {
  productsInCart: IProductInCart[];
};

function ButtonCart({ productsInCart }: HeaderProps) {
  const { theme } = useThemeContext();
  return (
    <Link to="/cart" className={styles.btnCart}>
      <span className={styles.btnCartCount}>{productsInCart.length}</span>
      {theme === "light" ? (
        <img src="/blackCartBtn.png" alt="" className={styles.btnCartImage} />
      ) : (
        <img src="/whiteCartBtn.png" alt="" className={styles.btnCartImage} />
      )}
    </Link>
  );
}

export default ButtonCart;
