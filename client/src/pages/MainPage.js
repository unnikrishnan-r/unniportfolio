import React, { Component } from "react";
import { withRouter } from "../utils/withRouterHOC";
import "./style.css";

import TopBar from "../components/TopBar";
import Skills from "../components/Skills";
import SectionTitle from "../components/SectionTitle";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Education from "../components/Education";

class MainPage extends Component {
  render() {
    return (
      <>
        <TopBar />
        <div className="container-fluid col-md-9 col-11 px-0">
          <Skills></Skills>
        </div>
        <br />
        <div className="container-fluid col-md-9 col-11 px-0">
          <SectionTitle
            sectionName="A B O U T M E"
            fontColor="text-danger"
          ></SectionTitle>
          <AboutMe></AboutMe>
        </div>
        <br />

        <div className="container-fluid col-md-9 col-11 px-0">
          <SectionTitle
            sectionName="E X P E R I E N C E"
            fontColor="text-primary"
          ></SectionTitle>
          <Experience></Experience>
        </div>
        <br />

        <div className="container-fluid col-md-9 col-11 px-0">
          <SectionTitle
            sectionName="E D U C A T I O N & C E R T I F I C A T I O N S"
            fontColor="text-success"
          ></SectionTitle>
          <Education></Education>
        </div>
        <br />
      </>
    );
  }
}

export default MainPage;
