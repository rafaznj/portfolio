import "./assets/i18n";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Global from "./styles/global";
import App from "./App";
import { ThemeProvider } from "./styles/theme-provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <ThemeProvider>
      <Global />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
