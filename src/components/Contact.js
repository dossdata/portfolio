import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { contactData } from '../models/ContactModel';
import { useContactController } from '../controllers';

const Contact = () => {
  const {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    handleInputChange,
    handleSubmit
  } = useContactController();

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
            onSubmit={handleSubmit}
          >
            {/* Message de statut */}
            {submitStatus && (
              <div className={`status-message ${submitStatus.type}`}>
                {submitStatus.type === 'success' ? (
                  <FaCheckCircle className="status-icon" />
                ) : (
                  <FaExclamationCircle className="status-icon" />
                )}
                <span>{submitStatus.message}</span>
              </div>
            )}

            <div className="form-group">
              <input 
                type="text" 
                name="name"
                placeholder="Votre nom" 
                value={formData.name}
                onChange={handleInputChange}
                className={errors.name ? 'error' : ''}
                required 
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
            
            <div className="form-group">
              <input 
                type="email" 
                name="email"
                placeholder="Votre email" 
                value={formData.email}
                onChange={handleInputChange}
                className={errors.email ? 'error' : ''}
                required 
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            
            <div className="form-group">
              <input 
                type="text" 
                name="subject"
                placeholder="Sujet" 
                value={formData.subject}
                onChange={handleInputChange}
                className={errors.subject ? 'error' : ''}
                required 
              />
              {errors.subject && <span className="error-message">{errors.subject}</span>}
            </div>
            
            <div className="form-group">
              <textarea 
                name="message"
                placeholder="Votre message" 
                rows="5" 
                value={formData.message}
                onChange={handleInputChange}
                className={errors.message ? 'error' : ''}
                required
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>
            
            <motion.button 
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
