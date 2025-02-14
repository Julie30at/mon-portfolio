import Navbar from "../Components/Navbar"; 
import julieAtPhoto from '../assets/webaju_logo.webp'; 
import '../styles/home.css';

function Home() {
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
    </div>
  );
}

export default Home;
