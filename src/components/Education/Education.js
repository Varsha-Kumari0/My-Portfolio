import React from "react";
import "../Hero/Hero.css";
import "../Skills/Skills.css";
import "../Experience/Experience.css";

const Education = () => {
  return (
    <>
      <div className="container">
        <div className="inner-container2">
          <div className="head">
            <h1 className="heading">Education</h1>
            <p className="para">My Education- as a B.E. student</p>
          </div>

          <div className="experienceCont">
            {EducationData.map((data) => (
              <div className="exprncboxOuterCont">
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

export default Education;

const EducationData = [
  {
    image:
      "https://media.licdn.com/dms/image/C510BAQGzGISQoqeo9g/company-logo_100_100/0/1630628667815/sliet_software_developement_club_logo?e=1712188800&v=beta&t=AV8VQPaCfmY2pw2nfXj6ChL1uovWJclthmBZkZi03S0",
    role: "Member",
    company: "SSDC (Sliet Software Development Club)",
    timePeriod: "Nov 2023 - Present",
    descAboutJob: "I am member at my college's Software development club",
    skillsLearnt: [],
  },
  {
    image:
      "https://media.licdn.com/dms/image/C560BAQFdLmxFZ5_jAw/company-logo_100_100/0/1631382545994?e=1712188800&v=beta&t=TVdaS-ZpMZ8LwWaDlO5Xh7rrfHBvE4MJySg76MKamgQ",
    role: "Web Developer",
    company: "XOR Labs ",
    timePeriod: "Jun 2023 - Nov 2023 ",
    descAboutJob: "I am member at my college's Software development club",
    skillsLearnt: ["Angular,", "Tailwind CSS,", "TypeScript"],
  },
  {
    image:
      "https://media.licdn.com/dms/image/C4D0BAQGGhtmFMAuFAA/company-logo_100_100/0/1671520232799?e=1712188800&v=beta&t=IMxTeIH1Npj7Zstiu-Bs25o1jRMckFQGiKHmL67qpqE",
    role: "Frontend Web Developer",
    company: "techFEST SLIET",
    timePeriod: "Jan 2023 - Mar 2023 ",
    descAboutJob: "I am member at my college's Software development club",
    skillsLearnt: ["HTML5,", "CSS,", "React.js,", "GitHub,", "Bootstrap"],
  },
];
