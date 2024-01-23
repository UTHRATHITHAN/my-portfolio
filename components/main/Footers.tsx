"use client";

import React from "react";
import { Button } from "../ui/button";
import { CornerRightUp } from "lucide-react";
import Socials from "../subComponents/Socials";

function Footers() {
  return (
    <footer>
      <div className="mb-10 w-full flex justify-center items-center  md:w-full flex-wrap  border-t-[0.1px] border-t-solid border-t-[rgb(39,39,42)] h-52  md:flex md:flex-col  md:gap-y-12 md:items-center md:justify-center">
        <Socials className="mt-5 w-8/12  md:w-2/12 " />
        <ul className="text-md mt-5 flex flex-wrap justify-center gap-y-6 gap-x-10 md:gap-x-10 text-md  ">
          <li>
            {" "}
            <a href="#aboutme"> About Me </a>
          </li>
          <li>
            {" "}
            <a href="#skills"> Skills </a>{" "}
          </li>

          <li>
            {" "}
            <a href="#badges">Badges</a>
          </li>
          <li>
            {" "}
            <a href="#education">Education</a>
          </li>

          <li>
            {" "}
            <a href="#projects">Projects</a>
          </li>
        </ul>
        <Button className="absolute invisible md:visible md:right-14 p-2">
          {" "}
          <a href="#aboutme">
            {" "}
            <CornerRightUp />{" "}
          </a>{" "}
        </Button>
      </div>
    </footer>
  );
}

export default Footers;
