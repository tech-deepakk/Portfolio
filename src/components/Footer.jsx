import React from "react";
import { GrLinkedinOption, GrMail, GrGithub } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-slate-900">
      <footer className="h-[auto] flex  items-center justify-between text-white px-6 md:px-20 ">
        <div className="text-yellow-500">
          <span className="">© 2024 DEEPAK PANCHAL</span>
        </div>
        <div  >
          <ul className="flex flex-wrap text-xl md:text-2xl py-4 gap-4 md:gap-7">
            <li>
              <a href="">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="">
                <GrGithub />
              </a>
            </li>

            <li>
              <a href="">
                <GrLinkedinOption/>
              </a>
            </li>
            <li><a href=""><GrMail/></a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
