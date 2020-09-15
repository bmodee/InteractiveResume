import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import dummyText from "./DummyText";
//import profilepicture from ./images/profilepicture.jpg
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Section
          title="Profile"
          subtitle={dummyText}
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
          subtitle={dummyText}
          dark={false}
          id="section4"
        />
        
      </div>
    );
  }
}

export default App;
