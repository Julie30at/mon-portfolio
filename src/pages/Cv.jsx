import Navbar from "../Components/Navbar";
import '../styles/cv.css';
import cv from '../assets/CV_julie.webp';
import cvPDF from '../assets/CV_Devellopeur_Web_2025.pdf'

function Cv() {
  return (
    <div>
      <Navbar /> 
      <section className="cv">
        <h1 className="cv_title">mon cv.</h1>
        <div className="cv_julie">
          <img src={cv} alt="CV Julie AT"></img>
            <div className="cv_button">
              <a href={cvPDF} target="_blank" rel="noopener noreferrer">Télécharger</a>
            </div>
        </div>
      </section>
    </div>
  );
}

export default Cv;