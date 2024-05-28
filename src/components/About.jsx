import React from "react";
import profileImg from "../assets/Developer.jpg";
import { LuDownload } from "react-icons/lu";
import resume from "../assets/resume.pdf";

function About() {
  return (
    <div className="h-[90%] flex-col flex  justify-center md:flex-row md:items-center md:justify-between  px-8">
      <div className=" hidden md:w-1/2 md:h-full  md:flex md:flex-col  md:justify-center gap-2 md:pl-14">
        <span className=" text-4xl md:text-6xl">
          Hi, I'm <span className=" text-pink-400">DEEPAK </span>
        </span>
        <span className="text-xl text-slate-600">
          I am a MERN Stack Developer &
        </span>
        <span className="text-xl text-slate-600">Coder</span>
        <div className=" w-[7rem] mt-4 border-2 rounded-lg p-2 border-pink-400 flex items-center gap-2 hover:bg-pink-100 ">
          <span>Resume</span>
          <a href={resume} download={"resume"} target="_blank">
            <LuDownload />
          </a>
        </div>
      </div>
      <div className=" mt-4 md:w-1/2 md:h-full flex md:items-center md:justify-center ">
        <img
          src={profileImg}
          alt=""
          className=" w-50 h-50 md:w-[20rem] object-cover rounded-full image-float"
        />
      </div>
      <div className=" md:hidden  flex flex-col mt-4 items-center">
        <span className=" text-4xl ">
          Hi, I'm <span className=" text-pink-400">DEEPAK </span>
        </span>
        <span className=" text-xl text-slate-600">
          I am a MERN Stack Developer &
        </span>
        <span className=" text-slate-600">Coder</span>
        <div className="mt-4 border-2 rounded-lg p-2 border-pink-400 flex items-center gap-2 hover:bg-pink-100 ">
          <span>Resume</span>
          <a href={resume} download={"resume"} target="_blank">
            <LuDownload />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
