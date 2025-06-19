import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineProduct,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
export default function MobNav() {
  return (
    <div className="md:hidden w-full h-screen bg-black/30 flex flex-col gap-10 justify-center transition-all  items-center z-20">
      <a
        href="#main"
        className="w-[75%] shadow-2xl flex justify-center items-center p-4 rounded-4xl duration-300 hover:scale-105 text-white  bg-gray-700"
      >
        <AiOutlineHome />
        <span className="pl-3 text-lg font-semibold">Home</span>
      </a>
      <a
        href="#main"
        className="w-[75%] shadow-lg flex justify-center items-center p-4 rounded-4xl duration-300  hover:scale-105 text-gray-700 bg-gray-200"
      >
        <AiOutlineProduct />
        <span className="pl-3 text-lg font-semibold">Project</span>
      </a>
      <a
        href="#main"
        className="w-[75%] shadow-lg duration-300  flex justify-center items-center p-4 rounded-4xl hover:scale-105 text-gray-700 bg-gray-200"
      >
        <BsPerson />
        <span className="pl-3 text-lg font-semibold">Resume</span>
      </a>
      <a
        href="#main"
        className="w-[75%] shadow-lg duration-300  flex justify-center items-center p-4 rounded-4xl hover:scale-105 text-gray-700 bg-gray-200"
      >
        <AiOutlineMail />
        <span className="pl-3 text-lg font-semibold">Contact</span>
      </a>
    </div>
  );
}
