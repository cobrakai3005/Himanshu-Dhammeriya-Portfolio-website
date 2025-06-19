import React from "react";
import { MdOutlineMail } from "react-icons/md";
import ContacForm from "./contact-form";

export default function Contact() {
  return (
    <div
      id="#contact"
      className="w-full min-h-screen p text-white bg-[#191919] py-24"
    >
      <div className="max-w-6xl mx-auto h-full flex flex-col md:flex-row justify-center items-center ">
        <div className=" w-full  sm:flex items-center justify-center gap-24">
          <div className="hidden sm:block">
            <MdOutlineMail size={100} />
          </div>
          <div className="p-4">
            <h3 className="text-xl md:text-2xl tracking-widest text-center my-4  md:hidden">
              Get In Touch
            </h3>
            <p className="self-start text-xl text-zinc-400">
              Here is where you should write your message to readers to have
              them get in contact with you.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto py-8 px-5 h-full grid grid-cols-1 justify-center md:grid-cols-2 ">
        <ContacForm />
        <div className="w-[400px] py-12 sm:pl-24 ">
          <h3 className="text-lg  font-bold">Address and Phone</h3>
          <p className="text-lg font-normal text-gray-500">
            Himanshu Dhammeriya
          </p>

          <p className="text-lg font-normal text-gray-500">
            New market, Bhopal, Madhya Pradesh
          </p>
        </div>
      </div>
    </div>
  );
}
