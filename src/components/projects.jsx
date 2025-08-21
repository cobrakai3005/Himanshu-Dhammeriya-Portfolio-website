import { projects } from "../utils/constants";
import ProjectCard from "./project-card";

export default function Projects() {
  return (
    <div
      id="#projects"
      className="w-full min-h-screen p-4 md:p-6 lg:p-8 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto h-full flex flex-col justify-center items-center border-b border-zinc-400">
        {/* Header Section */}
        <div className="w-full sm:w-[350px] py-8  px-4 flex justify-center sm:justify-start items-center sm:items-start">
          <h2 className="text-xl sm:text-2xl lg:text-3xl uppercase font-bold border-b-4 border-blue-400 pb-2">
            projects
          </h2>
        </div>

        {/* Content Section */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8 flex flex-col justify-center items-center gap-6 sm:gap-8 h-full w-full">
          <p className="text-base sm:text-lg lg:text-xl font-normal text-zinc-600 text-center sm:text-left max-w-2xl">
            Here are some of the projects I've worked on, showcasing my skills
            in various technologies and frameworks.
          </p>

          {/* Projects Grid */}
          <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* View More Button */}
          {/* <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md transition-colors duration-200 text-base sm:text-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105">
            View All Projects
          </button> */}
        </div>
      </div>
    </div>
  );
}
