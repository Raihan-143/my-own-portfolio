import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 grid gap-8 md:grid-cols-3 items-center">
        
        {/* Branding */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
            Md. Raihan Hasan Rana
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Passionate Web Developer crafting clean & efficient code.
          </p>
        </motion.div>

        {/* Navigation Links */}
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center md:justify-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          <li><a href="/" className="hover:text-blue-600 transition">Home</a></li>
          <li><a href="#projects" className="hover:text-blue-600 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600 transition">Contact</a></li>
        </motion.ul>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end gap-5 text-gray-600 dark:text-gray-300 text-xl"
        >
          <a
            href="mailto:raihan172hasan@gmail.com"
            className="hover:text-blue-600 transition"
            title="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/raihan172hasan"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-800 dark:hover:text-white transition"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/raihan172hasan"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500 transition"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </motion.div>
      </div>

      {/* Footer bottom note */}
      <div className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
        Designed & Developed by Raihan Rana • Portfolio 2025
      </div>
    </footer>
  );
};

export default Footer;
