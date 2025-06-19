import { IoIosLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaCode } from "react-icons/fa";

// Individual Project Card Component
export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div> */}
      </div>

      {/* Project Content */}
      <div className="p-4 sm:p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg sm:text-lg lg:text-xl font-bold text-zinc-800 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
          <span className="text-xs sm:text-sm text-zinc-500 bg-zinc-100 px-2 py-1 rounded-full">
            {project.status}
          </span>
        </div>

        <p className="text-sm sm:text-base text-zinc-600 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs sm:text-sm px-3 py-1 rounded-full text-white font-medium"
              style={{ backgroundColor: project.color }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Meta Info */}
        <div className="flex items-center gap-4 mb-4 text-xs sm:text-sm text-zinc-500">
          <div className="flex items-center gap-1">
            <SlCalender size={14} />
            <span>{project.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaCode size={14} />
            <span>{project.type}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <a
            target="_blank"
            href={project.live}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            <IoIosLink size={16} />
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            className="flex-1 border border-zinc-300 hover:border-zinc-400 hover:bg-zinc-50 text-zinc-700 px-4 py-2 rounded-md transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            <FaGithub size={16} />
            Code
          </a>
        </div>
      </div>
    </div>
  );
}
