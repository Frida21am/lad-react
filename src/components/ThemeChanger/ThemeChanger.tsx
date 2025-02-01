import styles from "./ThemeChanger.module.scss";
import { useThemeContext } from "../../hooks/useThemeContext";
import { ThemeIconLight, ThemeIconDark } from "../index";
import { useLayoutEffect } from "react";

const ThemeChanger = () => {
  const { theme, setTheme } = useThemeContext();

  useLayoutEffect(() => {
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  return (
    <div className={styles.theme}>
      {theme === "light" ? (
        <div className={styles.light} onClick={() => setTheme("dark")}>
          <ThemeIconDark />
        </div>
      ) : (
        <div className={styles.dark} onClick={() => setTheme("light")}>
          <ThemeIconLight />
        </div>
      )}
    </div>
  );
};

export default ThemeChanger;
