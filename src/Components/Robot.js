import React from "react";
import robotpic from "../images/robot1.jpg";
import ImageFadeIn from "react-image-fade-in";
import GitlabPicture from "../images/GitlabColor.png"
import YoutubePicture from "../images/yt.png"

export default function Project({projectdescription, links, image}) {
  return (
    <div className="project-content">
        <div className ="robotpic">
          <ImageFadeIn src={robotpic} alt='rp' opacityTransition="3"/>
        </div>
        <div className ="projectdescrition">
          <h3>Description</h3>
          <p1>During a project at Linköping University we were tasked with building an Autonomus robot. The robot were to navigate autonomusly, retrive a small 
            object in a maze and find its way back.
          </p1>
          <h3>Links</h3>
            <div className="links1">
              <div className ="GitlabPicture">
                    <a href="https://gitlab.ida.liu.se/bjomo323/TSEA29">
                      <img src={GitlabPicture} alt='gp' width="50" height="50"/>
                    </a>
              </div>
              <div className ="GitlabPicture">
                    <a href="https://www.youtube.com/watch?v=7J20kR-iKdQ">
                      <img src={YoutubePicture} alt='gp' width="50" height="50"/>
                    </a>
              </div>
            </div>
        </div>
        
        <div className ="links">
        </div>
    </div>
  );
}
