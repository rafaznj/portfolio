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
  StyledSocialIcon,
  StyledSocialsContainer,
} from "./styles";

export default function Home() {
  const { t } = useTranslation();
  return (
    <StyledHomeContainer>
      <StyledHomeContent>
        <StyledName>{t("pages.home.name")}</StyledName>
        <StyledRole>{t("pages.home.function")}</StyledRole>
        <StyledLocation>{t("pages.home.location")}</StyledLocation>
        <StyledActionsContainer>
          <StyledDownloadCurriculum
            href="/src/assets/rafaelsena-curriculum.pdf"
            download
          >
            <StyledDownloadCvText>
              {t("pages.home.curriculum")}
            </StyledDownloadCvText>
            <StyledDownloadIcon />
          </StyledDownloadCurriculum>
          <StyledSocialsContainer>
            <StyledIconLink
              href="https://github.com/rafaznj"
              target="_blank"
              aria-label="GitHub"
            >
              <StyledSocialIcon
                src="/src/assets/images/github.svg"
                alt="GitHub"
              />
            </StyledIconLink>
            <StyledIconLink
              href="https://linkedin.com/in/rafaznje"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <StyledSocialIcon
                src="/src/assets/images/linkedin.svg"
                alt="LinkedIn"
              />
            </StyledIconLink>
            <StyledIconLink
              href="mailto:rafaelsena.contact@gmail.com"
              aria-label="Gmail"
            >
              <StyledSocialIcon
                src="/src/assets/images/gmail.svg"
                alt="Gmail"
              />
            </StyledIconLink>
          </StyledSocialsContainer>
        </StyledActionsContainer>
      </StyledHomeContent>
    </StyledHomeContainer>
  );
}
