import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../models/ProjectsModel';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Mes derniers projets
        </motion.h2>
        
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <motion.div 
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <h3>{project.title}</h3>
              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <p>{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
