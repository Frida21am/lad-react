import { Link } from "react-router-dom";
import styles from "./ButtonCart.module.scss";
import { IProductInCart } from "../../../../types/productInCart";

type HeaderProps = {
  productsInCart: IProductInCart[];
};

function ButtonCart({ productsInCart }: HeaderProps) {
  return (
    <Link to="/cart" className={styles.btnCart}>
      <span className={styles.btnCartCount}>{productsInCart.length}</span>
      <img src="/cartBtn.png" alt="" className={styles.btnCartImage} />
    </Link>
  );
}

export default ButtonCart;
