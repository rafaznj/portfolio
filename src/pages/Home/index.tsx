import { t } from "i18next";
import "./styles.css";

export default function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1 className="home-hello">{t("home.hello")}</h1>
        <h1 className="home-name">{t("home.name")}</h1>
        <h2 className="home-role">{t("home.function")}</h2>
        <p className="home-description">{t("home.description")}</p>
      </div>
    </section>
  );
}
