import React from "react";
import tekpic from "../images/teknikattan.jpg";
import ImageFadeIn from "react-image-fade-in";


export default function Tek({projectdescription, links, image}) {
  return (
    <div className="project-content">
        <div className ="tekpic">
          <ImageFadeIn src={tekpic} alt='rp' opacityTransition="3"/>
        </div>
        <div className ="projectdescrition">
          <h3>Description</h3>
          <p1>This is my Bachelor project. My team and I designed and created a system based on the customers damands. 
            This project is the largest, and the most fun, I have done to date. To work in a larger group, 
            meeting with customer, coding and working with Scrum was an amazing experience were I learned a lot.</p1>
        
        </div>
        
        <div className ="links">
        </div>
    </div>
  );
}
