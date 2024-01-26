import React from "react";
import "../Hero/Hero.css";
import "../Skills/Skills.css";
import "./Experience.css";

const Experience = () => {
  return (
    <>
      <div className="container" id="experience">
        <div className="inner-container2">
          <div className="head">
            <h1 className="heading">Experience</h1>
            <p className="para">My work experience as a B.E. student</p>
          </div>

          <div className="experienceCont">
            {ExperienceData.map((data) => (
              <div className="exprncboxOuterCont">
                <div className="bulletCont"> </div>
                <div className="exprncboxCont">
                  <div className="role">
                    <img src={data.image} alt="" className="CompImage" />
                    <div className="CompData">
                      <h2>{data.role}</h2>
                      <p className="companyName">{data.company}</p>
                      <p className="timePeriod">{data.timePeriod}</p>
                    </div>
                  </div>
                  <div className="descOfRole">{data.descAboutJob}</div>
                  <div className="skillsLearnt">
                    <b>Skills: </b>
                    {data.skillsLearnt.map((skill) => (
                      <li className="eachSkill">{skill}</li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;

const ExperienceData = [
  {
    image:
      "https://media.licdn.com/dms/image/C510BAQGzGISQoqeo9g/company-logo_100_100/0/1630628667815/sliet_software_developement_club_logo?e=1712188800&v=beta&t=AV8VQPaCfmY2pw2nfXj6ChL1uovWJclthmBZkZi03S0",
    role: "Member",
    company: "SSDC (Sliet Software Development Club)",
    timePeriod: "Nov 2023 - Present",
    descAboutJob:
      "Actively contributing as a member of the SLIET Software Development Club (SSDC), engaging in collaborative projects and fostering a passion for software development.",
    skillsLearnt: [],
  },
  {
    image:
      "https://media.licdn.com/dms/image/C560BAQFdLmxFZ5_jAw/company-logo_100_100/0/1631382545994?e=1712188800&v=beta&t=TVdaS-ZpMZ8LwWaDlO5Xh7rrfHBvE4MJySg76MKamgQ",
    role: "Web Developer",
    company: "XOR Labs ",
    timePeriod: "Jun 2023 - Nov 2023 ",
    descAboutJob:
      "Completed an enriching internship at XOR Labs, gaining hands-on experience as a web developer. Applied theoretical knowledge to real-world projects, enhancing skills in web development and contributing to the dynamic environment at XOR Labs.",
    skillsLearnt: ["Angular,", "Tailwind CSS,", "TypeScript"],
  },
  {
    image:
      "https://media.licdn.com/dms/image/C4D0BAQGGhtmFMAuFAA/company-logo_100_100/0/1671520232799?e=1712188800&v=beta&t=IMxTeIH1Npj7Zstiu-Bs25o1jRMckFQGiKHmL67qpqE",
    role: "Frontend Web Developer",
    company: "techFEST SLIET",
    timePeriod: "Jan 2023 - Mar 2023 ",
    descAboutJob:
      "Served as a Frontend Web Developer for TechFEST SLIET'23, actively contributing to the creation and enhancement of the event's web interface. Played a key role in crafting an engaging and user-friendly digital experience for participants and attendees.",
    skillsLearnt: ["React.js,", "HTML,", "CSS,", "GitHub,", "Bootstrap"],
  },
];
