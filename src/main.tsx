import "./assets/i18n";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Global from "./styled-components/global";
import App from "./App";
import { ThemeProvider } from "./styled-components/theme-provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Global />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
