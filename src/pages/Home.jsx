import Navbar from "../Components/Navbar"; 
import julieAtPhoto from '../assets/JulieAtProfil.webp'; 
import '../styles/home.css'

function Home() {
  return (
    <div>
      <Navbar /> 
      <section className="home">
        <img src={julieAtPhoto} alt="Julie AT" className="home_photo" />
        <h1 className="static-text">Julie AT</h1> {/* Julie AT dans un h1 */}
        <p>
          <span className="dynamic-text">
            <span className="highlight">Développeuse Web</span> Freelance
          </span>
        </p>
      </section>
    </div>
  );
}

export default Home;
