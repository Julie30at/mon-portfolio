import Navbar from "../Components/Navbar";
import '../styles/portfolio.css';
import ohMyFoodPhoto from '../assets/ohMyFoodPhoto.webp';
import logoOhMyFood from '../assets/logoOhMyFood.webp';
import sophieBluelPhoto from '../assets/SophieBluelPhoto.webp';
import logoSophieBluel from '../assets/logoSophieBluel.webp';
import kasaPhoto from '../assets/KasaPhoto.webp';
import logoKasa from '../assets/logoKasa.webp';
import ninaCarducciPhoto from '../assets/NinaCarducciPhoto.webp';
import logoNinaCarducci from '../assets/logoNinaCarducci.webp';
import argentBankPhoto from '../assets/argentBankPhoto.webp';
import logoArgentBank from '../assets/logoArgentBank.webp';


function Portfolio() {
  return (
    <div>
      <Navbar /> 
      <section className="portfolio">
        <h1 className="portfolio_title">portfolio</h1>
        <h2 className="portfilio_title_project">Focus projets de formation.</h2>
        <section className="portfolio_project">
          <div className="portfolio_project_ohmyfood">
             <img src={ohMyFoodPhoto} alt="ohmyfood photo" />
             <img src={logoOhMyFood} alt="ohmyfood logo" />
          </div>
          <div className="portfolio_project_sophiebluel">
             <img src={sophieBluelPhoto} alt="Sophie Bluel photo" />
             <img src={logoSophieBluel} alt="Sophie Bluel logo" />
          </div>
          <div className="portfolio_project_kasa">
             <img src={kasaPhoto} alt="Kasa photo" />
             <img src={logoKasa} alt="Kasa logo" />
          </div>
          <div className="portfolio_project_ninacarducci">
             <img src={ninaCarducciPhoto} alt="Nina Carducci photo" />
             <img src={logoNinaCarducci} alt="Nina Cardicci logo" />
          </div>
          <div className="portfolio_project_argentbank">
             <img src={argentBankPhoto} alt="ArgentBank photo" />
             <img src={logoArgentBank} alt="Argent Bank logo" />
          </div>
        </section>
      </section>
    </div>
  );
}

export default Portfolio;