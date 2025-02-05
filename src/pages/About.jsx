import { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { NavLink } from "react-router-dom";
import "../styles/about.CSS";
import jsLogo from "../assets/logoJs.webp";
import htmlLogo from "../assets/logoHTML.webp";
import sassCssLogo from "../assets/logoSassCSS.webp";
import reactLogo from "../assets/logoREACT.webp";
import nodeLogo from "../assets/logoNodejsexpress.webp";
import mongoLogo from "../assets/logoMongoDB.webp";
import figmaLogo from "../assets/logoFigma.webp";
import postmanLogo from "../assets/logoPostman.webp";
import trelloLogo from "../assets/logoTrello.webp";

function About() {
  useEffect(() => {
    const handleAnchorScroll = (event) => {
      if (event.target.tagName === "A" && event.target.getAttribute("href").startsWith("#")) {
        event.preventDefault();
        const targetId = event.target.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", handleAnchorScroll);

    return () => {
      document.removeEventListener("click", handleAnchorScroll);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <section className="about">
        <h1 className="about_title">à propos</h1>
        <section className="about_info">
          <section className="about_info_presentation">
             <div className="about_info_background"></div>
             <div className="about_info_presentation_introduction">
              <div className="about_info_presentation_text">
              <p>
                Je suis <strong>Développeuse web</strong> Freelance spécialisée en <strong><a href="#react-section">React.</a></strong>
              </p>
              <p>
                Je conçois des interfaces visuelles modernes et réactives pour des applications et sites web.
              </p>
              <p>
                Grâce à ma formation et aux projets réalisés, j’ai acquis les compétences nécessaires pour répondre aux exigences du développement et de l’optimisation.
              </p>
              <p>
                Motivée et déterminée, j’ai à cœur de relever des nouveaux défis et de continuer à évoluer afin d'apporter des solutions adaptées aux besoins de chaque projet.
              </p>
              <p>
                Je propose mes services pour la <strong>création de sites web</strong>, en mettant l’accent sur des aspects essentiels tels que le 
                <strong> <a href="#seo-section">SEO</a></strong> et la gestion de projet, afin d’assurer des solutions performantes et optimisées.
              </p>
              </div>
              <div className="about_info_presenation_perso">
              <h2>Informations personnelles</h2>
              <ul>
                <li>Julie AT</li>
                <li>33 ans</li>
                <li>Nîmes, France</li>
                <li>Certification professionnelle</li>
                <li>niveau V</li>
                <li>Développeur informatique</li>
               </ul>
               <div className="about_info_presenation_perso_CV">
                <NavLink to="/cv">CV</NavLink>
              </div>
            </div>
            </div>
          </section>
          <div className="about_info_tech">
          <section className="about_info_langage">
            <h2>Langages de programmation</h2>
            <div className="about_info_langage_logo">
              <img src={jsLogo} alt="logo JavaScript" />
              <img src={htmlLogo} alt="logo HTML" />
              <img src={sassCssLogo} alt="logo Sass / CSS" />
            </div>
          </section>
          <section id="react-section" className="about_info_library">
            <h2>Bibliothèque</h2>
            <img src={reactLogo} alt="logo REACT" />
            <p>React est un outil qui permet de créer des sites web modernes, rapides et interactifs.</p>
            <p>Il aide à concevoir des pages qui s'adaptent facilement aux besoins des utilisateurs, en rendant l'expérience plus fluide et agréable.</p>
            <p>Grâce à React, les mises à jour du site sont plus rapides et efficaces, ce qui garantit une navigation sans lenteur ni interruption.</p>
          </section>
          <section className="about_info_backend">
            <h2>Backend & Base de données</h2>
            <img src={nodeLogo} alt="logo NodeJS + Express" />
            <p>Si React est la vitrine de votre application, Node.js et Express.js en sont les coulisses.</p>
            <p>Ils travaillent ensemble pour faire fonctionner votre site web en arrière-plan, en gérant les demandes des utilisateurs et en leur fournissant les informations qu'ils souhaitent.</p>
            <img src={mongoLogo} alt="logo MongoDB" />
            <p>En complément de Node.js et Express.js, j'utilise MongoDB pour gérer les données de mes applications.</p>
            <p>Sa flexibilité me permet de modéliser des données complexes et de les adapter facilement aux besoins de mes projets.</p>
          </section>
          <section id="seo-section" className="about_info_seo">
            <h2>SEO</h2>
            <p>Le SEO c'est l'ensemble des techniques qui permettent d'améliorer la visibilité d'un site web dans les moteurs de recherche comme Google.</p>
            <p><strong>Outils :</strong> Google Analytics, Google Search Console, GTmetrix, Lighthouse, Wave.</p>
          </section>
          <section className="about_info_other">
            <h2>AUTRES</h2>
            <div className="about_info_other_logo">
              <img src={figmaLogo} alt="logo Figma" />
              <img src={postmanLogo} alt="logo Postman" />
              <img src={trelloLogo} alt="logo Trello" />
            </div>
          </section>
          </div>
        </section>
      </section>
    </div>
  );
}

export default About;
