"use client";
import React from "react";
import SkillToggleBar from "../subComponents/skill/SkillToggleBar";
import Technology from "../subComponents/skill/Technology";
import { motion } from "framer-motion"


function Skills() {
  return (
    <section id="skills">
      <motion.div className="my-16 pb-24 pt-5">
        <p className="text-4xl font-sans font-bold text-center md:mb-10">
          Skills
        </p>

        <div className="flex flex-col  justify-center items-center md:flex-row-reverse md:gap-40">
          <div className="mt-10 flex border-2 px-4 rounded-sm p-3 md:p-2 space-x-5 md:space-x-0 md:flex-col md:mt-0 md:py-10  md:justify-between md:items-center md:space-y-5 md:w-[110px] text-zinc-700">
            <SkillToggleBar />
          </div>
    
          <Technology />

      
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
