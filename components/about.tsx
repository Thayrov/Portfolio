"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        As an <span className="font-medium">aspiring software developer</span>, I have a solid foundation in 
        <span className="font-medium"> Node.js, React, Express, and MongoDB</span>. My goal is to deepen my 
        understanding of <span className="font-medium">software architecture, cloud solutions, and agile methodologies</span>.
      </p>
      <p className="mb-3">
        While I may be at the start of my development career, my previous roles in 
        <span className="font-medium"> customer service, sales, teaching, management, and designing</span> have equipped me with valuable skills.
        <span className="italic"> My problem-solving and conflict resolution abilities</span> allow me to navigate challenges in coding projects. 
        I excel in <span className="underline">team settings</span> due to my strong communication skills. 
        I also have a keen sense of <span className="font-medium">project management</span>.
      </p>
      <p >
        I bring a <span className="font-medium">mature, well-rounded skill set</span> that complements my technical abilities, 
        making me a holistic contributor to any team. I'm not just looking for a job; I'm looking to <span className="font-medium">grow, contribute, and excel</span> in a full-time remote position.
      </p>
    </motion.section>
  );
}
