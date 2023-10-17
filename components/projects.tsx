"use client";

import Project from "./project";
import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import { useLang } from "@/context/lang-context";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const { lang } = useLang(); 

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 mt-20">
      <SectionHeading>{lang ==='en' ?'My projects':'Mis Proyectos'}</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
