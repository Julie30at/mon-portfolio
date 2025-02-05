import { useState } from "react";
import Navbar from "../Components/Navbar";
import '../styles/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState(''); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;
    let errors = {};

    if (formData.name.trim() === '') {
      errors.name = 'Le nom est requis.';
      valid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(formData.email)) {
      errors.email = 'Veuillez entrer un email valide.';
      valid = false;
    }

    if (formData.message.trim() === '') {
      errors.message = 'Le message ne peut pas être vide.';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

const handleSubmit = (e) => {
  e.preventDefault();

  if (validateForm()) {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send('service_ioay27t', 'template_vua53xk', templateParams, 'ttBaf1O_-StUU_Gm2')
      .then((result) => {
        console.log('Message envoyé avec succès : ', result.text);
        setSuccessMessage("Votre message a été envoyé avec succès !");
        
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
        
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      }, (error) => {
        console.log('Erreur d\'envoi : ', error.text);
      });
  }
};

  return (
    <div>
      <Navbar />
      <section className="contact">
        <h1 className="contact_title">Contact</h1>
        <section className="contact_form">
          <h2 className="contact_form_title">Parlons de votre projet !</h2>
          <form id="contactForm" onSubmit={handleSubmit}>
            <div className="form_group_row">
              <div className="form_group">
                <label htmlFor="name">Nom :</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && <div className="error">{errors.name}</div>}
              </div>

              <div className="form_group">
                <label htmlFor="email">Email :</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <div className="error">{errors.email}</div>}
              </div>
            </div>

            <div className="form_group">
              <label htmlFor="message">Message :</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              />
              {errors.message && <div className="error">{errors.message}</div>}
            </div>

            <button type="submit">Envoyer</button>

            {successMessage && <div className="success">{successMessage}</div>}

            <div className="icon_container">
              <FontAwesomeIcon icon={faHandshake} className="handshake_icon" />
            </div>
            <div className="icon_container">
              <div className="contact_email">
                <a href="mailto:webajuwebsitecreation@gmail.com" aria-label="Envoyer un email">
                  <FontAwesomeIcon icon={faEnvelope} className="envelope_icon" />
                </a>
                <p>webajuwebsitecreation@gmail.com</p>
              </div>
              <div className="contact_location">
                <a 
                  href="https://www.google.com/maps?q=30900+Nîmes,+France" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Voir la localisation sur Google Maps"
                >
                  <FontAwesomeIcon icon={faLocationDot} className="location_icon" />
                </a>
                <p>30900 Nîmes, France</p>
              </div>
              <div className="contact_phone">
                <a href="https://www.linkedin.com/in/julie30at" target="_blank" 
                   rel="noopener noreferrer"
                   aria-label="Voir mon linkedin"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="linkedin_icon" />
                </a>
                <p>www.linkedin.com/in/julie30at</p>
              </div>
            </div>
          </form>
        </section>
      </section>
    </div>
  );
}

export default Contact;
