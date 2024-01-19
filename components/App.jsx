"use client";
import Nav from "@/components/main/Nav";
import Aboutme from "@/components/main/Aboutme";
import Skills from "@/components/main/Skill";
import Certificate from "@/components/main/Certificate";
import Footers from "@/components/main/Footers";
import Education from "./main/Education";
import Projects from "./main/Projects";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <Nav />
      <Aboutme />
      <Skills />
      <Certificate />
      <Education />
      <Projects />
      <Footers />
    </div>
  );
}
