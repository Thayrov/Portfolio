import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import React from "react";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
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
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer Student",
    location: "Buenos Aires, Argentina (Remote)",
    description:
      "I graduated after 1 year of studying. I immediately found a job as a front-end developer, ended up deploying a back-end as well.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Full Stack Developer",
    location: "Buenos Aires, Argentina (Remote)",
    description:
      'Participated in a team of 5 (UX/UI Designers, Developers, and Community Manager) to launch the landing page for "Geo Papel". Used React (Vite and ChakraUI) for the interface; created a backend with Node/Express, integrating the Notion API for code-free edits, and managed deployment on cPanel',
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Algorithmic Trader",
    location: "Morelia, México (Remote)",
    description:
      "Developed a backtester in Pine Script to analyze historical results of automated trading strategies",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Geo Papel",
    description:
      "I worked as a full-stack developer on this startup project for 2 months. Develop half of the front-end and full back-end with  Notion API Integration.",
    tags: ["React", "Chakra UI", "Node.js", "Express", "Notion API", ],
    imageUrl: corpcommentImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "MySQL",
  "Redux",
  "Express",
  "Framer Motion",
  "OCI",
  "Docker",
  "Nest.js"
] as const;
