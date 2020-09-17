import React from "react";
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

export default function Skill({ name, proficiency, id }) {
  return (
    <div className={Skill}>
      <div className="skill-content" id={id}>
        <div className="skill">
            <p>{name}</p>
        </div>

        <div className="proficiency">
           <Rater rating={proficiency} total={10} interactive={false} />

        </div>

      </div>
    </div>
  );
}
