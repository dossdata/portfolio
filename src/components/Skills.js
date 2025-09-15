import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../models/SkillsModel';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Mes compétences
        </motion.h2>
        
        <motion.div 
          className="skills-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {skillsData.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div 
                key={skill.name}
                className="skill-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="skill-icon">
                  <IconComponent />
                </div>
                <span>{skill.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
