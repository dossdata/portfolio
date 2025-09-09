import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-content">
          <a href="#home" className="logo">Portfolio</a>
          <ul className="nav-links">
            <li><a href="#home">Accueil</a></li>
            <li><a href="#about">À propos</a></li>
            <li><a href="#skills">Compétences</a></li>
            <li><a href="#projects">Projets</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1>Besoin d'un site web unique et performant ?</h1>
          <p>Découvrez mes solutions personnalisées</p>
          <a href="#contact" className="cta-button">Contactez-moi</a>
        </div>
      </section>

      <section id="about" className="about-section">
        <h2>Qui je suis ?</h2>
        <div className="about-content">
          <p>Je suis un développeur FullStack spécialisé dans la création de sites web sur mesure. 
             Avec plusieurs années d'expérience, j'ai collaboré avec des clients de toutes tailles.</p>
          <p>Passionné par l'innovation, je conçois des solutions web hautement fonctionnelles 
             et esthétiquement plaisantes, centrées sur les besoins de mes clients.</p>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <h2>Mes compétences</h2>
        <div className="skills-grid">
          <div className="skill-item">HTML</div>
          <div className="skill-item">CSS</div>
          <div className="skill-item">JavaScript</div>
          <div className="skill-item">React</div>
          <div className="skill-item">Node.js</div>
          <div className="skill-item">Git</div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <h2>Mes derniers projets</h2>
        <div className="projects-grid">
          {/* Vous pourrez ajouter vos projets ici */}
          <div className="project-card">
            <h3>Projet 1</h3>
            <p>Description du projet</p>
          </div>
          <div className="project-card">
            <h3>Projet 2</h3>
            <p>Description du projet</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contactez-moi</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Pour discuter de votre projet</h3>
            <p>Email : votre@email.com</p>
            <p>Tél : votre numéro</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Copyright © {new Date().getFullYear()} - Tous droits réservés</p>
      </footer>
    </div>
  );
}

export default App;
