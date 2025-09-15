import { useState } from 'react';
import { useScroll, useTransform } from 'framer-motion';

export const useAppController = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return {
    isMenuOpen,
    toggleMenu,
    closeMenu,
    y
  };
};
