export default function Education() {
  return (
    <div
      data-scroll
      data-scroll-speed="-.2"
      data-scroll-section
      id="#education"
      className="w-full min-h-screen p-4 md:p-6 lg:p-8"
    >
      <div className="max-w-6xl mx-auto h-full flex flex-col sm:flex-row justify-center items-center border-b border-zinc-200">
        {/* Header Section */}
        <div className="w-full sm:w-[350px] py-8 sm:py-20 px-4 flex justify-center sm:justify-start items-center sm:items-start">
          <h2 className="text-xl sm:text-2xl lg:text-3xl uppercase font-bold border-b-4 border-blue-400 pb-2">
            education
          </h2>
        </div>

        {/* Content Section */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8 flex flex-col justify-center items-center gap-8 sm:gap-12 lg:gap-16 h-full w-full">
          {/* College Education */}
          <div className="w-full max-w-2xl">
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-zinc-800 font-bold leading-tight">
              Technocrates Institute of Technology
            </h2>
            <p className="text-zinc-500 italic text-base sm:text-lg font-normal mt-2 sm:mt-4">
              Bachelor of Engineering{" "}
              <span className="font-normal">June 2020</span>
            </p>

            <p className="text-zinc-500 text-base sm:text-lg font-normal mt-4 sm:mt-6 leading-relaxed">
              I am a Mechanical Engineer. I completed my bachelor's degree from
              the mechanical branch. During my time in college, I developed an
              intensive interest in computer programming.
            </p>
          </div>

          {/* School Education */}
          <div className="w-full max-w-2xl">
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-zinc-800 font-bold leading-tight">
              My School Time
            </h2>
            <p className="text-zinc-500 italic text-base sm:text-lg font-normal mt-2 sm:mt-4">
              I passed out from school in{" "}
              <span className="font-normal capitalize">June 2016</span>
            </p>

            <p className="text-zinc-500 text-base sm:text-lg font-normal mt-4 sm:mt-6 leading-relaxed">
              I grew up just as a normal kid. In my school days, I used to watch
              a lot of Harry Potter movies. I guess from that time my motivation
              comes from creativity and imagination (just a thought)!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
