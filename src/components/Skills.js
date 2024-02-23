import "../styles/components/skills.scss";
import mongodb from "../assets/mongodb.svg";
import express from "../assets/express.svg";
import nodejs from "../assets/nodejs.svg";
import logoreact from "../assets/reactjs.svg";
import figma from "../assets/figma.svg";
import sass from "../assets/sass.svg";
import github from "../assets/github.svg";
import postman from "../assets/postman.svg";
// import vercel from "../assets/vercel.svg";
import { useInView } from "react-intersection-observer";

const listSkills = [
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
      // {
      //   logo: vercel,
      //   name: "Vercel",
      // },
    ],
  },
];

export default function Skills() {
  const { ref: skillsRef, inView: isVisible } = useInView();

  return (
    <section id="skills" ref={skillsRef}>
      <div className="skills">
        <h2 className={`main-title hidden ${isVisible ? "active" : ""}`}>
          Skills
        </h2>
        <div className={`container hidden ${isVisible ? "active" : ""}`}>
          {listSkills.map((value) => (
            <div
              className={`column hidden ${isVisible ? "active" : ""}`}
              key={value.title}
            >
              <h3 className="title">{value.title}</h3>
              <ul className="uolist">
                {Array.isArray(value.skills) ? (
                  value.skills.map((skill) => (
                    <li key={skill.name} className="list">
                      <img
                        src={skill.logo}
                        alt={`icone of ${skill.name}`}
                        className="logo"
                      />{" "}
                      {skill.name}
                    </li>
                  ))
                ) : (
                  <li className="list">
                    <img
                      src={value.skills.logo}
                      alt={`icone of ${value.skills.name}`}
                      className="logo"
                    />{" "}
                    {value.skills.name}
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
