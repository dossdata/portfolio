import React from 'react';
import { motion } from 'framer-motion';
import { getNavigationItems } from '../controllers/NavigationController';

const Navigation = ({ isMenuOpen, toggleMenu, closeMenu }) => {
  const navigationItems = getNavigationItems();

  return (
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
          {navigationItems.map((item) => (
            <a 
              key={item.id}
              href={item.href} 
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </div>
        
        <div className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
