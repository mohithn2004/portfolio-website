"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Front End Development Intern",
      company: "KrewsUp Technologies Pvt. Ltd.",
      period: "February 2024 - April 2024",
      description:
        "Designed and developed a dynamic landing page for the company specializing in event staffing solutions using React.js.",
    },
    {
      role: "Web3.0 Mentor",
      company: "Dev/Track Technical Club",
      period: "October 2024 - Present",
      description:
        "I guided students through Web 3.0 projects during scrum cycles, encouraging innovation and providing hands-on experience with decentralized technologies.",
    },
    {
      role: "Technical Team Member",
      company: "OSCode Community",
      period: "August 2023 - October 2024",
      description:
        "Actively participated in technical initiatives and worked alongside the club members to improve the community's knowledge and skills in software development.",
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Work Experience
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              <div className="absolute left-0 top-0 w-px h-full bg-border">
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="w-full bg-primary"
                />
              </div>
              <div className="absolute left-0 top-0 w-8 h-8 -translate-x-1/2 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{exp.company}</span>
                  <span>•</span>
                  <span>{exp.period}</span>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
