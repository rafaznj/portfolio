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
              tooltip="LinkedIn"
              variant="ghost"
              onClick={() =>
                window.open("https://linkedin.com/in/rafaznj", "_blank")
              }
            >
              <FaLinkedin />
            </StyledIconLink>
            <StyledIconLink
              tooltip="GitHub"
              variant="ghost"
              onClick={() =>
                window.open("https://github.com/rafaznj", "_blank")
              }
            >
              <FaGithub />
            </StyledIconLink>
            <StyledIconLink
              tooltip="Gmail"
              variant="ghost"
              onClick={() =>
                window.open("mailto:rafaelsena.contact@gmail.com", "_blank")
              }
            >
              <BiLogoGmail />
            </StyledIconLink>
          </StyledSocialsContainer>
        </StyledActionsContainer>
      </StyledHomeContent>
    </StyledHomeContainer>
  );
}
