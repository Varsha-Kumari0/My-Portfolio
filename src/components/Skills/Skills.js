import React from "react";
import "../Hero/Hero.css";
import "./Skills.css";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <>
      <div className="container">
        <div className="inner-container2">
          <div className="head">
            <h1 className="heading">Skills</h1>
            <p className="para">
              Here are some of my skills on which I have been working on for the
              past 1 year.
            </p>
          </div>

          <div className="skillsContainerOuter">
            {TotalSkills.map((data, index) => (
              <div className="skillsContainer" key={index}>
                <SkillsCard skillTitle={data.skillTitle} skills={data.skills} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

const TotalSkills = [
  {
    skillTitle: "Frontend",
    skills: [
      {
        image: "../../assets/nun.jpg",
        name: "React",
      },
      {
        image: "",
        name: "Angular",
      },
      {
        image: "",
        name: "HTML",
      },
      {
        image: "",
        name: "CSS",
      },
      {
        image: "",
        name: "JavaScript",
      },
      {
        image: "",
        name: "Bootstrap",
      },
      {
        image: "",
        name: "Tailwind CSS",
      },
    ],
  },
  {
    skillTitle: "Backend",
    skills: [
      {
        image: "",
        name: "Nhi aata",
      },
    ],
  },
  {
    skillTitle: "Programming Languages",
    skills: [
      {
        image: "",
        name: "C",
      },
      {
        image: "",
        name: "C++",
      },
      {
        image: "",
        name: "Java",
      },
    ],
  },
  {
    skillTitle: "Others",
    skills: [
      {
        image: "",
        name: "Git",
      },
      {
        image: "",
        name: "GitHub",
      },
      {
        image: "",
        name: "VS Code",
      },
    ],
  },
];
