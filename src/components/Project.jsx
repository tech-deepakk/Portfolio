import React from "react";
import Tilt from "react-parallax-tilt";
import { projects } from "../constants/info";
import { PiLinkBold } from "react-icons/pi";
import { SiGithub } from "react-icons/si";

function Project() {
  return (
    <>
      <div className=" mt-6 pt-6 px-6 flex flex-col gap-3 md:gap-6 md:px-20">
        <span className=" w-2/3 md:w-[25%] pb-2 text-3xl md:text-4xl text-pink-500 border-b-2 border-gray-400">
          PROJECTS
        </span>
        <span className="md:w-2/3 md:text-xl text-blue-500">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </span>
      </div>
      <div className="flex flex-wrap p-8   justify-evenly  items-center  ">
        {projects.map((project) => (
          <Tilt
            key={project.name}
            className="w-[300px] h-[500px]   flex-col flex justify-evenly  shadow-2xl m-10 items-center hover:shadow-2xl hover:shadow-violet-400 shadow-violet-400  p-3 rounded-xl border-2 border-pink-900  "
          >
            <div className="px-4">
              <div className="flex justify-center items-center mb-3  ">
                <div className="h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-violet-500 flex justify-center items-center  ">
                  <a href={project.source_deploy_link} target="blank">
                    <PiLinkBold className=" text-3xl font-bold  text-violet-600" />
                  </a>
                </div>
                <div className="h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-orange-500 flex justify-center items-center  ">
                  <a href={project.source_code_link} target="blank">
                    <SiGithub className=" text-3xl font-bold  text-violet-600"></SiGithub>{" "}
                  </a>
                </div>
              </div>
              <img
                className="h-[200px] self-center  w-[250px] border-2  border-violet-300 rounded-2xl  "
                src={project.image}
                alt={project.name}
              />
            </div>
            <div className="text-2xl text-pink-600 font-bold">
              {project.name}
            </div>

            <div className="text-center">
              <span className=" text-yellow-600   ">{project.description}</span>
            </div>
          </Tilt>
        ))}
      </div>
    </>
  );
}

export default Project;
