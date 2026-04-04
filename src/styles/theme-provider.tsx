/* eslint-disable react-refresh/only-export-components */
import { ThemeProvider as SCThemeProvider } from "styled-components";
import usePersistedState from "../hooks/use-persisted-state";
import dark from "./themes/dark";
import light from "./themes/light";
import { createContext, useContext } from "react";

const storageKey = "Theme";

interface ThemeContextProps {
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = usePersistedState<string>(storageKey, dark.title);

  const toggleTheme = () => {
    setState((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const theme = state === "dark" ? dark : light;
  const isDark = state === "dark";

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDark }}>
      <SCThemeProvider theme={theme}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }

  return context;
};
