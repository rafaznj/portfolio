import { t } from "i18next";
import "./styles.css";
import { FaRegFilePdf } from "react-icons/fa6";

export default function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1 className="home-name">{t("home.name")}</h1>
        <p className="home-role">{t("home.function")}</p>

        <div className="home-actions">
          <a href="/src/assets/cv.pdf" download className="home-download">
            <span>{t("home.curriculum")}</span>
            <FaRegFilePdf className="download-icon" />
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
