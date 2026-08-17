import ThemeToggleButton from "../ThemeToggle";
import LanguageToggleButton from "../LanguageToggle";
import { StyledNav, StyledControls, StyledScrollWrapper } from "./styles";
import ScrollIndicator from "../ScrollIndicator";
import { useNavBar } from "./hook";

export function NavBar() {
  const { hidden } = useNavBar();
  return (
    <>
      <StyledNav $hidden={hidden}>
        <StyledControls>
          <LanguageToggleButton />
          <ThemeToggleButton />
        </StyledControls>
      </StyledNav>
      <StyledScrollWrapper>
        <ScrollIndicator />
      </StyledScrollWrapper>
    </>
  );
}
