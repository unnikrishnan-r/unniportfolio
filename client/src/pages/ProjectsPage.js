import React, { Component } from "react";
import { withRouter } from "../utils/withRouterHOC";

import TopBar from "../components/TopBar";
import SectionTitle from "../components/SectionTitle";
import Projects from "../components/Projects";

import "./style.css";

class ProjectsPage extends Component {
  render() {
    return (
      <>
        <TopBar />
        <br />
        <div className="container-fluid col-md-9 col-11 px-0">
          <SectionTitle sectionName="P R O J E C TS"></SectionTitle>
          <Projects></Projects>
        </div>
        <br />
      </>
    );
  }
}

export default ProjectsPage;
