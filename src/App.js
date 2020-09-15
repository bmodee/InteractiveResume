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

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />


        <Section
          title="Profile"
          subtitle={
            <div className ="Picture">
              <img src={profilepicture} alt='pp'/>
            </div>
          }
          dark={true}
          id="section1"
          
        />

      


        <Section
          title="Experience"
          subtitle={dummyText}
          dark={false}
          id="section2"
        />
        
        <Section
          title="Education"
          subtitle={dummyText}
          dark={true}
          id="section3"
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
