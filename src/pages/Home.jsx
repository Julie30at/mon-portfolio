import Navbar from "../Components/Navbar"; 
import julieAtPhoto from '../assets/JulieAtProfil.webp'; 
import '../styles/home.css'

function Home() {
  return (
    <div>
      <Navbar /> 
      <div className="home">
        <img src={julieAtPhoto} alt="Julie AT" className="home_photo" />
        <p>
          <span className="static-text">Julie AT </span>
          <span className="dynamic-text">
            <span className="highlight"> Développeuse Web</span> Freelance
          </span>
        </p>
      </div>
    </div>
  );
}

export default Home;
