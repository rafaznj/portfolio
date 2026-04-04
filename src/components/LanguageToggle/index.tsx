import { LiaFlagUsaSolid } from "react-icons/lia";
import useLanguageToggleButton from "./hook";
import { StyledButton, StyledIcon } from "./styles";
import { GiBrazilFlag } from "react-icons/gi";
export default function LanguageToggleButton() {
  const { language, toggleLanguage } = useLanguageToggleButton();

  return (
    <StyledButton onClick={toggleLanguage} aria-label="Language toggle button">
      {language === "pt" ? (
        <StyledIcon>
          <GiBrazilFlag />
        </StyledIcon>
      ) : (
        <StyledIcon>
          <LiaFlagUsaSolid />
        </StyledIcon>
      )}
    </StyledButton>
  );
}
