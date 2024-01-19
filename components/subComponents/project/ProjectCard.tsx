"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";

type Project = {
  name: string;
  img: string;
  desc: string;
  tags: string;
};

function ProjectCard() {


  const filteredProjectList = useSelector(
    (state: any) => state.projectsReducer.filteredProject
  );

  console.log(filteredProjectList);
  return (
    <div className="flex justify-center py-10 md:w-10/12">
      <div className=" flex flex-wrap justify-center items-center  my-10 gap-x-32 gap-y-20">
        {filteredProjectList.map((ele: Project, i: number) => (
          <div
            className="w-[320px] h-96 bg-white rounded-md flex flex-col items-center shadow-2xl"
            key={i}
          >
            <div className="relative w-[300px] mt-[10px]   h-4/6 rounded-md flex justify-center  ">
              <div className="relative grid place-content-center grid-cols-2 justify-items-center w-full h-full  bg-black">
                {ele.img && (
                  <Image
                    src={ele.img}
                    alt="webdev"
                    width={1000}
                    height={1000}
                    className="absolute  h-full w-full	object-cover	"
                  />
                )}
              </div>

              <div className="absolute h-8 rounded-md w-24 bg-white text-zinc-600 text-center bottom-3 ">
                <p className="pt-1">{ele.tags}</p>
              </div>
            </div>

            <p className="mt-3 text-black font-bold text-xl pb-2">{ele.name}</p>
            <p className="text-center text-black text-md px-2 font-sans">{ele.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
