import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../models/ProfileModel';

const Hero = ({ y }) => {
  return (
    <motion.section 
      id="home" 
      className="hero-section"
      style={{ y }}
    >
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {profileData.name}<br />
          <span className="highlight">{profileData.title}</span>
        </motion.h1>
        
        <motion.div 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2>{profileData.subtitle}</h2>
          <p>{profileData.description}</p>
        </motion.div>
        
        <motion.a 
          href="#contact" 
          className="cta-button"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contactez-moi
        </motion.a>
      </div>
    </motion.section>
  );
};

export default Hero;
