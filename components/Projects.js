'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import krewsUp from '../Images/KrewsUp.png'
import Voyage from '../Images/Voyage2.0.png'
import placement from '../Images/PlacementTrainer.png'
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: 'KrewsUp Landing Page',
      description: 'A landing page for KrewsUp Technologies Pvt. Ltd. company based on an event staffing app.',
      image: krewsUp,
      tech: ['React.js'],
      demo: 'https://krewsup.com'
    },
    {
      title: 'Voyage2.0 - A Travel Website',
      description: '  An AI-based itinerary recommendation website that uses LLM and sentiment analysis to provide real location-based itineraries.',
      image: Voyage,
      tech: ['Next.js', 'TailwindCSS', 'Flask', 'MongoDB'],
      github: 'https://github.com/Rijo-1/Voyage2.0',
    },
    {
      title: 'AI Placement Counsellor Chatbot',
      description: 'Uses RAG and web search-based LLM model to train students for college placements.',
      image: placement,
      tech: ['Python', 'Streamlit', 'LLM'],
      github: 'https://github.com/sandyyman/Mini-ProjectV2',
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-card rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && <a
                    href={project.github}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </a>}
                  {project.demo && <a
                    href={project.demo}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Demo
                  </a> }
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}