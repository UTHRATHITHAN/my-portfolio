"use client";

import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleSkills,
  changeBtnActive,
} from "@/redux/features/skills/skillsSlice";
import { boolean } from "zod";
import { Button } from "@/components/ui/button";

type BtnActive = {
  frontend: boolean;
  backend: boolean;
  database: boolean;
  devops: boolean;
};

function SkillToggleBar() {
  const dispatch = useDispatch();
  let btnActive: BtnActive = {
    frontend: false,
    backend: false,
    database: false,
    devops: false,
  };
  function togglehandler(tech: string, activeStatus: boolean) {
    const res = { ...btnActive, [tech]: activeStatus };
    dispatch(changeBtnActive(res));
    dispatch(toggleSkills(tech));
  }

  const { frontend, backend, database, devops } = useSelector(
    (state) => state.skillsReducer.btnActive
  );

  return (
    <ToggleGroup
      type="single"
      className=" md:flex md:flex-col md:space-y-2 space-x-2 md:space-x-0"
    >
      <Button
        value="frontend"
        aria-label="Toggle "
        className={`border-0 w-[85px] p-2  rounded-md  text-center ${frontend || "bg-transparent text-black dark:text-white"}`}
        onClick={() => togglehandler("frontend", true)}
      >
        Front End
      </Button>

      <Separator
        // orientation="vertical"
        className=" h-6 w-[1px] md:h-[1px] md:w-[50px]"
      />
      <Button
        value="backend"
        aria-label="Toggle "
        className={`border-0 w-[85px] rounded-md  text-center ${backend || "bg-transparent text-black dark:text-white"}`}
        onClick={() => togglehandler("backend", true)}
      >
        Back End
      </Button>
      <Separator
        orientation="vertical"
        className="h-6 md:h-[1px] md:w-[50px] "
      />
      <Button
        value="database"
        aria-label="Toggle "
        className={`border-0 w-[85px]  p-2  rounded-md  text-center ${database || "bg-transparent text-black dark:text-white"}`}
        onClick={() => togglehandler("database", true)}
      >
        Database
      </Button>
      <Separator
        orientation="vertical"
        className="h-6 md:h-[1px] md:w-[50px] "
      />
      <Button
        value="devops"
        aria-label="Toggle "
        className={`border-0 w-[85px] p-2  rounded-md  text-center ${devops || "bg-transparent text-black dark:text-white"}`}
        onClick={() => togglehandler("devops", true)}
      >
        DevOps
      </Button>
    </ToggleGroup>
  );
}

export default SkillToggleBar;
