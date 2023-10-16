import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import React from "react";
import ecommerceRestApi from "@/public/ecommerceRestApi.png";
import geopapel from "@/public/geopapel.png";
import mandalaApp from "@/public/mandalaApp.png";
import misApuntesDeProgramacion from "@/public/misApuntesDeProgramacion.png";
import textEncryptionApp from "@/public/textEncryptionApp.png";
import tradingTX from "@/public/tradingTX.png";

/* export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const; */

export const navigationLinks = {
  en: [
    { name: "Home", hash: "#home" },
    { name: "About", hash: "#about" },
    { name: "Projects", hash: "#projects" },
    { name: "Skills", hash: "#skills" },
    { name: "Experience", hash: "#experience" },
    { name: "Contact", hash: "#contact" },
  ],
  es: [
    { name: "Inicio", hash: "#home" },
    { name: "Acerca de", hash: "#about" },
    { name: "Proyectos", hash: "#projects" },
    { name: "Habilidades", hash: "#skills" },
    { name: "Experiencia", hash: "#experience" },
    { name: "Contacto", hash: "#contact" },
  ],
};


export const experiencesData = [
  {
    title: "Full Stack Developer",
    location: "Buenos Aires, Argentina (Remote)",
    description:
    'Participated in a team of 5 (UX/UI Designers, Developers, and Community Manager) to launch the landing page for "Geo Papel". Used React (Vite and ChakraUI) for the interface; created a backend with Node/Express, integrating the Notion API for code-free edits, and managed deployment on cPanel',
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Full-Stack Developer Student",
    location: "Coderhouse (Remote)",
    description:
      "I graduated after 1 year of studying. I immediately found a job as a front-end developer, ended up deploying a back-end as well.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2023",
  },
  {
    title: "Algorithmic Trader",
    location: "Morelia, México (Remote)",
    description:
      "Developed a backtester in Pine Script to analyze historical results of automated trading strategies",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Oracle Next Education Student",
    location: "Oracle & Alura Latam (Remote)",
    description:
    "Graduated from Oracle Next Education (ONE) program; Acquired in-depth knowledge in front-end development using React. Gained foundational skills in MySQL and Oracle Cloud Infrastructure (OCI). Honed my expertise in Python, specifically for Data Science applications.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2023",
  },
] as const;


export const projectsData = [
  {
    title: "Geo Papel",
    description:
      "Worked as a full-stack developer on this startup project for 2 months. Develop half of the front-end and full back-end with  Notion API Integration.",
    tags: ["React", "Chakra UI", "Node.js", "Express", "Notion API", ],
    imageUrl: geopapel,
    repo: "https://github.com/Thayrov/geopapel",
    link: "https://www.geopapel.com.ar",
  },
  {
    title: "Mandala App",
    description:
      "Developed an app potentially for advertising and selling hand-colored mandalas by my wife using various painting techniques.",
    tags: ["React", "Material UI", "React Router", "Firebase"],
    imageUrl: mandalaApp,
    repo: "https://github.com/Thayrov/mandala-app",
    link: "https://thayrov.github.io/mandala-app/",
  },
  {
    title: "Text Encryption App",
    description:
    "Created an app for secure message exchange with custom encryption keys. Managed the project using agile methods and Trello.",
    tags: ["Encryption", "JavaScript", "Agile Development", "Trello"],
    imageUrl: textEncryptionApp,
    repo: "https://github.com/Thayrov/ChallengeONE_EncriptadorTexto",
    link: "https://thayrov.github.io/ChallengeONE_EncriptadorTexto/"
  },
  {
    title: "Trading Journal",
    description:
      "Developed a trading tools platform that includes a position sizing calculator and trading journal. Created as an academic exercise for the Coderhouse JavaScript course.",
    tags: ["JavaScript", "Trading", "Calculator", "Bootstrap"],
    imageUrl: tradingTX,
    repo: "https://github.com/Thayrov/TradingJournal",
    link: "https://thayrov.github.io/TradingJournal/"
  },
  {
    title: "Mis Apuntes de Programación",
    description:
      "Created a website to share notes, toolkits, and reflections from my Web Development course. Includes a 'Who Am I?' section and a contact page.",
    tags: ["Web Development", "HTML", "SASS", "Bootstrap"],
    imageUrl: misApuntesDeProgramacion,
    repo: "https://github.com/Thayrov/apuntes_de_programacion",
    link: "https://thayrov.github.io/apuntes_de_programacion/"
  },
  {
    title: "E-commerce REST API",
    description:
      "Developed a REST API for managing user, product, and cart entities in an e-commerce platform.",
    tags: ["REST API", "MongoDB", "Authentication", "Express", "Testing", "Swagger"],
    imageUrl: ecommerceRestApi, 
    repo: "https://github.com/Thayrov/Backend",
    link: "https://thayrov-backend-dev.fl0.io/"
  },

] as const;

export const skillsData = [
  // Front-end
  "HTML5",
  "CSS3",
  "SASS",
  "Bootstrap",
  "JavaScript",
  "React",
  "React Native",
  "Redux",
  "SweetAlert2",

  // Back-end
  "Node.js",
  "Express",
  "Mongo",
  "MySQL",
  "Firebase",
  "Json-Server",
  "Passport",
  "Socket.io",
  "Python",

  // DevOps
  "Docker",
  "OCI",
  "PM2",
  "Nodemon",

  // Testing
  "Chai",
  "Mocha",
  "Supertest",

  // Version Control
  "Git",
  "Github",

  // Code Quality
  "ESLint",
  "Prettier",
  
  // API and Data Handling
  "Axios",
  "Cors",
  "Dotenv",

  // Middleware and Templates
  "Express-Handlebars",
  "Express-Session",
  "Express-Compression",

  // Utilities
  "Faker",
  "Mongoose",
  "Multer",
  "Nodemailer",
  "Swagger",
  "Winston",
  "Cross-Env",
  
  // UI/UX Design
  "Balsamiq",

  // Automation and Notifications
  "Concurrently",
  "Bcrypt",
] as const;
