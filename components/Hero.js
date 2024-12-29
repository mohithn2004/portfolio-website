'use client';

import { motion } from 'framer-motion';
import { Code, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Mohith</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Designing seamless experiences, building innovative solutions
          </p>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg"
          >
            Explore My Work
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mt-12 md:mt-0"
        >
          <div className="relative w-64 h-64 mx-auto">
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-full h-full rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center"
            >
              <Code className="w-24 h-24 text-primary-foreground" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2-translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center justify-center text-muted-foreground hover:text-foreground transition-colors"   
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowRight className="w-5 h-5 transform rotate-90" />
        </motion.a>
      </motion.div>
    </section>
  );
}