import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Tile from "./Components/Tile";
import Skill from "./Components/Skill";
import Robot from "./Components/Robot";
import Tek from "./Components/Tek";
import Cibus from "./Components/Cibus";


import Elin from "./Components/Elin";

import profilepicture from "./images/profilepicture.jpg"
import FacebookPicture from "./images/FacebookColor.png"
import GitlabPicture from "./images/GitlabColor.png"
import InstagramPicture from "./images/InstagramColor.png"
import LinkedinPicture from "./images/LinkedinColor.png"
import EmailPicture from "./images/EmailColor.png"
import LocationPicture from "./images/LocationColor.png"
//import bear from "./images/coffebear.jpg"


import ImageFadeIn from "react-image-fade-in";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <Section
          title="Profile"
          subtitle={
            <div className ="Profile">
              <div className ="About">
                <h3>About</h3>
                <p>
                  I am a goal-oriented and social person who is driven by challenges. 
                  By combining my career in the Swedish Armed Forces, as a squad leader at K3, with studies in computer science
                  at Linköping University, I have developed a great interest in programming and at the same time strengthened my
                  leadership and teamwork skills</p>
              </div>

              <div className ="Picture">
                <ImageFadeIn src={profilepicture} alt='pp' opacityTransition="3"/>
              </div>

              <div className ="Details">
                <h3>Details</h3>
                <h4>Name:</h4>
                <p>Björn Modée</p>
                <h4>Age:</h4>
                <p>26 years old</p>

                <h4>Location:</h4>
                <p>
                  <a href="https://goo.gl/maps/AUoQmGcehUtfftFm8">
                <img src={LocationPicture} alt='lp' width="30" height="30"/>
                  </a>
                Linköping, Sweden, Earth</p>
              </div>
            </div>
          }
          dark={true}
          id="section1" 
        />

        <Section
          title="Experience"
          dark={false}
          id="section2"
          subtitle={
            <div>
              <div>
                <h2>Education</h2>
                <hr width="100%"/>
              </div>
              <div className="education">
                <Tile
                title="M.Sc. Computer science and Engineering"
                place="Linköping University"
                date="Aug 2016 - Current"
                location="Linköping"
                locationlink="https://goo.gl/maps/jKNqbAFeADAvMXfWA"
                description="I am currently studying at Linköping University which provides challenging 
                problems that needs to be solved with hard work and collaboration"
                id="Tile1"
                />
                 <Tile
                title="Gymnasium"
                place="Hersby"
                date="Aug 2011 - May 2014"
                location="Stockholm"
                description="Natural science program."
                id="Tile2"
                />
                 <Tile
                title="High School"
                place="Tamalpais"
                date="Aug 2010 - May 2011"
                location="San Francisco"
                description="I spent one year in Highschool in United States of America. This was an amazing experience and it widened my field of view of life"
                id="Tile3"
                />
              </div>
              <div>
                <h2>Career</h2>
                <hr width="100%"/>
              </div>
              <div className="career">
              <Tile
                title="Försvarsmakten"
                place="K3, Karlsborg"
                date="Aug 2014 - Current"
                location="Karlsborg"
                description="I joined the Swedish Army Rangers after my gymnasium education. My role as a squad leader
                taught me to make decisions in a stressful environment and that to succeed one must work
                well in a team."
                id="Tile4"
                />
                <Tile
                title="Head IT-educator"
                place="CGI"
                date="June 2011 - May 2020"
                location="Stockholm"
                description="I started working for CGI’s summer school “Young Generation” as a teacher when I got back
                from a year abroad in USA. I then got promoted to Head IT-Educator in 2017. We taught kids
                in the age of 9-14 different computer skills. Microsoft Word for the youngest and
                programming for the oldest"
                id="Tile5"
                />
               </div>
             </div>

          }
        />
        
        <Section
          title="Projects"
          dark={true}
          id="section3"
          subtitle={<div>
            <div>
              <h2>Autonomus robot</h2>
              <hr width="100%"/>
              <Robot/>
            </div>
            <div>
              <h2>Cibus</h2>
              <hr width="100%"/>
              <Cibus/>
            </div>
            <div>
              <h2>Teknikåttan</h2>
              <hr width="100%"/>
              <Tek/>
            </div>
            </div>}
          />

        <Section
          title="Inspiration"
          dark={false}
          id="section4"
          subtitle={<div>
            <div>
              <h2>Elin Bäcklund</h2>
              <hr width="100%"/>
              <Elin/>
            </div>
            </div>}
          />

        <Section
          title="Abilities"
          dark={true}
          id="section5"
          subtitle={
            <div className ="skills">
              <div className="quote"> 
                  <p>“I am still learning.” — Michelangelo</p>
              </div>
              
              <h2>Skills</h2>
              <hr width="100%"/>
                <div className ="skill-content-app">
                <div className ="">
                  <div>
                    <Skill
                    name="React"
                    proficiency="7"
                    />
                    <Skill
                    name="Redux"
                    proficiency="7"
                    />
                    <Skill
                    name="Java"
                    proficiency="6"
                    />
                    <Skill
                    name="HTML"
                    proficiency="7"
                    />
                     <Skill
                    name="CSS"
                    proficiency="7"
                    />
                     <Skill
                    name="C++"
                    proficiency="5"
                    />
                    <Skill
                    name="C#"
                    proficiency="2"
                    />
                    <Skill
                    name="C"
                    proficiency="2"
                    />
                     <Skill
                    name="Python"
                    proficiency="6"
                    />
                    <Skill
                    name="SQL"
                    proficiency="6"
                    />
                    <Skill
                    name="Matlab"
                    proficiency="1"
                    />
                   
                      
                      </div>
                  </div>
                </div>

                <h2>Soft Skills</h2>
              <hr width="100%"/>
                <div className ="skill-content-app">
                  <div className ="">
                    <div>
                    <Skill
                    name="Teamwork"
                    proficiency="10"
                    />
                    <Skill
                    name="Leadership"
                    proficiency="8"
                    />
                     <Skill
                    name="Speech"
                    proficiency="7"
                    />
                     <Skill
                    name="Agile Project management"
                    proficiency="5"
                    />
                    <Skill
                    name="Software Quality Assurance"
                    proficiency="7"
                    />
                     <Skill
                    name="Testing"
                    proficiency="4"
                    />
                     <Skill
                    name="UX-design"
                    proficiency="6"
                    />

                    </div>
                  </div>
                </div>
               
                <div className ="Tools">
                <h2>Tools</h2>
                <hr width="100%"/>
                <div className ="skill-content-app">
                <Skill
                    name="Git"
                    proficiency="8"
                    />
                     <Skill
                    name="Microsoft Office"
                    proficiency="9"
                    />
                     <Skill
                    name="Windows"
                    proficiency="9"
                    />
                    <Skill
                    name="Linux"
                    proficiency="8"
                    />
                    <Skill
                    name="MacOS"
                    proficiency="9"
                    />
                    <Skill
                    name="Atom"
                    proficiency="7"
                    />
                    <Skill
                    name="Visual Studio"
                    proficiency="7"
                    />
                </div>
                </div>

                <div className ="Language">
                <h2>Language</h2>
                <hr width="100%"/>
                <div className ="skill-content-app">
                <Skill
                    name="Swedish"
                    proficiency="10"
                    />
                     <Skill
                    name="English"
                    proficiency="9"
                    />
                     <Skill
                    name="Spanish"
                    proficiency="2"
                    />
                </div>
            </div>
            </div>
            
          }
        />

        <Section
          title="Contact"
          dark={false}
          id="section6"
          subtitle={ 
            <div className ="Contact" class="row">
              <hr width="100%"/>
              <div className="contactInfo">
                

              
            
              <div className ="EmailPicture">
                <a href="mailto: bjorn_modee@hotmail.com">
                  <img src={EmailPicture} alt='ep' width="50" height="50"/>
                </a>
              </div>

              <div className ="FacebookPicture">
                <a href="https://www.facebook.com/bjorn.modee.9/">
                  <img src={FacebookPicture} alt='fp' width="50" height="50"/>
                </a>
              </div>
              <div className ="GitlabPicture">
                <a href="https://gitlab.com/bmodee/mywebsite.git">
                  <img src={GitlabPicture} alt='gp' width="50" height="50"/>
                </a>
              </div>
              <div className ="InstagramPicture">
                <a href="https://www.instagram.com/bmodee/">
                  <img src={InstagramPicture} alt='ip' width="50" height="50"/>
                </a>
              </div>
              <div className ="LinkedinPicture">
                <a href="https://www.linkedin.com/in/bj%C3%B6rn-mod%C3%A9e-1167a593/">
                  <img src={LinkedinPicture} alt='lp' width="50" height="50"/>
                </a>
              </div>
             
              
              </div>
              <div className="InteractiveResume">
                <p>This interactive resume was built by me in React</p>
              </div>
          </div>
          
          }
        />
      </div>
    );
  }
}

// <Button onPress={() => Linking.openURL('mailto:support@example.com') }
// title="support@example.com" />

export default App;
