import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaMoon, FaSun } from "react-icons/fa";
import { NavLink } from "react-router";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    // Load theme on first load
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setDarkMode(true);
        }
    }, []);

    // Toggle theme
    const handleToggle = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        if (newMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    const navLinks = (
        <>
            <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="about" smooth={true} duration={500}>About</Link></li>
            <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
            <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
            <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </>
    );

    return (
        <div className="navbar fixed top-0 z-50 bg-base-100 shadow-md dark:bg-gray-900 transition-colors duration-300">
            <div className="navbar-start">
                {/* Mobile Dropdown */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 dark:bg-gray-800 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl font-bold text-blue-600 dark:text-blue-400">
                    Rana.Dev
                </a>
            </div>

            {/* Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-medium">
                    {navLinks}
                </ul>
            </div>

            {/* Dark Mode Toggle */}
            <div className="navbar-end pr-2 gap-2">
                <button
                    onClick={handleToggle}
                    className="btn btn-sm btn-circle"
                    title="Toggle Theme"
                >
                    {darkMode ? <FaSun /> : <FaMoon />}
                </button>
                <a
                    href="/resume.pdf" // Change this to your actual resume file path
                    download
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                >
                     Resume
                </a>
            </div>
        </div>
    );
};

export default Navbar;
