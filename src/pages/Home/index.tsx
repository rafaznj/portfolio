import { useTranslation } from "react-i18next";
import {
  StyledActionsContainer,
  StyledDownloadCurriculum,
  StyledDownloadCvText,
  StyledDownloadIcon,
  StyledHomeContainer,
  StyledHomeContent,
  StyledLocation,
  StyledName,
  StyledRole,
  StyledSocialLink,
  StyledSocialsContainer,
} from "./styles";
import { useScrambleText } from "../../hooks/use-scramble-text";
import { Mail, Github, Linkedin2 } from "pixelarticons/react";

export default function Home() {
  const { t } = useTranslation();
  const name = t("pages.home.name");
  const { ref, trigger } = useScrambleText<HTMLHeadingElement>(name, {
    intervalMs: 6000,
  });

  return (
    <StyledHomeContainer>
      <StyledHomeContent>
        <StyledName ref={ref} onMouseEnter={trigger}>
          {t("pages.home.name")}
        </StyledName>
        <StyledRole>{t("pages.home.function")}</StyledRole>
        <StyledLocation>{t("pages.home.location")}</StyledLocation>
        <StyledActionsContainer>
          <StyledDownloadCurriculum href="/resume.pdf" target="_blank">
            <StyledDownloadCvText>
              {t("pages.home.downloadResume")}
            </StyledDownloadCvText>
            <StyledDownloadIcon />
          </StyledDownloadCurriculum>
          <StyledSocialsContainer>
            <StyledSocialLink
              href="https://linkedin.com/in/rafaznj"
              tooltip={t("tooltips.socials.linkedin")}
              variant="ghost"
              side="top"
            >
              <Linkedin2 width={30} height={30} />
            </StyledSocialLink>
            <StyledSocialLink
              href="https://github.com/rafaznj"
              tooltip={t("tooltips.socials.github")}
              variant="ghost"
              side="top"
            >
              <Github width={30} height={30} />
            </StyledSocialLink>
            <StyledSocialLink
              href="mailto:rafaelsena.contact@gmail.com"
              tooltip={t("tooltips.socials.email")}
              variant="ghost"
              side="top"
            >
              <Mail width={30} height={30} />
            </StyledSocialLink>
          </StyledSocialsContainer>
        </StyledActionsContainer>
      </StyledHomeContent>
    </StyledHomeContainer>
  );
}
