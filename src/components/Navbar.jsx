import { TiThMenu } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

function Navbar() {
  return (
    <nav>
      <ul className=" flex items-center justify-between h-12 bg-slate-800 text-white p-3 md:h-14 ">
        <li className="md:hidden">
          <span className=" text-white font-semibold text-2xl cursor-pointer">
            <TiThMenu />
          </span>
        </li>
        <li className="pr-4">
          <span className=" text-purple-400 font-bold italic hover:text-slate-200 hover:border-b-2 hover:border-yellow-400  cursor-pointer">
            DEEPAK PANCHAL
          </span>
        </li>

        <div className="hidden md:flex justify-start w-2/3 gap-8 p-4">
          <li className=" hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 cursor-pointer">
            Home
          </li>
          <li className=" hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 cursor-pointer">
            About
          </li>
          <li className=" hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 cursor-pointer">
            Skills
          </li>
          <li className=" hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 cursor-pointer">
            Education
          </li>
          <li className=" hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 cursor-pointer">
            Contect
          </li>
        </div>

        <div className="flex gap-4 md:gap-6 md:p-4">
          <li className="">
            <span className=" text-white font-bold text-2xl  hover:text-slate-300 cursor-pointer">
              <FaGithub />
            </span>
          </li>
          <li className="">
            <span className=" text-white font-bold text-2xl hover:text-slate-300 cursor-pointer">
              <FaLinkedin />
            </span>
          </li>
          <li className="">
            <span className=" text-white font-bold text-2xl hover:text-slate-300 cursor-pointer">
              <BiLogoGmail />
            </span>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
