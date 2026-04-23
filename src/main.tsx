import "./assets/i18n";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Global from "./styles/global";
import App from "./App";
import { ThemeProvider } from "./styles/theme-provider";
import "@fontsource/syne/400.css";
import "@fontsource/syne/700.css";
import "@fontsource/syne/800.css";

import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/700.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Global />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
