import { useTranslation } from "react-i18next";
import {
  StyledContainer,
  StyledLabel,
  StyledMouse,
  StyledWheel,
} from "./styles";
import { useScrollIndicator } from "./hook";

export default function ScrollIndicator() {
  const { t } = useTranslation();
  const { handleScroll } = useScrollIndicator();

  return (
    <StyledContainer onClick={handleScroll}>
      <StyledLabel>{t("components.navbar.scrollIndicator")}</StyledLabel>
      <StyledMouse>
        <StyledWheel />
      </StyledMouse>
    </StyledContainer>
  );
}
