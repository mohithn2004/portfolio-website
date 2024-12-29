'use client';

import { motion } from 'framer-motion';

export default function NavLink({ href, children, className = '', onClick }) {
  const scrollToSection = (e) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (onClick) onClick();
    }
  };

  return (
    <motion.a
      href={href}
      className={`relative text-foreground/80 hover:text-foreground transition-colors ${className}`}
      onClick={scrollToSection}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      <motion.span
        className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.a>
  );
}