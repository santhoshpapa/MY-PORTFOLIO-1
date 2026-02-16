
import React from 'react';
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "INTERNSHIP",
    description: "Worked as a Full Stack Intern building both front-end and back-end parts of web applications.",
    tags: [],
    imageUrl: "./CERTIFICATION/1.png",
    link: "./CERTIFICATION/2.pdf",
    width: "50%",
    height: "auto",
    align: "center"

  },
  {
    id: 2,
    title: "FULL STACK DEVELOPMENT",
    description: "Worked as a Full Stack course both front-end and back-end parts of web applications.",
    tags: [],
    imageUrl: "./CERTIFICATION/2.png",
    link: "./CERTIFICATION/SANTHOSH K.pdf",
    width: "50%",
    height: "auto",
    align: "center"

  },
   {
    id: 3,
    title: "DATA MINING",
    description: "A course about finding useful information from large amounts of data.",
    tags: [],
    imageUrl: "./CERTIFICATION/3.png",
    link: "./CERTIFICATION/3.pdf",
    width: "50%",
    height: "auto",
    align: "center"

  },
  {
    id: 4,
    title: "PYTHON PROGRAMMING",
    description: "Studied Python to write programs, work with data, and build simple applications.",
    tags: [],
    imageUrl: "./CERTIFICATION/4.png",
    link: "./CERTIFICATION/4.pdf",
    width: "50%",
    height: "auto",
    align: "center"

  },
  {
    id: 5,
    title: "POSTER MAKING",
    description: "Learned how to design and create creative posters.",
    tags: [],
    imageUrl: "./CERTIFICATION/5.png",
    link: "./CERTIFICATION/5.pdf",
    width: "50%",
    height: "auto",
    align: "center"

  },
  {
    id: 6 ,
    title: "QUIZ",
    description: "Participated in a quiz competition.",
    tags: [],
    imageUrl: "./CERTIFICATION/6.png",
    link: "./CERTIFICATION/6.pdf",
    width: "50%",
    height: "auto",
    align: "center"

  }
];

export const SKILLS: Skill[] = [
  { name: "React", level: 50, color: "#61DAFB" },
  { name: "JavaScript", level: 60, color: "#F7DF1E" },
  { name: "TypeScript", level: 25, color: "#3178C6" },
  { name: "CSS/Tailwind", level: 92, color: "#38B2AC" },
  { name: "HTML5", level: 98, color: "#E34F26" },
  { name: "PYTHON", level: 70, color: "#FF0055" }

];
