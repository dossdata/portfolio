import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaCode, FaWordpress, FaShopify, FaLaravel, FaFigma, FaGitAlt } from 'react-icons/fa';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const skills = [
    { name: 'HTML', icon: <FaCode /> },
    { name: 'CSS', icon: <FaCode /> },
    { name: 'JavaScript', icon: <FaCode /> },
    { name: 'PHP', icon: <FaCode /> },
    { name: 'jQuery', icon: <FaCode /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'WordPress', icon: <FaWordpress /> },
    { name: 'PrestaShop', icon: <FaShopify /> },
    { name: 'Laravel', icon: <FaLaravel /> },
    { name: 'Photoshop', icon: <FaCode /> },
    { name: 'Illustrator', icon: <FaCode /> },
    { name: 'Figma', icon: <FaFigma /> }
  ];

  const projects = [
    {
      title: 'CoAventure',
      description: 'WordPress : Intégration d\'un design sur mesure, Plusieurs dashboard sur mesure, Actualités, Développement des fonctionnalités en Backend',
      technologies: ['WordPress']
    },
    {
      title: 'Académie des Inscriptions et Belles-Lettres',
      description: 'WordPress : Intégration d\'un design sur mesure, Importation de 2600 articles, Développement de nombreux CPT',
      technologies: ['WordPress']
    },
    {
      title: 'Communauté de Communes du Dourdannais en Hurepoix',
      description: 'WordPress : Intégration d\'un design sur mesure, Gestion des évènements, Kiosque, Actualités',
      technologies: ['WordPress']
    },
    {
      title: 'PureVia',
      description: 'WordPress : Intégration d\'un design sur mesure, Gestion des recettes & produits, Actualités',
      technologies: ['WordPress']
    },
    {
      title: 'Alvityl',
      description: 'WordPress : Intégration d\'un design sur mesure, Gestion des produits, Actualités',
      technologies: ['WordPress']
    },
    {
      title: 'Cofrac',
      description: 'TYPO 3 : Intégration d\'un design sur mesure',
      technologies: ['TYPO 3']
    },
    {
      title: 'Porsche',
      description: 'WordPress : Intégration d\'un design sur mesure',
      technologies: ['WordPress']
    },
    {
      title: 'DecorEnVogue',
      description: 'PrestaShop 1.7 : Intégration d\'un design sur mesure, Développement des modules sur mesure, Widgets Creative elements sur mesure',
      technologies: ['PrestaShop 1.7']
    },
    {
      title: 'Centre Vitruve',
      description: 'WordPress : Intégration d\'un design sur mesure, Gestion des particiens & spécialités, Actualités',
      technologies: ['WordPress']
    },
    {
      title: 'DeGrimm',
      description: 'PrestaShop 1.7 : Update de la version, Intégration graphique, Développement des fonctionnalités sur mesure',
      technologies: ['PrestaShop 1.7']
    }
  ];

  const openSourceProjects = [
    {
      title: 'Reset Custom Post',
      description: 'Nettoyez votre site WordPress des contenus indésirables avec facilité, en particulier des custom post types 🧹.',
      emoji: '🧹'
    },
    {
      title: 'WP Admin Menu Color',
      description: 'Personnalisez entièrement les couleurs de votre menu d\'administration sur WordPress pour une expérience de navigation optimale 🎨.',
      emoji: '🎨'
    },
    {
      title: 'Fancy About Us',
      description: 'Créez des pages "À propos" exceptionnelles avec des images de fond captivantes et mettez en valeur votre contenu de manière élégante 🚀.',
      emoji: '🚀'
    },
    {
      title: 'Woo Carousel 3D',
      description: 'Transformez la galerie d\'images de vos produits WooCommerce en une expérience immersive et captivante avec un carousel 3D 🌟.',
      emoji: '🌟'
    },
    {
      title: 'ZeDocs Thème',
      description: 'Simplifiez la création de documentation pour vos projets avec ce thème WordPress ultime 🚀.',
      emoji: '🚀'
    }
  ];

  return (
    <div className="App">
      {/* Navigation */}
      <motion.nav 
        className="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="nav-content">
          <motion.a 
            href="#home" 
            className="logo"
            whileHover={{ scale: 1.05 }}
          >
            Portfolio
          </motion.a>
          
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={() => setIsMenuOpen(false)}>Intro</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>A propos</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)}>Compétences</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projets</a>
            <a href="#opensource" onClick={() => setIsMenuOpen(false)}>Open source</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
          
          <div className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
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
            Développeur FullStack Freelance<br />
            <span className="highlight">spécialisé sur WordPress & PrestaShop</span>
          </motion.h1>
          
          <motion.div 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2>Besoin d'un site web unique et performant ?</h2>
            <p>Découvrez mes solutions personnalisées sur<br />WordPress et PrestaShop</p>
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

      {/* About Section */}
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
              <p>
                Je suis un développeur FullStack spécialisé dans la création de sites web sur mesure avec WordPress et PrestaShop. 
                Avec plusieurs années d'expérience, j'ai collaboré avec des clients de toutes tailles, de petites entreprises à des marques internationales.
              </p>
              <p>
                Passionné par l'innovation, je conçois des solutions web hautement fonctionnelles et esthétiquement plaisantes, 
                centrées sur les besoins de mes clients. Mon objectif est de fournir des sites web de haute qualité qui aident 
                mes clients à atteindre leurs objectifs en ligne à long terme.
              </p>
              <p>
                Si vous recherchez un partenaire de confiance pour concrétiser vos idées web, n'hésitez pas à me contacter !
              </p>
            </motion.div>
            
            <motion.div 
              className="about-features"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="feature-item">
                <h3>Expertise Technique</h3>
                <p>Développeur expérimenté avec une solide expertise technique pour garantir la qualité de vos projets.</p>
              </div>
              <div className="feature-item">
                <h3>Solutions Personnalisées</h3>
                <p>Approche centrée sur vos besoins pour des solutions web uniques et sur mesure.</p>
              </div>
              <div className="feature-item">
                <h3>Collaboration à Long Terme</h3>
                <p>Partenaire de confiance pour une collaboration durable et fructueuse sur vos projets web.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
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
            {skills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                className="skill-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
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
            {projects.map((project, index) => (
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
                <div className="project-links">
                  <a href="#" className="project-link">Captures</a>
                  <a href="#" className="project-link">Lien</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Section */}
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
            {openSourceProjects.map((project, index) => (
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
                <a href="#" className="opensource-link">Voir détails</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
              <h3>Moez BETTOUMI</h3>
              <p>Une demande particulière, un projet à réaliser, vous pouvez me contacter via ce formulaire ou par :</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <span>contact@moezbettoumi.fr</span>
                </div>
                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <span>06.46.14.69.63</span>
                </div>
              </div>
              
              <div className="contact-tags">
                <span className="tag">Freelance FullStack</span>
                <span className="tag">WordPress - PrestaShop</span>
                <span className="tag">HTML/CSS - PHP/MYSQL</span>
                <span className="tag">Laravel/VueJs</span>
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

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>Politique de confidentialité</p>
          <p>Copyright © {new Date().getFullYear()} - Tous droits réservés</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
