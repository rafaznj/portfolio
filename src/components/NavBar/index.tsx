import { useTranslation } from "react-i18next";
import "./styles.css";
import { Link } from "react-scroll";

export default function NavBar() {
  const { t } = useTranslation();
  
  return (
    <header>
      <nav className="navbar">
        <ul className="navbar-links">
          <li>
            <Link to="home" smooth duration={500} className="nav-link" offset={-64}>
              {t("components.navbar.home")}
            </Link>
          </li>
          <li>
            <Link to="skills" smooth duration={500} className="nav-link" offset={-64}>
              {t("components.navbar.skills")}
            </Link>
          </li>
          <li>
            <Link to="projects" smooth duration={500} className="nav-link" offset={-64}>
              {t("components.navbar.projects")}
            </Link>
          </li>
          <li>
            <Link to="experience" smooth duration={500} className="nav-link" offset={-64}>
              {t("components.navbar.experience")}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
