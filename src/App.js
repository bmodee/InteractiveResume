import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import dummyText from "./DummyText";
import profilepicture from "./images/profilepicture.jpg"
import FacebookPicture from "./images/FacebookColor.png"
import GitlabPicture from "./images/GitlabColor.png"
import InstagramPicture from "./images/InstagramColor.png"
import { Link } from "react-router-dom";
import Tile from "./Components/Tile";

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
                <p>Jag är en målinriktad och social person som drivs av utmaningar. 
                  Genom att kombinera min karriär inom Försvarsmakten, som gruppchef 
                  för jägarsoldater på K3, med studier inom datateknik på Linköpings 
                  universitet har jag utvecklat ett stort intresse för programmering 
                  och samtidigt stärkt mina ledarskap- och samarbetsförmågor</p>
              </div>

              <div className ="Picture">
                <img src={profilepicture} alt='pp'/>
              </div>

              <div className ="Details">
                <h3>Details</h3>
                <p>Name: Björn Modée</p>
                <p>Age: 26</p>
                <p>Location: Linköping, Sweden</p>
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
              </div>
              <div>
                <Tile
                title="M.Sc. Computer science and Engineering"
                place="Linköping University"
                date="Aug 2016 - Current"
                location="Linköping"
                description="description"
                id="Tile1"
                />
              </div>
              <div>
                <h2>Career</h2>
              </div>
              <Tile
                title="Försvarsmakten"
                place="K3"
                date="Aug 2014 - Current"
                location="Karlsborg"
                description="description"
                id="Tile2"
                />
             </div>

          }
         
        />
        
        <Section
          title="Abilities"
          dark={true}
          id="section3"
          subtitle={
            <div className ="">
                <div className ="Skills">
                <p>Skills</p>
                </div>
               
                <div className ="Tools">
                <p>Tools</p>
                </div>

                <div className ="Language">
                <p>Language</p>
                </div>
            </div>
          }
        />
        <Section
          title="Contact"
          subtitle={ 
            <div className ="Contact" class="row">
              <div className="contactInfo">
                  <p>Tel: +46 727178888</p>
                  <p>Email: bjorn_modee@example.se</p>
              </div>
            
              <div className ="FacebookPicture">
               
                <img src={FacebookPicture} alt='fp'/>
                
              </div>
              <div className ="GitlabPicture">
                <img src={GitlabPicture} alt='gp'/>
              </div>
              <div className ="InstagramPicture">
                <img src={InstagramPicture} alt='ip'/>
              </div>
          </div>
          }
          dark={false}
          id="section4"
        />
        
      </div>
    );
  }
}

export default App;
