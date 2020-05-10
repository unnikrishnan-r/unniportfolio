import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import TopBar from "../components/TopBar";
import Skills from "../components/Skills";
import SectionTitle from "../components/SectionTitle";
import AboutMe from "../components/AboutMe";

class MainPage extends Component {
  render() {
    return (
      <>
        <TopBar />
        <div className="container-fluid col-md-9 col-11 px-0">
          <Skills></Skills>
        </div>
        <div className="container-fluid col-md-9 col-11 px-0">
          <SectionTitle
            sectionName="A B O U T M E"
            fontColor="text-danger"
          ></SectionTitle>
          <AboutMe></AboutMe>
        </div>
        <SectionTitle
          sectionName="E X P E R I E N C E"
          fontColor="text-primary"
        ></SectionTitle>
        <SectionTitle
          sectionName="E D U C A T I O N & C E R T I F I C A T I O N S"
          fontColor="text-success"
        ></SectionTitle>
      </>
    );
  }
}

export default withRouter(MainPage);
