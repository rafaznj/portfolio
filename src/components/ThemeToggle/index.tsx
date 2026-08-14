import { StyledButton, StyledIcon } from "./styles";
import { MdSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import { useThemeContext } from "../../styles/theme-provider";
import { useTranslation } from "react-i18next";

export default function ToggleThemeButton() {
  const { toggleTheme, isDark } = useThemeContext();
  const { t } = useTranslation();

  return (
    <StyledButton
      onClick={toggleTheme}
      tooltip={isDark ? t("tooltips.themeToggle.lightMode") : t("tooltips.themeToggle.darkMode")}
    >
      <StyledIcon $visible={!isDark}>
        <MdSunny />
      </StyledIcon>
      <StyledIcon $visible={isDark}>
        <IoMdMoon />
      </StyledIcon>
    </StyledButton>
  );
}
