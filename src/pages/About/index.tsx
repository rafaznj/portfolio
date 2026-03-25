import { t } from "i18next";
import "./styles.css";
import { stacks } from "./data";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        
      </div>

      <div className="skills-content">
        <h2 className="skills-title">{t("pages.about.skills")}</h2>
        <div className="stacks-icons">
          {stacks.map((item) => (
            <div key={item.file} className="stack-item">
              <img
                src={`/src/assets/images/${item.file}`}
                alt={item.name}
                className="stack-icon"
              />
              <span className="stack-name">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}