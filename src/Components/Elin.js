import React from "react";
import elinpic from "../images/elin.jpeg";
import ImageFadeIn from "react-image-fade-in";
import LinkedinPicture from "../images/LinkedinColor.png"



export default function Elin() {
  return (
    <div className="project-content">
        <div className ="elinpic">
          <ImageFadeIn src={elinpic} alt='rp' opacityTransition="3"/>
        </div>
        <div className ="projectdescrition">
          <p1>
          I am truly blessed to have Elin as my Mentor and friend. After graduating her M.Sc. program in Applied Physics she took the tech industry with storm
          as she became the IT-girl of the year in 2016, got written about in Forbes magazine and became Senior Full Stack Engineer & Motherbrain Lead at EQT.
          This incredible feat combined with her great kindness and decisiveness makes her an amazing mentor who I can ask about everything from code related 
          problems to career decisions
          </p1>
          <h3>Links</h3>
          <div className="links1">
          <div className ="LinkedinPicture">
                <a href="https://www.linkedin.com/in/backlnd/">
                  <img src={LinkedinPicture} alt='lp' width="50" height="50"/>
                </a>
              </div>
              </div>
        </div>
        
    </div>
  );
}
