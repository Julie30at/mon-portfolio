import Navbar from "../Components/Navbar"; 
import julieAtPhoto from '../assets/JulieAtProfil.webp'; 
import '../styles/home.css'

function Home() {
  return (
    <div className="home_page">
      <Navbar /> 
      <section className="home">
        <img src={julieAtPhoto} alt="Portrait de Julie AT" className="home_photo" />
        <h1 className="static-text">Julie AT</h1> 
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
