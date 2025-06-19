import my_headshot from "../assets/my_headshot.jpg";
import { IoMdDownload } from "react-icons/io";
import resume from "../assets/Himanshu_Resume.pdf";

export default function About() {
  console.log(resume);
  return (
    <div
      id="#about"
      className="w-full min-h-screen sm:h-[90vh] text-zinc-100 bg-[#000524] p-4 sm:p-0"
    >
      <div className="max-w-6xl mx-auto h-full flex flex-col sm:flex-row justify-center items-center">
        {/* Image Section */}
        <div className="w-full sm:w-[350px] py-8 sm:py-20 px-4 flex items-center justify-center sm:justify-center sm:items-start">
          <img
            className="w-[120px] h-[120px] sm:w-[170px] sm:h-[170px] lg:w-[200px] lg:h-[200px] object-cover rounded-full border-4 border-zinc-600"
            src={my_headshot}
            alt="Profile"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 p-4 sm:p-8 flex flex-col justify-center gap-6 sm:gap-9 h-full w-full">
          {/* About Section */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5">
              About Me
            </h2>
            <p className="leading-relaxed sm:leading-[33px] text-base sm:text-lg lg:text-xl tracking-wide sm:tracking-wider">
              I am a Motivated and detail-oriented Full Stack Developer with a
              strong foundation in web technologies. Eager to contribute to a
              dynamic development team and grow in the software industry by
              building scalable, user-focused web applications.
            </p>
          </div>

          {/* Contact Details and Download Section */}
          <div className="flex flex-col lg:flex-row w-full items-start lg:items-center gap-6 sm:gap-8 lg:gap-10">
            {/* Contact Details */}
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
                Contact Details
              </h3>
              <div className="space-y-1 sm:space-y-2 text-sm sm:text-base lg:text-lg leading-relaxed tracking-wide">
                <p>New Market,</p>
                <p>Bhopal, Madhya Pradesh</p>
                <p className="text-blue-300 hover:text-blue-200 transition-colors">
                  himan30051999@gmail.com
                </p>
              </div>
            </div>

            {/* Download Button */}
            <a
              href={resume}
              download
              className="bg-zinc-700 hover:bg-white hover:text-zinc-800 text-white px-6 sm:px-8 py-3 sm:py-3 text-base sm:text-lg lg:text-xl rounded-md transition-all duration-200 cursor-pointer flex items-center gap-3 w-full sm:w-auto justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <IoMdDownload size={20} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
