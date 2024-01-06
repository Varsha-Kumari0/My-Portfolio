import React from "react";
import "../Hero/Hero.css";
import "../Skills/Skills.css";
import "../Experience/Experience.css";
import "./Education.css";
import SlietLogo from "../../assets/slietLogo.jpeg";

const Education = () => {
  return (
    <>
      <div className="container">
        <div className="inner-container2">
          <div className="head">
            <h1 className="heading">Education</h1>
            <p className="para">My Education as a B.E. student</p>
          </div>

          <div className="experienceCont">
            {EducationData.map((data) => (
              <div className="exprncboxOuterContRight">
                <div className="bulletContRight"> </div>
                <div className="exprncboxCont">
                  <div className="role">
                    <img src={data.image} alt="" className="CompImage" />
                    <div className="CompData">
                      <h2>{data.college}</h2>
                      <p className="companyName">{data.degree}</p>
                      <p className="timePeriod">{data.timePeriod}</p>
                    </div>
                  </div>
                  <div className="skillsLearnt">
                    <b>Grade: </b>
                    <p>{data.grade}</p>
                  </div>
                  <div className="descOfRole">{data.desc}</div>
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
    image: SlietLogo,
    college: "Sant Longowal Institute of Engineering and Technology",
    degree: "Bachelor of Engineering - BE, Computer Science",
    timePeriod: "Aug 2023 - May 2026",
    desc: "Currently pursuing a Bachelor's degree in Computer Science at Sant Longowal Institute of Engineering and Technology, Punjab. Focused on mastering Data Structures and Algorithms using C++ as part of the curriculum. Embracing a dynamic learning environment to cultivate strong problem-solving skills and software development expertise. Excited about the opportunities to apply theoretical knowledge to real-world scenarios.",
  },
  {
    image: SlietLogo,
    college: "Sant Longowal Institute of Engineering and Technology",
    degree: "Diploma, Computer Science",
    timePeriod: "Aug 2020 - May 2023",
    grade: "9.2 CGPA",
    desc: "I completed a Diploma in Computer Science at Sant Longowal Institute of Engineering and Technology, Punjab, with an impressive CGPA of 9.2. During this program, I gained a strong understanding of fundamental computer science concepts, setting the stage for further studies toward my Bachelor's degree.",
  },
];
