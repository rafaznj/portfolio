import { useTranslation } from 'react-i18next'
import './styles.css'
import { Link } from 'react-scroll'

export default function NavBar() {
    const { t } = useTranslation()
    return (
        <header>
            <nav className="navbar">
                <ul className="navbar-links">
                    <li><Link to="home" smooth duration={500} className="nav-link">{t('navbar.home')}</Link></li>
                    <li><Link to="about" smooth duration={500} className="nav-link">{t('navbar.about')}</Link></li>
                    <li><Link to="skills" smooth duration={500} className="nav-link">{t('navbar.skills')}</Link></li>
                    <li><Link to="experience" smooth duration={500} className="nav-link">{t('navbar.experience')}</Link></li>
                    <li><Link to="projects" smooth duration={500} className="nav-link">{t('navbar.projects')}</Link></li>
                </ul>
            </nav>
        </header>
    )
}