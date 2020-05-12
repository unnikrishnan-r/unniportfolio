import React, { Component } from "react";
import AOS from "aos";

export default class index extends Component {
  
  componentDidMount() {
    // or simply just AOS.init();
    AOS.init({
      // initialise with other settings
      duration: 2000,
    });
  }
  render() {
    return (
      <div
        className="container-fluid col-md-9 col-11 px-0"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div>
          <h2 className={`font-gugi text-center ${this.props.fontColor}`}>{this.props.sectionName}</h2>
        </div>
        <hr className="bg-success w-75 text-center"/>

      </div>
    );
  }
}
