import React from 'react';
import { useAppController } from './controllers';
import { 
  Navigation, 
  Hero, 
  About, 
  Skills, 
  Projects, 
  OpenSource, 
  Contact, 
  Footer 
} from './components';
import './App.css';

function App() {
  const { isMenuOpen, toggleMenu, closeMenu, y } = useAppController();

  return (
    <div className="App">
      <Navigation 
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        closeMenu={closeMenu}
      />
      
      <Hero y={y} />
      
      <About />
      
      <Skills />
      
      <Projects />
      
      <OpenSource />
      
      <Contact />
      
      <Footer />
    </div>
  );
}

export default App;