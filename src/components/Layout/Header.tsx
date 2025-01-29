import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import { Profile, ButtonCart, ThemeChanger } from "../../components/index";
import { IProductInCart } from "../../types/productInCart";

type HeaderProps = {
  productsInCart: IProductInCart[];
};

function Header({ productsInCart }: HeaderProps) {
  const isLoggedIn = true;

  return (
    <div className="container">
      <section className={styles.header}>
        <nav className={styles.menu}>
          <ul className={styles.menuList}>
            <li>
              <NavLink to="/">Главная</NavLink>
            </li>
            <li>
              <NavLink to="/about">О нас</NavLink>
            </li>
          </ul>
        </nav>
        <div className={styles.account}>
          <ButtonCart productsInCart={productsInCart} />
          {Boolean(isLoggedIn) && <Profile />}
          <ThemeChanger />
        </div>
      </section>
    </div>
  );
}

export default Header;
