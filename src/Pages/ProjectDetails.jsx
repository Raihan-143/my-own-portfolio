import React from "react";
import { FaArrowLeft, FaGlobe, FaCodeBranch, FaServer } from "react-icons/fa";
import { Link, useParams } from "react-router";
import Slider from "react-slick";

const projects = [
    {
        name: "Bills Management App",
        live: "https://tangerine-sunshine-8227f0.netlify.app",
        githubClient: "https://github.com/raihanexample/bills-client",
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
        githubClient: "https://github.com/raihanexample/books-client",
        githubServer: "https://github.com/raihanexample/books-server",
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
        githubClient: "https://github.com/raihanexample/roommate-client",
        githubServer: "https://github.com/raihanexample/roommate-server",
        images: [
            "/src/assets/projects/room1.png",
            "/src/assets/projects/room2.png",
            "/src/assets/projects/room3.png",
        ],
        tech: ["MERN", "JWT", "Tailwind"],
    },
];
const settings = {
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  infinite: true,
  arrows: false,
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects[parseInt(id)];

  if (!project) return <div className="text-center py-20">Project not found.</div>;

  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen text-gray-800 dark:text-white px-6 py-10">
      <div className="max-w-4xl mx-auto space-y-6">

        {/* Back Button */}
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <FaArrowLeft /> Back to Projects
        </Link>

        {/* Title */}
        <h1 className="text-4xl font-bold">{project.name}</h1>

        {/* Image Slider */}
        <Slider {...settings}>
          {project.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Screenshot ${i + 1}`}
              className="rounded-lg w-full h-[300px] object-cover"
            />
          ))}
        </Slider>

        {/* Tech Stack */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
          <p className="text-gray-600 dark:text-gray-300">
            {project.tech.join(", ")}
          </p>
        </div>

        {/* Description */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-gray-700 dark:text-gray-300">
            This is a full-stack web application built using modern technologies. It allows users to perform X, Y, Z...
            (👉 আপনি এখানকার description নিজে পূরণ করবেন)
          </p>
        </div>

        {/* Challenges */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Challenges & Solutions</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            <li>Challenge 1: ...</li>
            <li>Challenge 2: ...</li>
          </ul>
        </div>

        {/* Future Plans */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Future Improvements</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            <li>Add user authentication</li>
            <li>Improve mobile UI</li>
            <li>Optimize database queries</li>
          </ul>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3 pt-4">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded flex items-center gap-2"
          >
            <FaGlobe /> Live Site
          </a>
          <a
            href={project.githubClient}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 border border-green-500 text-green-600 rounded flex items-center gap-2"
          >
            <FaCodeBranch /> Client
          </a>
          <a
            href={project.githubServer}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 border border-purple-500 text-purple-600 rounded flex items-center gap-2"
          >
            <FaServer /> Server
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
