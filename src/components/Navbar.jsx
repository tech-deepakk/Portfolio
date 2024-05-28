import { TiThMenu } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-scroll";

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
            ? "absolute top-0 z-10 flex-col opacity-[.85] h-auto"
            : "items-center h-14"
        } flex  justify-between  bg-slate-800 text-white p-3 md:h-16 `}
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
            <Link to="Home" activeClass="Home" spy={true}>
              Home
            </Link>
          </li>
          <li className=" hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 cursor-pointer">
            <Link to="About" activeClass="" spy={true}>
              About
            </Link>
          </li>
          <li className=" hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 cursor-pointer">
            <Link to="Skills" activeClass="" spy={true}>
              Skills
            </Link>
          </li>
          <li className=" hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 cursor-pointer">
            <Link to="Projects" activeClass="" spy={true}>
              Projects
            </Link>
          </li>
          <li className=" hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 cursor-pointer">
            <Link to="Contact" activeClass="active" spy={true}>
              Contact
            </Link>
          </li>
        </div>

        <div className="flex gap-4 md:gap-6 md:p-4">
          <li className="text-white font-bold text-2xl  hover:text-slate-300 cursor-pointer">
            <a href="https://github.com/tech-deepakk" target="_blank">
              <FaGithub />
            </a>
          </li>
          <li className="text-white font-bold text-2xl hover:text-slate-300 cursor-pointer">
            <a
              href="https://www.linkedin.com/in/deepak-panchal-733806290/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="text-white font-bold text-2xl hover:text-slate-300 cursor-pointer">
            <a href="mailto:tech.deepakpanchal@gmail.com" target="_blank">
              <BiLogoGmail />
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
