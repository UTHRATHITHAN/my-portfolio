"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import { motion } from "framer-motion";
import { RootState } from '@/redux/store/store'

type Project = {
  name: string;
  img: string;
  desc: string;
  tags: string;
};

function ProjectCard() {
  const filteredProjectList = useSelector(
    (state: RootState) => state.projectsReducer.filteredProject
  );
  console.log("filteredProjectList", filteredProjectList);

  return (
    <motion.div
      className="flex justify-center py-10 md:w-10/12"
      animate={{ y: 100 }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
    >
      <div className=" flex flex-wrap justify-center items-center  my-10 gap-x-32 gap-y-20">
        {filteredProjectList.map((ele: Project, i: number) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
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
            <p className="text-center text-black text-md px-2 font-sans">
              {ele.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
