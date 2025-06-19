import Skill from "./skill";

const skills = [
  {
    skill: "html",
    width: "90%",
    color: "#fca311",
  },
  {
    skill: "css",
    width: "70%",
    color: "#3a86ff",
  },
  {
    skill: "javascript",
    width: "70%",
    color: "#ef233c",
  },
  {
    skill: "java",
    width: "77%",
    color: "#8338ec",
  },
  {
    skill: "reactjs",
    width: "81%",
    color: "#fb6f92",
  },
  {
    skill: "express",
    width: "84%",
    color: "#9b5de5",
  },
  {
    skill: "tailwindcss",
    width: "94%",
    color: "#0081a7",
  },
  {
    skill: "mongodb",
    width: "60%",
    color: "#2ec4b6",
  },
];

export default function Skills() {
  return (
    <div id="#skills" className="w-full min-h-screen p-4 md:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto h-full flex flex-col sm:flex-row justify-center items-center border-b border-zinc-400">
        {/* Header Section */}
        <div className="w-full sm:w-[350px] py-8 sm:py-20 px-4 flex justify-center sm:justify-start items-center sm:items-start">
          <h2 className="text-xl sm:text-2xl lg:text-3xl uppercase font-bold border-b-4 border-blue-400 pb-2">
            skills
          </h2>
        </div>

        {/* Content Section */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8 flex flex-col justify-center items-center gap-6 sm:gap-8 h-full w-full">
          <p className="text-base sm:text-lg lg:text-xl font-normal text-zinc-600 text-center sm:text-left max-w-2xl">
            I have developed these skills over time. Here's my proficiency level
            in each technology:
          </p>

          <div className="w-full max-w-3xl flex flex-col gap-3 sm:gap-4 lg:gap-5 p-3 sm:p-4 lg:p-6 bg-white rounded-lg shadow-sm">
            {skills.map((el) => (
              <Skill key={el.skill} el={el} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
