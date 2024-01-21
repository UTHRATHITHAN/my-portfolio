"use client";
import React from "react";
import { Button } from "../ui/button";
import Socials from "../subComponents/Socials";
import { motion } from "framer-motion";

function Aboutme() {
  return (
    <section id="aboutme" className="h-screen grid place-content-center pb-14">
      <div className="flex flex-col w-full justify-center justify-items-center items-center ">
        <motion.div
          // initial={{ opacity: 0,y:-500 }}
          // animate={{opacity: 1, y: 0 }}
          // transition={{ type: "spring", stiffness: 70,duration:1 }}
          className="md:w-6/12 px-10 text-center"
        >
          <span className="text-5xl font-bold border-b-4 border-b-indigo-500">
            Hi,
          </span>
          <div>
            <div className="text-5xl mt-8 font-bold text-wrap">
              <span>I</span>
              <span className="text-indigo-500">&apos;</span>
              <span>m</span>
              <span className="text-indigo-500">,</span>
              <span>Uthrathithan</span>

              <div className="mt-5  text-zinc-700">
                <span>Full Stack Developer</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="md:w-6/12 text-center text-2xl px-5 mt-16">
          As a passionate and aspiring web developer. I am dedicated to crafting
          user-friendly digital experiences in freshers Presepective. Unlocking
          the digital realm with lines of code from concept to creation.
        </div>

        <motion.div
          className="mt-2 pt-10 pb-3"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a
            href="https://drive.google.com/file/d/11Vljt0qkGllqOLpgw6b78SBQmDRUdZes/view?usp=drive_link"
            target="#"
          >
            <Button className="p-6">Resume</Button>
          </a>
        </motion.div>
        <Socials className="mt-10" />
      </div>
    </section>
  );
}

export default Aboutme;
