import React from "react";
import "./Hero.css";
import DummyImage from "../../assets/image.jpeg";
// import Gif from "../../assets/home.gif";

const Hero = () => {
  return (
    <>
      <div className="container">
        {/* <img src={Gif} alt="" /> */}

        <div className="inner-container">
          <div className="intro">
            <h2 className="name">Hi, I am Varsha Kumari</h2>
            <h2 className="name2">
              I am a <span className="spanColor">Frontend Developer</span>
            </h2>
            <p className="para">
              Hello! 👋 I'm a passionate 2nd-year Computer Science student. I
              craft engaging and user-friendly websites, bringing ideas to life
              through code. Currently delving into the world of Frontend
              Development, I aspire to evolve into a Full Stack Developer.
            </p>
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
