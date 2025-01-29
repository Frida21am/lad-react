import styles from "./Layout.module.scss";
import { Header } from "../index";
import { IProductInCart } from "../../types/productInCart";
import { useThemeContext } from "../../hooks/useThemeContext";

type HeaderProps = {
  productsInCart: IProductInCart[];
  children: React.ReactNode;
};

function Layout({ productsInCart, children }: HeaderProps) {
  const { theme } = useThemeContext();

  return (
    <div className={`theme__${theme}`}>
      <div className={styles.wrapper}>
        <header>
          <Header productsInCart={productsInCart} />
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
}

export default Layout;
