import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaGlobe, FaCodeBranch, FaServer } from "react-icons/fa";
// ✅ Fixed: react-router-dom

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router";

const projects = [
    {
        name: "Bills Management App",
        live: "https://tangerine-sunshine-8227f0.netlify.app",
        githubClient: "https://github.com/Raihan-143/bills-management-project",
        githubServer: "https://github.com/raihanexample/bills-server",
        images: [
            "/src/assets/projects/bill1.png",
            "/src/assets/projects/bill2.png",
            "/src/assets/projects/bill3.png",
        ],
        tech: ["React", "Firebase", "Tailwind"],
    },
    {
        name: "Virtual Bookshelf",
        live: "https://bespoke-chaja-0c4a6e.netlify.app",
        githubClient: "https://github.com/Raihan-143/virtual-bookshelf-project-",
        githubServer: "https://github.com/Raihan-143/virtual-bookshelf-server",
        images: [
            "/src/assets/projects/book1.png",
            "/src/assets/projects/book2.png",
            "/src/assets/projects/book3.png",
        ],
        tech: ["React", "Express", "MongoDB"],
    },
    {
        name: "Roommate Finder",
        live: "https://roommatefinder.vercel.app",
        githubClient: "https://github.com/Raihan-143/roommate-finder-project",
        githubServer: "https://github.com/Raihan-143/roommate-finder-server",
        images: [
            "/src/assets/projects/room1.png",
            "/src/assets/projects/room2.png",
            "/src/assets/projects/room3.png",
        ],
        tech: ["MERN", "JWT", "Tailwind"],
    },
];

const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    pauseOnHover: true,
};

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-900  md:px-10">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-14">
                    My <span className="text-blue-600 dark:text-blue-400">Projects</span>
                </h2>

                <div className="flex flex-col gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-blue-100 dark:border-gray-700"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            {/* Left Side: Image Slider */}
                            <div className="w-full md:w-1/2">
                                <Slider {...sliderSettings}>
                                    {project.images.map((img, i) => (
                                        <img
                                            key={i}
                                            src={img}
                                            alt={`${project.name} screenshot ${i + 1}`}
                                            className="w-full h-[360px] object-cover"
                                        />
                                    ))}
                                </Slider>
                            </div>

                            {/* Right Side: Info Section */}
                            <div className="w-full md:w-1/2 p-6 flex flex-col justify-between text-gray-800 dark:text-gray-200">
                                <div>
                                    {/* Project Name */}
                                    <h3 className="text-3xl font-extrabold mb-4 text-gray-800 dark:text-white tracking-tight leading-snug">
                                        {project.name}
                                    </h3>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-xs font-medium px-3 py-1 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className="flex flex-wrap gap-3 mt-4">
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition flex items-center gap-2"
                                    >
                                        <FaGlobe /> Live Site
                                    </a>
                                    <a
                                        href={project.githubClient}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="px-4 py-2 border border-green-500 text-green-600 dark:text-green-400 rounded-lg text-sm hover:bg-green-50 dark:hover:bg-gray-700 flex items-center gap-2"
                                    >
                                        <FaCodeBranch /> Client Code
                                    </a>
                                    <a
                                        href={project.githubServer}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="px-4 py-2 border border-purple-500 text-purple-600 dark:text-purple-400 rounded-lg text-sm hover:bg-purple-50 dark:hover:bg-gray-700 flex items-center gap-2"
                                    >
                                        <FaServer /> Server Code
                                    </a>
                                    <Link
                                        to={`/project/${index}`}
                                        className="px-4 py-2 border border-gray-400 text-gray-700 dark:text-white rounded-lg text-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
