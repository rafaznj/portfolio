import { t } from "i18next";
import "./styles.css";
import { FaFileDownload } from "react-icons/fa";

export default function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1 className="home-hello">{t("pages.home.hello")}</h1>
        <h1 className="home-name">{t("pages.home.name")}</h1>
        <h2 className="home-role">{t("pages.home.function")}</h2>
        <div className="home-actions">
          <a href="/src/assets/cv.pdf" download className="home-download">
            <span>{t("pages.home.curriculum")}</span>
            <FaFileDownload className="download-icon" />
          </a>
          <div className="home-socials">
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
          </div>
        </div>
      </div>
    </section>
  );
}
