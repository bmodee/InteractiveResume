import React from "react";
import robotpic from "../images/robot.jpg";
import ImageFadeIn from "react-image-fade-in";


export default function Project({projectdescription, links, image}) {
  return (
    <div className="project-content">
        <div className ="robotpic">
          <ImageFadeIn src={robotpic} alt='rp' opacityTransition="3"/>
        </div>
        <div className ="projectdescrition">
          <h3>Description</h3>
          <p1>{projectdescription}</p1>
          <h3>Links</h3>
          <p1>{links}</p1>
        </div>
        
        <div className ="links">
        </div>
    </div>
  );
}
