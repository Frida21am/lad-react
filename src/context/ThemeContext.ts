import { createContext } from "react";

export type ThemeType = "dark" | "light";

type ThemeContextType = {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: (localStorage.getItem("app-theme") as ThemeType) || "light",
  setTheme: () => {},
});
