import { TiThMenu } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { useState } from "react";

function Navbar() {
  const [selectMenu, setSelectMenu] = useState(false);
  const selectOnClick = () => {
    setSelectMenu(!selectMenu);
  };

  return (
    <nav>
      <ul
        className={`${
          selectMenu
            ? "absolute top-0 z-10 flex-col opacity-[.85]"
            : "items-center"
        } flex  justify-between h-auto bg-slate-800 text-white p-3 md:h-14 `}
      >
        <li className={`${selectMenu && "px-4 mb-4"} md:hidden`}>
          <span className=" text-white font-semibold text-2xl cursor-pointer">
            <TiThMenu onClick={selectOnClick} />
          </span>
        </li>
        <li className="px-4">
          <span className=" text-purple-400 font-bold italic hover:text-slate-200 hover:border-b-2 hover:border-yellow-400  cursor-pointer">
            DEEPAK PANCHAL
          </span>
        </li>

        <div
          className={`${
            selectMenu ? "flex flex-col" : "hidden"
          } md:flex justify-start w-2/3 gap-8 p-4`}
        >
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
