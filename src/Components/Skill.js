import React from "react";

export default function Skill({ name, proficiency, id }) {
  return (
    <div className={Skill}>
      <div className="skill-content" id={id}>
        <div className="skill">
            <p>{name}</p>
        </div>

        <div className="proficiency">
            
            <p>{proficiency}</p>
        </div>

      </div>
    </div>
  );
}
