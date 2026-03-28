import { useTranslation } from "react-i18next";
import { StyledExperienceContainer, StyledExperienceContent, StyledTitle } from "./styles";

export default function Experience() {
  const { t } = useTranslation();
  
  return (
    <StyledExperienceContainer id="experience">
      <StyledExperienceContent>
        <StyledTitle>{t("pages.experience.title")}</StyledTitle>
      </StyledExperienceContent>
    </StyledExperienceContainer>
  );
}
