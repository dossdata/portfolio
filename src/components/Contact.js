import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';
import { contactData } from '../models/ContactModel';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contactez-moi
        </motion.h2>
        
        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{contactData.name}</h3>
            <p>{contactData.title} - {contactData.description}</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>{contactData.email}</span>
              </div>
              {contactData.phones.map((phone, index) => (
                <div key={index} className="contact-item">
                  <FaPhone className="contact-icon" />
                  <span>{phone}</span>
                </div>
              ))}
              <div className="contact-item">
                <FaLinkedin className="contact-icon" />
                <span>{contactData.linkedin}</span>
              </div>
            </div>
            
            <div className="contact-tags">
              {contactData.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </motion.div>
          
          <motion.form 
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="form-group">
              <input type="text" placeholder="Votre nom" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Votre email" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Sujet" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Votre message" rows="5" required></textarea>
            </div>
            <motion.button 
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Envoyer
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
