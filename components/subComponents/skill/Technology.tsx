"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loader from "@/components/subComponents/Loader";
import Image from "next/image";

type Skill = {
  name: string;
  skillURL: string;
  tag: string;
};

function Technology() {
  const [loader, setLoader] = useState(true);
  const [skills, setSkill] = useState([]);
  const tech = useSelector((state) => state.skillsReducer.toggleSkills);

  useEffect(() => {
    async function getSkillLogo() {
      const res = await axios.get(
        "https://659fe4355023b02bfe8ab8c2.mockapi.io/api/v1/images/Skills"
      );

      setSkill(res.data);
      setLoader(false);
    }
    getSkillLogo();
  }, []);

  return (
    <div className="w-[400px] h-[370px] mt-10  flex justify-center items-center 	flex-wrap	  gap-x-14 gap-y-10">
      {loader ? (
        <Loader className="w-8 h-8 text-gray-200 animate-spin dark:text-zinc-600 fill-white" />
      ) : (
        skills.map((skill: Skill) =>
          skill.tag === tech ? (
            <div
              className="h-24 w-24 bg-zinc-900 rounded-sm flex justify-center items-center"
              key={skill.name}
            >
              <Image
                src={skill.skillURL}
                alt={skill.name}
                width={70}
                height={70}
              />
            </div>
          ) : (
            ""
          )
        )
      )}
    </div>
  );
}

export default Technology;
