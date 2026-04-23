import { useTranslation } from "react-i18next";
import {
  StyledActionsContainer,
  StyledDownloadCurriculum,
  StyledDownloadCvText,
  StyledDownloadIcon,
  StyledHomeContainer,
  StyledHomeContent,
  StyledIconLink,
  StyledLocation,
  StyledName,
  StyledRole,
  StyledSocialsContainer,
} from "./styles";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

export default function Home() {
  const { t } = useTranslation();
  return (
    <StyledHomeContainer>
      <StyledHomeContent>
        <StyledName>{t("pages.home.name")}</StyledName>
        <StyledRole>{t("pages.home.function")}</StyledRole>
        <StyledLocation>{t("pages.home.location")}</StyledLocation>
        <StyledActionsContainer>
          <StyledDownloadCurriculum href="/rafaelsena-curriculum.pdf" download>
            <StyledDownloadCvText>
              {t("pages.home.curriculum")}
            </StyledDownloadCvText>
            <StyledDownloadIcon />
          </StyledDownloadCurriculum>
          <StyledSocialsContainer>
            <StyledIconLink
              href="https://linkedin.com/in/rafaznj"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </StyledIconLink>
            <StyledIconLink
              href="https://github.com/rafaznj"
              target="_blank"
              aria-label="GitHub"
            >
              <FaGithub />
            </StyledIconLink>
            <StyledIconLink
              href="mailto:rafaelsena.contact@gmail.com"
              target="_blank"
              aria-label="Gmail"
            >
              <BiLogoGmail />
            </StyledIconLink>
          </StyledSocialsContainer>
        </StyledActionsContainer>
      </StyledHomeContent>
    </StyledHomeContainer>
  );
}
