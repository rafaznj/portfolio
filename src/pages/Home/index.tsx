import { useTranslation } from "react-i18next";
import { StyledActionsContainer, StyledContactIcon, StyledDownloadCv, StyledDownloadCvText, StyledDownloadIcon, StyledHello, StyledHomeContainer, StyledHomeContent, StyledLinkContact, StyledName, StyledRole } from "./styles";

export default function Home() {
  const { t } = useTranslation();
  return (
    <StyledHomeContainer id="home">
      <StyledHomeContent>
        <StyledHello>{t("pages.home.hello")}</StyledHello>
        <StyledName>{t("pages.home.name")}</StyledName>
        <StyledRole>{t("pages.home.function")}</StyledRole>
        <StyledActionsContainer>
          <StyledDownloadCv href="/src/assets/cv.pdf" download>
            <StyledDownloadCvText>{t("pages.home.curriculum")}</StyledDownloadCvText>
            <StyledDownloadIcon/>
          </StyledDownloadCv>

          <StyledLinkContact
            to="contact"
            smooth
            duration={500}
            offset={-64}
          >
            {t("pages.contact.touch")}
            <StyledContactIcon>
              
            </StyledContactIcon>
          </StyledLinkContact>
          {/* <div className="home-socials">
            <a
              href="https://github.com/rafaznj"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <img
                src="/src/assets/images/github.svg"
                alt="GitHub"
                className="social-icon"
              />
            </a>
            <a
              href="https://linkedin.com/in/rafaznje"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <img
                src="/src/assets/images/linkedin.svg"
                alt="LinkedIn"
                className="social-icon"
              />
            </a>
            <a
              href="mailto:rafaelsena.contact@gmail.com"
              className="social-link"
              aria-label="Gmail"
            >
              <img
                src="/src/assets/images/gmail.svg"
                alt="Gmail"
                className="social-icon"
              />
            </a>
          </div> */}
        </StyledActionsContainer>
      </StyledHomeContent>
    </StyledHomeContainer>
  );
}
