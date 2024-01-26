import React from "react";
import "../Hero/Hero.css";
import "./Skills.css";
import SkillsCard from "./SkillsCard";
import ReactIcon from "../../assets/favicon.ico";
import AngularIcon from "../../assets/angular.png";
import HTMLIcon from "../../assets/HTML.png";
import CSSIcon from "../../assets/CSS.png";
import JSIcon from "../../assets/js.png";
import BootstrapIcon from "../../assets/bootstrap.png";
import TailwindIcon from "../../assets/tailwindcss.png";
import CIcon from "../../assets/C.png";
import CppIcon from "../../assets/c++.png";
import JavaIcon from "../../assets/java.png";
import GitIcon from "../../assets/git.png";
import GithubIcon from "../../assets/github.png";
import VSCodeIcon from "../../assets/vsCode.png";

const Skills = () => {
  return (
    <>
      <div className="container" id="skills">
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
        image: ReactIcon,
        name: "React",
      },
      {
        image: AngularIcon,
        name: "Angular",
      },
      {
        image: HTMLIcon,
        name: "HTML",
      },
      {
        image: CSSIcon,
        name: "CSS",
      },
      {
        image: JSIcon,
        name: "JavaScript",
      },
      {
        image: BootstrapIcon,
        name: "Bootstrap",
      },
      {
        image: TailwindIcon,
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
        image: CIcon,
        name: "C",
      },
      {
        image: CppIcon,
        name: "C++",
      },
      {
        image: JavaIcon,
        name: "Java",
      },
    ],
  },
  {
    skillTitle: "Others",
    skills: [
      {
        image: GitIcon,
        name: "Git",
      },
      {
        image: GithubIcon,
        name: "GitHub",
      },
      {
        image: VSCodeIcon,
        name: "VS Code",
      },
    ],
  },
];
