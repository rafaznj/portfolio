import { useTranslation } from "react-i18next";
import { StyledLink, StyledNavbarContainer, StyledToggleWrapper, StyledUl } from "./styles";
import LanguageDropdown from "../LanguageDropdown";

export default function NavBar() {
  const { t } = useTranslation();

  return (
    <StyledNavbarContainer>
      <StyledUl>
        <li>
          <StyledLink to="home" smooth duration={500} offset={-64}>
            {t("components.navbar.home")}
          </StyledLink>
        </li>
        <li>
          <StyledLink to="skills" smooth duration={500} offset={-64}>
            {t("components.navbar.skills")}
          </StyledLink>
        </li>
        <li>
          <StyledLink to="projects" smooth duration={500} offset={-64}>
            {t("components.navbar.projects")}
          </StyledLink>
        </li>
        <li>
          <StyledLink to="experience" smooth duration={500} offset={-64}>
            {t("components.navbar.experience")}
          </StyledLink>
        </li>
      </StyledUl>
      <StyledToggleWrapper>
        <LanguageDropdown/>
      </StyledToggleWrapper>
    </StyledNavbarContainer>
  );
}
