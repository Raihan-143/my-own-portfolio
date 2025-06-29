import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="pt-24 md:pt-32 pb-20 px-4 bg-white dark:bg-gray-900 md:px-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Section */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white">
            Hi, I’m <span className="text-blue-600 dark:text-blue-400">Md. Raihan Hasan Rana</span>
          </h1>
          <p className="mt-2 text-xl font-medium text-blue-500 dark:text-blue-300">
            Full Stack Developer
          </p>

          <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Passionate about creating beautiful, functional, and user-friendly applications.
            I love turning complex problems into simple, elegant solutions.
          </p>

          {/* Resume + Socials */}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-5">
            <a
              href="/resume.pdf"
              download
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition"
            >
              Download Resume
            </a>

            <div className="flex gap-4 justify-center sm:justify-start">
              <a href="https://github.com/Raihan-143" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl text-gray-600 dark:text-gray-300 hover:text-blue-600 transition" />
              </a>
              <a href="https://www.linkedin.com/in/md-raihan-hasan-rana-61962328a/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl text-gray-600 dark:text-gray-300 hover:text-blue-600 transition" />
              </a>
              <a href="https://www.facebook.com/share/1DsyU8WuRM/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl text-gray-600 dark:text-gray-300 hover:text-blue-600 transition" />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl text-gray-600 dark:text-gray-300 hover:text-blue-600 transition" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/rai.png"
            alt="Md. Raihan Hasan Rana"
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-blue-600 shadow-lg dark:border-blue-400"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
