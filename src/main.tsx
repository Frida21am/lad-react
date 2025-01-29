import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./null.scss";
import "./styles.scss";
import App from "./App";
import ThemeProvider from "./context/ThemeProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
