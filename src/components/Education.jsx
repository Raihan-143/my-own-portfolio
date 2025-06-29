import React from "react";
import { motion } from "framer-motion";
import uiuLogo from "../assets/uiu-logo.png";
import { FaCheckCircle } from "react-icons/fa";

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 px-4 bg-white dark:bg-gray-900 md:px-10  transition duration-300 rounded-2xl "
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-12">
          My <span className="text-blue-600 dark:text-blue-400">Education</span>
        </h2>

        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-10 border-l-4 border-blue-500"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={uiuLogo}
              alt="UIU Logo"
              className="w-28 h-28 object-contain rounded-xl shadow-md bg-white p-2"
            />
          </div>

          {/* Info */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              United International University (UIU)
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-1 mb-2">
              Bachelor of Science in Computer Science and Engineering (CSE)
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Duration: <span className="text-blue-600 dark:text-blue-400 font-medium">2023 – 2027</span>
            </p>

            
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-gray-700 dark:text-gray-200">
                <FaCheckCircle className="text-blue-500 mr-2" />
                Completed C, Java, and OOP courses
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-200">
                <FaCheckCircle className="text-blue-500 mr-2" />
                Built real-time Banking System projects
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-200">
                <FaCheckCircle className="text-blue-500 mr-2" />
                Focused on clean UI and full-stack development
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
