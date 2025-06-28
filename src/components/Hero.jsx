import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-12 bg-white dark:bg-gray-900 transition-colors duration-300 mt-5">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Text Section */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
            Hi, I’m <span className="text-blue-600 dark:text-blue-400">Md. Raihan Hasan Rana</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            A passionate <span className="font-semibold text-black dark:text-white">Full Stack Web Developer</span> who loves building modern and user-friendly web applications.
          </p>

          {/* Resume + Socials */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
            <a
              href="/resume.pdf" // Change this to your actual resume file path
              download
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Download Resume
            </a>

            {/* Social Icons */}
            <div className="flex gap-4 justify-center sm:justify-start">
              <a href="https://github.com/Raihan-143" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl text-gray-700 dark:text-gray-200 hover:text-blue-600" />
              </a>
              <a href="https://www.linkedin.com/in/md-raihan-hasan-rana-61962328a/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl text-gray-700 dark:text-gray-200 hover:text-blue-600" />
              </a>
              <a href="https://www.facebook.com/share/1DsyU8WuRM/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl text-gray-700 dark:text-gray-200 hover:text-blue-600" />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl text-gray-700 dark:text-gray-200 hover:text-blue-600" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/rai.png" // update this to your actual image path
            alt="Md. Raihan Hasan Rana"
            className="w-64 h-64 object-cover rounded-full border-4 border-blue-600 shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
