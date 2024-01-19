import React from "react";
import { FaBookOpen, FaGraduationCap } from "react-icons/fa";
import { SiAtom, SiNextdotjs } from "react-icons/si";


export  const education = [
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
  ]