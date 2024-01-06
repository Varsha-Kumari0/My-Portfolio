import React from "react";
import "./SkillsCard.css";

const SkillsCard = (props) => {
  return (
    <>
      <div className="boxCont">
        <h2 className="skillName"> {props.skillTitle} </h2>

        <div className="allSkills">
          {props.skills.map((data, index) => (
            <div key={index} className="smallCont">
              <img src={data.image} alt="" className="skillImg" />
              <p>{data.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillsCard;
