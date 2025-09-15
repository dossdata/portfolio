import React from 'react';
import { motion } from 'framer-motion';
import { openSourceData } from '../models/OpenSourceModel';

const OpenSource = () => {
  return (
    <section id="opensource" className="opensource-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projets Open-Source
        </motion.h2>
        
        <div className="opensource-grid">
          {openSourceData.map((project, index) => (
            <motion.div 
              key={project.title}
              className="opensource-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="opensource-emoji">{project.emoji}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a 
                href={project.url} 
                className="opensource-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir détails
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
