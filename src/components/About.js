import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../models/ProfileModel';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Qui je suis ?
        </motion.h2>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {profileData.about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </motion.div>
          
          <motion.div 
            className="about-features"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {profileData.about.features.map((feature, index) => (
              <div key={index} className="feature-item">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
