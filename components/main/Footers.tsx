"use client";

import React from "react";
import { Button } from "../ui/button";
import { CornerRightUp } from "lucide-react";
import Socials from "../subComponents/Socials";

function Footers() {
  return (
    <footer>
      <div className="w-full border-t-[0.1px] border-t-solid border-t-[rgb(39,39,42)] h-52 flex flex-col  gap-y-12 items-center justify-center ">
        <Socials />
        <ul className=" flex gap-x-10 text-md  ">
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
