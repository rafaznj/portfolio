import { StyledButton, StyledIcon } from "./styles";
import { MdSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import { useThemeContext } from "../../styles/theme-provider";

export default function ToggleThemeButton() {
  const { toggleTheme, isDark } = useThemeContext();

  return (
    <StyledButton
      onClick={toggleTheme}
      aria-label="Toggle theme"
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
