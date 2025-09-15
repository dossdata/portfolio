import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>Politique de confidentialité</p>
        <p>Copyright © {new Date().getFullYear()} - Tous droits réservés</p>
      </div>
    </footer>
  );
};

export default Footer;
