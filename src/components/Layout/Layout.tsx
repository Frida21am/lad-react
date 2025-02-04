import styles from "./Layout.module.scss";
import { Header } from "../index";
import { useThemeContext } from "../../hooks/useThemeContext";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  const { theme } = useThemeContext();

  return (
    <div className={`theme__${theme}`}>
      <div className={styles.wrapper}>
        <header>
          <Header />
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
}

export default Layout;
