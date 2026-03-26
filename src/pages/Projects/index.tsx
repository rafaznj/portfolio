import { t } from "i18next";
import "./styles.css";
import { projects } from "./data";
import { LuExternalLink } from "react-icons/lu";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-content">
        <h2 className="projects-title">{t("pages.projects.title")}</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              className="project-card"
            >
              <div className="project-card-header">
                <span className="project-name">{project.name}</span>
                <LuExternalLink className="project-link-icon" />
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-stacks">
                {project.stacks.map((stack) => (
                  <span key={stack} className="project-stack-tag">
                    {stack}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}