'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/mohithn2004', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mohith-n-0a1478270/', label: 'LinkedIn' },
    { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=mohithn2004@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-muted-foreground"
          >
            © 2024 Mohith. All rights reserved.
          </motion.p>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}