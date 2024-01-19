"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFilteredProject } from "@/redux/features/projects/projectsSlice";
import axios from "axios";


const projectTech = ["All", "React Js", "Next Js", "Node Js"];

function ToggleProject() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [projectsList, setProjectsList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getProjects() {
      const res = await axios.get(
        "https://65aa2b97081bd82e1d964014.mockapi.io/api/v1/projects/projects"
      );
      const data = res.data;
      setProjectsList(data);
      console.log(data);
    }
    getProjects();
  }, []);

  useEffect(() => {
    dispatch(addFilteredProject(projectsList));
  }, [projectsList]);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setTimeout(() => {
      if (item === "All") {
        dispatch(addFilteredProject(projectsList));
      } else {
        const filtered = projectsList.filter((ele) => ele.tags.includes(item));
        dispatch(addFilteredProject(filtered));
      }
    }, 500);
  };

  return (
    <div className=" flex justify-center flex-wrap gap-y-8 md:gap-x-5">
      {projectTech.map((ele, i) => (
        <Button
          className={`w-3/12 mx-2 p-2 md:p-3 md:w-[120px] rounded-md  text-center  border ${
            activeFilter === ele || "bg-transparent text-black dark:text-white"
          } `}
          key={i}
          onClick={() => handleWorkFilter(ele)}
        >
          <p className="font-mont text-md font-medium	">{ele}</p>
        </Button>
      ))}
    </div>
  );
}

export default ToggleProject;
