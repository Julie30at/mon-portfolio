import { NavLink } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import '../styles/navbar.css' 

function Navbar() {
    return (
        <div className="navbar">
            <header className="navbar_header">
                <nav>
                    <NavLink to="/home" end className="home-link">Accueil</NavLink>
                    <NavLink to="/about">À propos</NavLink>
                    <NavLink to="/portfolio">Portfolio</NavLink>
                    <NavLink to="/cv">CV</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>
            </header>
            <footer className="navbar_footer">
                <div className="navbar_footer_link">
                    <a 
                      href="https://www.linkedin.com/in/julie30at" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="LinkedIn"
                    >
                        <FaLinkedin size={41} />
                    </a>
                    <a 
                      href="https://github.com/Julie30at" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="GitHub"
                    >
                        <FaGithub size={41} />
                    </a>
                </div>
                <div className="navbar_footer_mention">
                    <p>© 2025 Julie AT.</p>
                    <p>Tous droits réservés</p>
                </div>
            </footer>
        </div>
    );
}

export default Navbar;
