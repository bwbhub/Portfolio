import mongodb from "../../assets/mongodb.svg";
import express from "../../assets/express.svg";
import nodejs from "../../assets/nodejs.svg";
import logoreact from "../../assets/reactjs.svg";
import figma from "../../assets/figma.svg";
import sass from "../../assets/sass.svg";
import github from "../../assets/github.svg";
import postman from "../../assets/postman.svg";
import vercel from "../../assets/vercel.svg";

const listSkillsEN = [
  {
    title: "Design",
    skills: {
      logo: figma,
      name: "Figma",
    },
  },
  {
    title: "Front-end",
    skills: [
      {
        logo: logoreact,
        name: "ReactJS",
      },
      {
        logo: sass,
        name: "Sass",
      },
    ],
  },
  {
    title: "Back-end",
    skills: [
      {
        logo: nodejs,
        name: "NodeJs",
      },
      {
        logo: express,
        name: "Express",
      },
      {
        logo: mongodb,
        name: "MongoDB",
      },
    ],
  },
  {
    title: "Tools",
    skills: [
      {
        logo: github,
        name: "GitHub",
      },
      {
        logo: postman,
        name: "Postman",
      },
      {
        logo: vercel,
        name: "Vercel",
      },
    ],
  },
];

export default listSkillsEN;
