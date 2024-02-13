"use client";
import React from "react";
import { Button } from "../ui/button";
import Socials from "../subComponents/Socials";
import { motion } from "framer-motion";

function Aboutme() {
  return (
    <section id="aboutme" className="h-screen grid place-content-center pb-14">
      <div className="flex flex-col w-full justify-center justify-items-center items-center pt-8 md:pt-0">
        <motion.div
          // initial={{ opacity: 0,y:-500 }}
          // animate={{opacity: 1, y: 0 }}
          // transition={{ type: "spring", stiffness: 70,duration:1 }}
          className="md:w-10/12 px-10 text-center "
        >
          <span className=" text-2xl md:text-5xl font-bold border-b-4 border-b-indigo-500">
            Hi,
          </span>
          <div>
            <div className="text-3xl md:text-5xl md:mt-8 mt-4 font-bold text-wrap">
              <span>I</span>
              <span className="text-indigo-500">&apos;</span>
              <span>m</span>
              <span className="text-indigo-500">,</span>
              <span>Uthrathithan</span>

              <div className="md:mt-5 mt-2 text-zinc-700 ">
                <span>Full Stack Developer</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className={` md:w-6/12 text-center text-md md:text-2xl px-5 mt-16 `}>
          As a passionate and aspiring web developer. I am dedicated to crafting
          user-friendly digital experiences. Unlocking the digital realm with
          lines of code from concept to creation.
        </div>

        <motion.div
          className="mt-2 pt-10 pb-3"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a
            href="https://drive.google.com/file/d/1Ztj6JggfMyJ-vKcdL_gm3kAmbIe5VaKK/view?usp=sharing"
            target="#"
          >
            <Button className="p-6 text-sm md:text-base">Resume</Button>
          </a>
        </motion.div>
        <Socials className="mt-16 w-8/12  md:w-2/12" />
      </div>
    </section>
  );
}

export default Aboutme;
