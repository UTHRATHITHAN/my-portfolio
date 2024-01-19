"use client";
import React, {useState, useEffect} from "react";
import ToggleProject from "../subComponents/project/ToggleProject";
import ProjectCard from "../subComponents/project/ProjectCard";

function Projects() {



  return (
    <section id="projects">
      <div className="flex flex-col items-center justify-center my-16 pt-5">
        <p className="text-4xl font-sans font-bold text-center md:mb-10 pb-12">
          Projects{" "}
        </p>
        <ToggleProject/>
        <ProjectCard />
      </div>
    </section>
  );
}

export default Projects;
