import React from "react";

function SkillCard(props) {
  return (
    <div className="skill-card">
      <div className="myCard">
        <div className="innerCard">
          <div className="frontSide">
            <img src={props.img} alt="skillImg" className="skill-img" />
          </div>

          <div className="backSide">
            <a
              href={props.link}
              className="skill-names"
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.skill}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SkillCard;
