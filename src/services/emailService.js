import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailConfig';

// Initialiser EmailJS
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

export const sendEmail = async (formData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'hery0134@gmail.com'
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams
    );

    return {
      success: true,
      message: 'Email envoyé avec succès !',
      response
    };
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return {
      success: false,
      message: 'Erreur lors de l\'envoi de l\'email. Veuillez réessayer.',
      error
    };
  }
};

// Fonction de validation du formulaire
export const validateForm = (formData) => {
  const errors = {};

  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = 'Le nom doit contenir au moins 2 caractères';
  }

  if (!formData.email || !isValidEmail(formData.email)) {
    errors.email = 'Veuillez entrer une adresse email valide';
  }

  if (!formData.subject || formData.subject.trim().length < 5) {
    errors.subject = 'Le sujet doit contenir au moins 5 caractères';
  }

  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = 'Le message doit contenir au moins 10 caractères';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Fonction de validation d'email
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
