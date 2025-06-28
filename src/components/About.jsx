import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-6  bg-white dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-800 dark:text-gray-200"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 relative w-fit before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 before:bg-blue-500 before:rounded-lg">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>

          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-5">
            I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Md. Raihan Hasan Rana</span>,
            a passionate <strong>Full-Stack Web Developer</strong> currently studying Computer Science at
            <span className="text-blue-500"> United International University</span>.
          </p>

          <div className="space-y-4 text-gray-700 dark:text-gray-300 text-base">
            <p>
              My programming journey began with limited resources — just a dream and a strong will.
              Through continuous learning and projects, I’ve mastered technologies like
              <span className="text-blue-600 dark:text-blue-400 font-medium"> React, Node.js, MongoDB</span> and more.
            </p>
            <p>
              I enjoy building responsive and user-friendly applications with a strong focus on
              <span className="text-blue-500"> clean UI</span> and <span className="text-blue-500">smooth UX</span>.
              I aim to deliver web solutions that not only work well but also look great.
            </p>
            <p>
              Outside of programming, I enjoy watching tech videos, exploring UI design, and journaling my journey.
              I’m always hungry to learn something new every day.
            </p>
          </div>
        </motion.div>

        {/* Right - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src="/first_img.jpg"
            alt="About Rana"
            className="rounded-2xl w-[300px] md:w-[380px] shadow-xl border border-blue-500"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
