import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaGitAlt, FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss, SiMongodb, SiFirebase, SiVercel, SiNetlify, SiJsonwebtokens, SiExpress
} from "react-icons/si";
import { NavLink } from "react-router";
const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "React", icon: <FaReact className="text-sky-400" /> },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300 dark:text-white" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    ],
  },
  {
    category: "Authentication / Security",
    skills: [
      { name: "Firebase Auth", icon: <SiFirebase className="text-yellow-500" /> },
      { name: "JWT", icon: <SiJsonwebtokens className="text-red-500" /> },
    ],
  },
  {
    category: "Tools / Deployment",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub", icon:<NavLink to='https://github.com/Raihan-143'><FaGithub className="text-white dark:text-gray-300" /></NavLink> },
      { name: "Netlify", icon: <SiNetlify className="text-cyan-400" /> },
      { name: "Vercel", icon: <SiVercel className="text-black dark:text-white" /> },
    ],
  },
];



const Skills = () => {
    return (
        <section id="skills" className=" dark:bg-gray-900 px-4 md:px-10 transition duration-300 mt-5">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white text-center mb-12">
                    My <span className="text-blue-600 dark:text-blue-400">Skills</span>
                </h2>

                <div className="space-y-12">
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
                        >
                            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4 border-b border-gray-300 pb-2">
                                {category.category}
                            </h3>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                                {category.skills.map((skill, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3 bg-gray-100 dark:bg-gray-700 p-3 rounded-lg shadow-sm hover:scale-105 transition"
                                    >
                                        <span className="text-2xl">{skill.icon}</span>
                                        <span className="text-gray-800 dark:text-white font-medium">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
