import { StyledButton, StyledIcon } from "./styles";

import { Moon, Sun } from "pixelarticons/react";
import { useThemeContext } from "../../styled-components/theme-provider";
import { useTranslation } from "react-i18next";

export default function ThemeToggleButton() {
  const { toggleTheme, isDark } = useThemeContext();
  const { t } = useTranslation();

  return (
    <StyledButton
      onClick={toggleTheme}
      tooltip={
        isDark
          ? t("tooltips.themeToggle.darkMode")
          : t("tooltips.themeToggle.lightMode")
      }
    >
      <StyledIcon $visible={!isDark}>
        <Sun />
      </StyledIcon>
      <StyledIcon $visible={isDark}>
        <Moon />
      </StyledIcon>
    </StyledButton>
  );
}
