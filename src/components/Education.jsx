import React from "react";
import { motion } from "framer-motion";
import uiuLogo from "../assets/uiu-logo.png";
import hscLogo from "../assets/hsc-logo.png"; 
import { FaCheckCircle, FaMapMarkerAlt, FaCalendarAlt, FaAward } from "react-icons/fa";

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 px-4 bg-white dark:bg-gray-900 md:px-10 transition duration-300 "
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-12">
          My <span className="text-blue-600 dark:text-blue-400">Education</span>
        </h2>

        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-10 border-l-4 border-blue-500 mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex-shrink-0">
            <img
              src={uiuLogo}
              alt="UIU Logo"
              className="w-28 h-28 object-contain rounded-xl shadow-md bg-white p-2"
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              United International University (UIU)
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-1 mb-2">
              Bachelor of Science in Computer Science and Engineering (CSE)
            </p>
             <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 gap-x-6 gap-y-2 mt-2">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-green-600 mr-1" />
                 United City, Madani Ave, Dhaka 1212
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="text-blue-500 mr-1" />
                2023 – 2027
              </div>
              <div className="flex items-center">
                <FaAward className="text-yellow-500 mr-1" />
                GPA: 4.00 / 5.00
              </div>
            </div>

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

       
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-10 border-l-4 border-green-500"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="flex-shrink-0">
            <img
              src={hscLogo}
              alt="HSC Logo"
              className="w-28 h-28 object-contain rounded-xl shadow-md bg-white p-2"
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Higher Secondary Certificate (HSC)
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-1 mb-2">
              A.E.R.E School and College
            </p>

            <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 gap-x-6 gap-y-2 mt-2">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-green-600 mr-1" />
                Gonok Bari, Savar, Dhaka
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="text-blue-500 mr-1" />
                2019 – 2021
              </div>
              <div className="flex items-center">
                <FaAward className="text-yellow-500 mr-1" />
                GPA: 5.00 / 5.00
              </div>
            </div>

            <p className="mt-4 text-gray-700 dark:text-gray-300">
              Concentrated in Science stream with Mathematics, Physics, and Chemistry. 
              Actively participated in programming club and science olympiads.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
