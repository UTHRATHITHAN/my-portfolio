
"use client";
import React, { useEffect, useState } from "react";
import Contact from "@/components/subComponents/contact/Contact";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/subComponents/theme/mode-toggle";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Nav() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div
      className={`md:backdrop-blur md:sticky md:top-0  md:z-50  border-b-[0.1px] border-b-solid border-b-[rgb(39,39,42)]	`}
    >
      <div className=" flex justify-between   h-14 items-center px-9 md:pl-16 md:pr-16">
     
        <Avatar className=" ml-2 md:ml-0  lg:ml-5 ">
          <AvatarImage src="https://ucarecdn.com/34139b7e-feeb-40c6-97c8-e8d27fd23aeb/BlackandGreyModernAestheticHipsterFontLogo.png" />
          <AvatarFallback className="text-sm">Uthra</AvatarFallback>
        </Avatar>

        <div
          onClick={() => setOpenNav(!openNav)}
          className="z-50 md:hidden cursor-pointer relative  "
        >
          {openNav ? <X /> : <Menu />}
        </div>

        {
          <ul
            className={`absolute left-0 top-[-2000px] w-full md:w-[260px] grid h-full place-content-center md:relative md:flex md:space-x-10 md:items-center space-y-32 md:space-y-0  md:duration-0 md:translate-0 ${
              openNav
                ? " top-[0px] duration-1000 transition-all dark:bg-black bg-white "
                : " md:top-0 duration-0 transition-all "
            }`}
          >
            <li>
              <Button variant="navbtn"  >Home</Button>
            </li>
            <li>
              <a onClick={() => setOpenNav(false)}>
                <Contact />
              </a>
            </li>
            <div className=" flex justify-center">
              <ModeToggle />
            </div>
          </ul>
        }
      </div>
    </div>
  );
}

export default Nav;
