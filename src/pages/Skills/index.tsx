import { t } from "i18next";
import "./styles.css";
import { stacks } from "./data";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-content">
        <h2 className="skills-title">{t("pages.skills.title")}</h2>
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