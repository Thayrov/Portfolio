"use client";

import { BsArrowRight, BsLinkedin } from "react-icons/bs";

import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useLang } from "@/context/lang-context";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { lang } = useLang(); 

  return (
    <section
      ref={ref}
      id="home"
      className="max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="https://res.cloudinary.com/dhjlbf6xs/image/upload/v1684949820/Personal/Profile_pic_2022_f4kywf.jpg"
              alt="Thayrov portrait"
              width="300"
              height="300"
              quality="95"
              priority={true}
              className="h-30 w-30 rounded-full object-cover border-[0.15rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-7xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
      { lang ==='en' ?
        (<div>
        <p>
        <span className="font-bold">Hello, I'm Thayrov.</span><br/> 
        I'm a{" "}<span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">1 and a half years</span> of experience.<br/>
        I enjoy building <span className="italic">sites & apps</span>. <br/>
        My focus is{" "}<span className="underline">the MERN stack</span>.
        </p>
      </div>) :
      (<div>
      <p>
      <span className="font-bold">Hola, soy Thayrov.</span> <br/>
      Soy un{" "} <span className="font-bold">desarrollador full-stack</span> con{" "}
        <span className="font-bold">1 año y medio</span> de experiencia. <br/>
        Me gusta construir <span className="italic">sitios y aplicaciones</span>. <br/>
        Mi enfoque es{" "}<span className="underline">el stack MERN</span>.
      </p>
      </div>)
      }
      </motion.h1>

      <motion.div
        className="mb-20 flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 dark:bg-[#3a414b] text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          {lang ==='en' ? 'Contact me here' : 'Contáctame aquí'}{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          {lang ==='en' ?'Download': 'Descargar'} CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <div className="flex gap-4">
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/thayrovg/"
          target="_blank"
          >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/Thayrov"
          target="_blank"
          >
          <FaGithubSquare />
        </a>
          </div>
      </motion.div>
    </section>
  );
}
