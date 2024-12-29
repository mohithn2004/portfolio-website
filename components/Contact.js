"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import emailjs from "emailjs-com";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const notify = toast.loading('Sending message...', {
      position: "bottom-right",
      autoClose: false
    });

    // Create template parameters object
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_5xh5z3b",
        "template_i5fp3vm",
        templateParams,
        "KqExBjNHNhhQrm1Xn"
      )
      .then(
        () => {
          toast.update(notify, {
            render: "Message sent successfully!",
            type: "success",
            isLoading: false,
            autoClose: 5000
          });
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          toast.update(notify, {
            render: "Failed to send message. Please try again.",
            type: "error",
            isLoading: false,
            autoClose: 3000
          });
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <ToastContainer />
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Get in Touch
        </motion.h2>

        <div className="max-w-xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-input bg-background resize-none"
                required
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg flex items-center justify-center gap-2"
            >
              Send Message
              <Send className="w-5 h-5" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
