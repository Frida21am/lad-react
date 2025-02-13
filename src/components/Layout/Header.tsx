import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import ButtonCart from "../Cart/components/ButtonCart/ButtonCart";
import Profile from "../Profile/Profile";
import ThemeChanger from "../ThemeChanger/ThemeChanger";

function Header() {
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
            <li>
              <NavLink to="/blog">Наш блог</NavLink>
            </li>
          </ul>
        </nav>
        <div className={styles.account}>
          <ButtonCart />
          {Boolean(isLoggedIn) && <Profile />}
          <ThemeChanger />
        </div>
      </section>
    </div>
  );
}

export default Header;
