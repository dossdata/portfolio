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
      <div className="hero-container">
        {/* Background Elements */}
        <div className="hero-bg-elements">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
          <div className="floating-shape shape-4"></div>
        </div>

        <div className="hero-content">
          {/* Left Side - Profile Image */}
          <motion.div 
            className="hero-left"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="profile-image-wrapper">
              <div className="profile-image-container">
                <img 
                  src={profileData.profileImage} 
                  alt={`Photo de profil de ${profileData.name}`}
                  className="profile-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="profile-image-glow"></div>
                <div className="profile-image-ring"></div>
              </div>
              <div className="profile-badge">
                <span className="badge-text">Disponible</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div 
            className="hero-right"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.div 
              className="hero-greeting"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="greeting-text">Bonjour, je suis</span>
            </motion.div>

            <motion.h1
              className="hero-name"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {profileData.name}
            </motion.h1>

            <motion.div 
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <span className="title-highlight">{profileData.title}</span>
            </motion.div>

            <motion.div 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <h2>{profileData.subtitle}</h2>
            </motion.div>

            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              {profileData.description}
            </motion.p>

            <motion.div 
              className="hero-actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <motion.a 
                href="#contact" 
                className="cta-button primary"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0, 212, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Contactez-moi</span>
                <div className="button-glow"></div>
              </motion.a>
              
              <motion.a 
                href="#about" 
                className="cta-button secondary"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>En savoir plus</span>
              </motion.a>
            </motion.div>

            {/* Tech Stack Pills */}
            <motion.div 
              className="tech-pills"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <span className="tech-pill">Node.js</span>
              <span className="tech-pill">React</span>
              <span className="tech-pill">Angular</span>
              <span className="tech-pill">AWS</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
