import { useEffect, useState } from "react";
import { ThemeContext, ThemeType } from "./ThemeContext";

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(
    (localStorage.getItem("app-theme") as ThemeType) || "light",
  );
  useEffect(() => {
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
