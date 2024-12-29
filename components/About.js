"use client";

import { motion } from "framer-motion";
import { Code, Figma, Coffee } from "lucide-react";

export default function About() {
  const tools = [
    { icon: Figma, name: "Figma" },
    { icon: Code, name: "ReactJS" },
    { icon: Coffee, name: "Java" },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground">
              I'm a dedicated developer and designer who loves crafting
              beautiful and functional digital experiences. My path in
              technology is fueled by a unique combination of creativity and
              problem-solving skills.{" "}
            </p>
            <p className="text-lg text-muted-foreground">
              With a strong background in UI/UX design and front-end
              development, I transform ideas into reality using clean code and
              user-friendly designs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-6"
          >
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center justify-center p-6 bg-card rounded-lg shadow-lg"
              >
                <tool.icon className="w-12 h-12 mb-4 text-primary" />
                <span className="text-sm font-medium">{tool.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
