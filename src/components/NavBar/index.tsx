import ToggleThemeButton from "../ThemeToggle";
import LanguageToggleButton from "../LanguageToggle";
import { StyledNav, StyledControls, StyledScrollWrapper } from "./styles";
import ScrollIndicator from "../ScrollIndicator";

export function NavBar() {
  return (
    <StyledNav>
      <StyledControls>
        <LanguageToggleButton />
        <ToggleThemeButton />
      </StyledControls>
      <StyledScrollWrapper>
        <ScrollIndicator />
      </StyledScrollWrapper>
    </StyledNav>
  );
}
