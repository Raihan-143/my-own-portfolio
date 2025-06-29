import React, { useEffect, useState } from "react";

import Slider from "react-slick";
import { FaArrowLeft, FaGlobe, FaCodeBranch, FaServer } from "react-icons/fa";
import { Link, NavLink, useParams } from "react-router";


const settings = {
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  infinite: true,
  arrows: false,
};

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProject(data[parseInt(id)]));
  }, [id]);

  if (!project) return <div className="text-center py-20">Loading...</div>;

  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen text-gray-800 dark:text-white px-6 py-10">
      <div className="max-w-4xl mx-auto space-y-6">

        <Link to="/#projects" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline">
          <FaArrowLeft /> Back to Projects
        </Link>

        <h1 className="text-4xl font-bold">{project.name}</h1>

        {/* Image Slider */}
        <Slider {...settings}>
          {project.images.map((img, i) => (
            <img key={i} src={img} alt={`Screenshot ${i + 1}`} className="rounded-lg w-full h-[300px] object-cover" />
          ))}
        </Slider>

        {/* Tech Stack */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
          <p className="text-gray-600 dark:text-gray-300">{project.tech.join(", ")}</p>
        </div>

        {/* Description */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
        </div>

        {/* Challenges */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Challenges & Solutions</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            {project.challenges.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>

        {/* Future Improvements */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Feature Improvements</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            {project.improvements.map((imp, i) => (
              <li key={i}>{imp}</li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3 pt-4">
          <a href={project.live} target="_blank" rel="noreferrer" className="px-4 py-2 bg-blue-600 text-white rounded flex items-center gap-2">
            <FaGlobe /> Live Site
          </a>
          <a href={project.githubClient} target="_blank" rel="noreferrer" className="px-4 py-2 border border-green-500 text-green-600 rounded flex items-center gap-2">
            <FaCodeBranch /> Client
          </a>
          <a href={project.githubServer} target="_blank" rel="noreferrer" className="px-4 py-2 border border-purple-500 text-purple-600 rounded flex items-center gap-2">
            <FaServer /> Server
          </a>
          {/* <a href="/projects" target="_blank" rel="noreferrer" className="px-4 py-2 border border-purple-500 text-purple-600 rounded flex items-center gap-2">
            Cancel
          </a> */}
          <button><NavLink to='/' className='btn btn-primary'>Cancel</NavLink></button>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
