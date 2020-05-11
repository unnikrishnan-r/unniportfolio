import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import TopBar from "../components/TopBar";
import "./style.css"

class ProjectsPage extends Component {
  render() {
    return (
      <>
        <TopBar />
        <br />
      </>
    );
  }
}

export default withRouter(ProjectsPage);
