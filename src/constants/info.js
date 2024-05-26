import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import html from "../assets/html.png";
import nodejs from "../assets/nodejs.png";
import reactjs from "../assets/react.png";
import mongodb from "../assets/mongodb.png";
import javascript from "../assets/javascript.png";
import web from "../assets/web.png";
import typescript from "../assets/typescript.png";
import git from "../assets/git.png";
import gitHub from "../assets/github.png";
import ux from "../assets/ux.png";
import cpp from "../assets/Cpp.png";
import pro1 from "../assets/pro1.jpg"
import pro2 from "../assets/pro2.jpg"
import pro3 from "../assets/pro3.jpg"

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: reactjs,
  },
  {
    title: "UI/Ux Designer ",
    icon: ux,
  },
];

const technologies = [
  { name: "C++", icon: cpp },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "gitHub",
    icon: gitHub,
  },
];

const projects = [
  {
    name: "Chat App",
    description:
      "Build a real-time chat app with authentication, chat rooms, message history, and online status. Users can join rooms and chat.",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind Css",
        color: "pink-text-gradient",
      },
    ],
    image: pro1,
    source_code_link: "https://github.com/tech-deepakk/Chat-App",
    source_deploy_link: "https://github.com/tech-deepakk/Chat-App",
  },
  {
    name: "ToDo App",
    description:
      "Web application that enables users to manage their daily task and to manage the time efficiently ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: pro2,
    source_code_link: "https://github.com/tech-deepakk",
    source_deploy_link: "https://github.com/tech-deepakk",
  },
  {
    name: "Currency Converter",
    description:
      "Build a currency converter app with real-time exchange rates. Users can quickly convert currencies and view trends.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Html",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: pro3,
    source_code_link: "https://github.com/tech-deepakk/Currency-Converter",
    source_deploy_link: "https://github.com/tech-deepakk/Currency-Converter",
  },
];
export { services, technologies, projects };
