import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import TopBar from "../components/TopBar";
import Techskills from "../components/Techskills";
import Domainskills from "../components/Domainskills";
import Softskills from "../components/Softskills"
class MainPage extends Component {
  render() {
    return (
      <>
        <TopBar />
        <div class="row col-12">
          <Techskills></Techskills>
          <Domainskills></Domainskills>
          <Softskills></Softskills>
        </div>
      </>
    );
  }
}

export default withRouter(MainPage);
