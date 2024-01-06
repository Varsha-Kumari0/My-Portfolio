import React from "react";
import "./Hero.css";
import DummyImage from "../../assets/nun.jpg";

const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="inner-container">
          <div className="intro">
            <h2 className="name">Hi, I am Varsha Kumari</h2>
            <h2 className="name2">
              I am a <span className="spanColor">frontend developer</span>
            </h2>
            <p className="para">
              Hello! 👋 I'm Varsha Kumari, a passionate 2nd-year Computer
              Science student. I craft engaging and user-friendly websites,
              bringing ideas to life through code. Currently delving into the
              world of Frontend Development, I aspire to evolve into a Full
              Stack Developer.
            </p>
            <div className="techSection">
              <div className="eachSection">
                <h3>💻 Tech Enthusiast : </h3>
                <p>
                  Proficient in Frontend technologies; eager to explore the
                  entire tech stack.
                </p>
              </div>
              <div className="eachSection">
                <h3>🚀 Learning Journey : </h3>
                <p>
                  Mastering Data Structures and Algorithms in C++ to build a
                  solid foundation.
                </p>
              </div>
            </div>
            <button className="resumeBtn">Check Resume</button>
          </div>
          <div className="photo">
            <img src={DummyImage} alt="myself" className="image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
