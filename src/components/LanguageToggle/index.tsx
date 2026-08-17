import { GiBrazilFlag } from "react-icons/gi";

import useLanguageToggleButton from "./hook";
import { StyledButton, StyledIcon } from "./styles";
import { Earth } from "pixelarticons/react";

export default function LanguageToggleButton() {
  const { language, toggleLanguage, t } = useLanguageToggleButton();

  return (
    <StyledButton
      variant="default"
      tooltip={
        language === "pt"
          ? t("tooltips.languageToggle.pt")
          : t("tooltips.languageToggle.en")
      }
      onClick={toggleLanguage}
    >
      {language === "pt" ? (
        <StyledIcon>
          <GiBrazilFlag />
        </StyledIcon>
      ) : (
        <StyledIcon>
          <Earth />
        </StyledIcon>
      )}
    </StyledButton>
  );
}
