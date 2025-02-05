import { useParams, useNavigate } from 'react-router-dom';  
import projectsData from '../data/projects.json';
import Navbar from '../Components/Navbar';
import ohMyFoodPhoto from '../assets/homePageOhmyfood.webp';
import sophieBluelPhoto from '../assets/homePageSophieBluel.webp';
import kasaPhoto from '../assets/homePageKasa.webp';
import ninaCarducciPhoto from '../assets/homePageNinaCarducci.webp';
import argentBankPhoto from '../assets/HomePage-ArgentBank.webp';
import logoHTML from '../assets/logoHTML.webp';
import logoSassCSS from '../assets/logoSassCSS.webp';
import logoFigma from '../assets/logoFigma.webp';
import logoJS from '../assets/logoJS.webp';
import logoReact from '../assets/logoREACT.webp';
import logoNodeJS from '../assets/logoNodejsexpress.webp';
import logoMongoDB from '../assets/logoMongoDB.webp';
import logoSwagger from '../assets/logoSwagger.webp';
import logoGoogleSearchConsole from '../assets/logoGoogleSearchConsole.webp';
import logoWave from '../assets/logoWave.webp';
import logoLighthouse from '../assets/logoLighthouse.webp';
import logoRedux from '../assets/logoRedux.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FaGithub } from "react-icons/fa";
import '../styles/projectDetail.css';

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();  
  const project = projectsData.find((proj) => proj.id === parseInt(id, 10));

  if (!project) {
    return <h2>Projet introuvable</h2>;
  }

  const projectImages = {
    1: ohMyFoodPhoto,
    2: sophieBluelPhoto,
    3: kasaPhoto,
    4: ninaCarducciPhoto,
    5: argentBankPhoto
  };

  const technologyImages = {
    logoHTML,
    logoSassCSS,
    logoFigma,
    logoJS,
    logoReact,
    logoNodeJS,
    logoMongoDB,
    logoSwagger,
    logoGoogleSearchConsole,
    logoWave,
    logoLighthouse,
    logoRedux
  };

  return (
    <div>
      <Navbar />
      <section className="project_detail">

        <button className="back_button" onClick={() => navigate(-1)}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button> 
        <div className='project_detail_contain'>
        <div className='project_detail_title'>
          <h2>{project.name}</h2>
        </div>
        <div className="project_links">
          {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
            <FaGithub size={19} />
            Voir sur GitHub</a>}
           {project.siteLink && (
           <a href={project.siteLink} target="_blank" rel="noopener noreferrer">
           <FontAwesomeIcon icon={faGlobe} /> Voir le site
           </a>
           )}        
        </div>
        <div className="project_description">
          <h2>{project.description.title}</h2>
          <p>{project.description.paragraph}</p>
        </div>
        <h3>Technologies utilisées :</h3>
        <ul className="technologies_list">
          {project.technologies.map((tech, index) => (
            <li key={index}>
              <img src={technologyImages[tech]} alt={tech} className="tech_logo" />
            </li>
          ))}
        </ul>
        </div>
        <img src={projectImages[project.id]} alt={project.name} className="project_image" />
      </section>
    </div>
  );
}

export default ProjectDetail;
