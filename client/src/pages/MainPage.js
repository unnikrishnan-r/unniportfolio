import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import TopBar from "../components/TopBar"
class MainPage extends Component {


  render() {
    return (
      <>
        <TopBar  />
      </>
    );
  }
}

export default withRouter(MainPage);
