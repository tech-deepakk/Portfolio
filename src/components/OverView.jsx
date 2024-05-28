import Tilt from "react-parallax-tilt";
import { technologies, services } from "../constants/info";

function OverView() {
  return (
    <>
      <div className=" pt-6 px-6 flex flex-col gap-3 md:gap-6 md:px-20" id="About">
        <span className=" w-2/3 md:w-[25%] pb-2 text-3xl md:text-4xl text-pink-500 border-b-2 border-gray-400">
          INTRODUCTION
        </span>
        <span className="md:w-2/3 md:text-xl text-blue-500">
          I'm a skilled web developer with experrience in JavaScript and
          expertise in frameworks like React, Node.js I'm a quick learner and
          collaborate, scalable and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to Life!
        </span>
      </div>
      <div className="flex flex-wrap justify-center gap-4 pt-3 md:pt mt-4">
        {services.map((service) => (
          <div key={service.icon}>
            <Tilt
              className="parallax-effect-glare-scale   "
              perspective={500}
              glareColor=" #4287f5"
              glareEnable={true}
              glareMaxOpacity={0.5}
              scale={1.02}
              gyroscope={true}
            >
              <div className="p-3 mx-3 md:m-6 md:p-6 flex flex-col justify-evenly items-center border-2 border-violet-700  rounded-2xl">
                <img
                  className="h-[150px] w-[150px]  "
                  src={service.icon}
                  alt={service.title}
                />
                <div className="m-5 ">{service.title}</div>
              </div>
            </Tilt>
          </div>
        ))}
      </div>

      <div className=" pt-6 px-6 flex flex-col gap-3 md:gap-6 md:px-20" id="Skills">
        <span className=" w-2/3 md:w-[25%] pb-2 text-2xl md:text-4xl text-pink-500 border-b-2 border-gray-400">
          TECHNOLOGIES
        </span>
        <div className=" flex flex-wrap justify-center items-center md:px-14 ">
          {technologies.map((technology) => (
            <div
              key={technology.name}
              className="m-4 mt-5 h-[100px] w-[100px] rounded-3xl shadow-2xl border-[1px] border-red-400 hover:shadow-pink-600 "
            >
              <img
                className="p-2"
                src={technology.icon}
                alt={technology.name}
              />
              <div className=" justify-center flex  ">{technology.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default OverView;
