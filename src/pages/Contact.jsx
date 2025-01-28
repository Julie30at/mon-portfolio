import { useState } from "react";
import Navbar from "../Components/Navbar";
import '../styles/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

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

    // Validation du nom
    if (formData.name.trim() === '') {
      errors.name = 'Le nom est requis.';
      valid = false;
    }

    // Validation de l'email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(formData.email)) {
      errors.email = 'Veuillez entrer un email valide.';
      valid = false;
    }

    // Validation du message
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
      console.log("Formulaire valide", formData);
      // effectuer l'envoi du formulaire plus tard
    }
  };

  return (
    <div>
      <Navbar />
      <section className="contact">
        <h1 className="contact_title">Contactez-moi</h1>
        <section className="contact_form">
          <h2 className="contact_form_title">Parlons de votre projet !</h2>
          <form id="contactForm" onSubmit={handleSubmit}>
            <div className="form_group_row">
              <div className="form_group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Entrez votre nom"
                />
                {errors.name && <div className="error">{errors.name}</div>}
              </div>

              <div className="form_group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Entrez votre email"
                />
                {errors.email && <div className="error">{errors.email}</div>}
              </div>
            </div>

            <div className="form_group">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                placeholder="Votre message..."
              />
              {errors.message && <div className="error">{errors.message}</div>}
            </div>

            <button type="submit">Envoyer</button>
            <div className="icon_container">
             <FontAwesomeIcon icon={faHandshake} className="handshake_icon" />
            </div>
            <div className="icon_container">
              <div className="contact_email">
                 <a href="mailto:julie30at@gmail.com" aria-label="Envoyer un email">
                   <FontAwesomeIcon icon={faEnvelope} className="envelope_icon" />
                 </a>
                <p>julie30at@gmail.com</p>
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
                <a href="tel:+33683027939" aria-label="Appeler ce numéro">
                    <FontAwesomeIcon icon={faPhone} className="phone_icon" />
                </a>
                <p>+33 6 83 02 79 39</p>
              </div>
            </div>
          </form>
        </section>
      </section>
    </div>
  );
}

export default Contact;
