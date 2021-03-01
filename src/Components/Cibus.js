import React from "react";
import reactpic from "../images/bowl.gif";
import ImageFadeIn from "react-image-fade-in";
import GitlabPicture from "../images/GitlabColor.png"
import YoutubePicture from "../images/yt.png"



export default function Project({projectdescription, links, image}) {
  return (
    <div className="project-content">
        <div className ="reactpic">
          <ImageFadeIn src={reactpic} alt='rp' opacityTransition="3"/>
        </div>
        <div className ="projectdescrition">
          <h3>Description</h3>
          <p1>
          We developed a website for sharing recepies online for the "Advanced webprogramming" course. 
          We decided to create the website with React + Redux for the frontend. For the backend we used Flask with a database in SQL.
          We also used Facebook API to handle the login functionality.
          </p1>
          <h3>Links</h3>
          <div className="links1">
          <div className ="GitlabPicture">
                    <a href="https://gitlab.liu.se/bjomo323/TDDD27_2020_Cibus">
                      <img src={GitlabPicture} alt='gp' width="50" height="50"/>
                    </a>
              </div>
              <div className ="GitlabPicture">
                    <a href="https://www.youtube.com/watch?v=nze3XMeDn4A">
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
