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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
              dolores atque et quidem ipsa cum ipsam natus reprehenderit,
              numquam nisi aliquam? Aut voluptatem magni similique! Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Mollitia quae esse
              necessitatibus. Iure quam quasi blanditiis distinctio voluptates,
              molestias exercitationem beatae illo magnam quis, voluptatibus,
              deleniti provident! Sequi soluta error reprehenderit neque nisi
              excepturi eius.
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
