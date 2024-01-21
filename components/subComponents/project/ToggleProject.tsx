"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFilteredProject } from "@/redux/features/projects/projectsSlice";
import { RootState } from '@/redux/store/store'

const projectTech = ["All", "React Js", "Next Js", "Node Js"];


type Project = {
  name: string,
  desc: string,
  img: string,
  tags: string
}

function ToggleProject() {
  const [activeFilter, setActiveFilter] = useState("All");
  const dispatch = useDispatch();

  const datafromSlice = useSelector(
    (state: RootState) => state.projectsReducer.projectsList
  );

  dispatch(addFilteredProject(datafromSlice));

  const handleWorkFilter =  (item: string) => {
    setActiveFilter(item);
    setTimeout(() => {
      if (item === "All") {
        dispatch(addFilteredProject(datafromSlice));
      } else {
        const filtered = datafromSlice.filter((ele: Project) => ele.tags.includes(item));
        console.log(filtered, " filtereed");
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
