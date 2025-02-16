import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar"; 
import julieAtPhoto from '../assets/webaju_logo.webp'; 
import '../styles/home.css';
import About from "./About";
import Portfolio from "./Portfolio";
import Cv from "./Cv";
import Contact from "./Contact";

function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");

    // Fonction qui met à jour `isMobile`
    const handleResize = () => setIsMobile(mediaQuery.matches);

    // Ajouter l'écouteur d'événement
    mediaQuery.addEventListener("change", handleResize);

    // Vérifier la taille initiale
    handleResize();

    // Nettoyage de l'écouteur quand le composant est démonté
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <div className="home_page">
      <Navbar /> 
      <section className="home">
        <img 
          src={julieAtPhoto} 
          alt="Logo de Webaju" 
          className="home_photo" 
          title="Logo de Webaju, création d'applications web"
        />
        <h1 className="static-text">Julie At</h1> 
        <h2>
          <span className="dynamic-text">
            <span className="highlight">Développeuse Web</span> Freelance
          </span>
        </h2>
      </section>

      {/* Affichage du contenu des autres pages si on est en mobile/tablette */}
      {isMobile && (
        <>
          <About />
          <Portfolio />
          <Cv />
          <Contact />
        </>
      )}
    </div>
  );
}

export default Home;
