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
          We developed a website for sharing recepies online for the "Advanced webprogramming" course. 
          We decided to create the website with React + Redux for the frontend. For the backend we used Flask with a database in SQL.
          We also used Facebook API to handle the login functionality.
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
