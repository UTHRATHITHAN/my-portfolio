"use client";
import React, { useState, useEffect } from "react";
import ToggleProject from "../subComponents/project/ToggleProject";
import ProjectCard from "../subComponents/project/ProjectCard";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProjectList } from "@/redux/features/projects/projectsSlice";
import Loader from "../subComponents/Loader";

function Projects() {
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    async function getProjects() {
      setLoader(true);
      const res = await axios.get(
        "https://65aa2b97081bd82e1d964014.mockapi.io/api/v1/projects/projects"
      );
      const data = res.data;
      console.log(data);
      dispatch(addProjectList(data));
      setLoader(false);
    }
    getProjects();
  }, [dispatch]);

  return (
    <section id="projects">
      <div className="flex flex-col items-center justify-center my-16 pt-5 pb-16">
        <p className="text-4xl font-sans font-bold text-center md:mb-10 pb-12">
          Projects{" "}
        </p>
        <ToggleProject />

        {loader ? (
          <div className="h-52 grid place-content-center">
            <Loader className="w-8 h-8 animate-spin text-gray-400 fill-white dark:text-zinc-600 dark:fill-white" />
          </div>
        ) : (
          <ProjectCard />
        )}
      </div>
    </section>
  );
}

export default Projects;
