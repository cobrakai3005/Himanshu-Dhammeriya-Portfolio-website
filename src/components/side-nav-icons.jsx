import React from "react";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GoProject } from "react-icons/go";
export default function SideNavIcons() {
  return (
    <div className="md:block hidden fixed top-[25%] z-[20] ">
      <div className="flex flex-col ">
        <a href="#home" className="rounded-full shadow  p-4 bg-gray-100 m-2">
          <AiOutlineHome size={20} />
        </a>
        <a
          href="#projects"
          className="rounded-full shadow-lg  p-4 bg-gray-100 m-2"
        >
          <GoProject size={20} />
        </a>
        <a href="#" className="rounded-full shadow-lg  p-4 bg-gray-100 m-2">
          <AiOutlineMail size={20} />
        </a>
        <a
          href="#about"
          className="rounded-full shadow-lg  p-4 bg-gray-100 m-2"
        >
          <BsPerson size={20} />
        </a>
      </div>
    </div>
  );
}
