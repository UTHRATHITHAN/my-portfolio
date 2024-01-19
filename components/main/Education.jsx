"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
import { useTheme } from "next-themes";
import { FaBookOpen, FaGraduationCap } from "react-icons/fa";
import { SiAtom, SiNextdotjs } from "react-icons/si";


const exp = [
  {
    title: "My schooling",
    location: "Siwalik Matric Higher Secondary school",
    description:
      "I had completed my SSLC and HSC in Siwalik Matric Higher Secondary school ",
    icon: React.createElement(FaBookOpen),

    date: "2014 - 2018",
  },
  {
    title: "Bachelor's Degree",
    location: "Nehru Arts and Science College",
    description:
      "I had completed my bachelors degree in physics at Nehru Arts and Science College. I got interested in web development and decided to join Master of Computer Application.",
    icon: React.createElement(SiAtom),

    date: "2018 - 2021",
  },
  {
    title: "Master's Degree",
    location: "Dr.Mahalingam College of Engineering and Technology",
    description:
      "I had completed my masters degree in computer application in Dr.Mahalingam College of Engineering and Technology ",
    icon: React.createElement(FaGraduationCap),

    date: "2021 - 2023",
  },
  {
    title: "Web Development - MERN ",
    location: "Houston, TX",
    description:
      "After completing my masters degree , I have started learning Web Development using React Js, Node Js , MongoDb and Express Js",
    icon: React.createElement(SiNextdotjs),

    date: "2023 - present",
  },
];

function Education() {
  const { theme } = useTheme();
  console.log(theme);

  return (
    <section id="education">
      <div className="my-16 pt-5">
        <p className="text-4xl font-sans font-bold text-center md:mb-10 pb-12">
          Education
        </p>
        <VerticalTimeline
          animate={true}
          lineColor={`${theme === "light" ? "black" : "white"}`}
        >
          {exp.map((ele, i) => (
            <React.Fragment key={i}>
              <VerticalTimelineElement
                visible={true}
                contentStyle={{
                  background:
                    theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === "light"
                      ? "0.4rem solid #9ca3af"
                      : "0.4rem solid rgba(255, 255, 255, 0.5)",
                }}
                date={ele.date}
                icon={ele.icon}
                iconStyle={{
                  
                  background:
                    theme === "light" ? "white" : "black",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-semibold capitalize">{ele.title}</h3>
                {/* <p className="font-normal !mt-0">{item.location}</p> */}
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                  {ele.description}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Education;
