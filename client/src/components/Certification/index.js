import React, { Component } from "react";
import AOS from "aos";
import $ from "jquery";
import certification from "../../utils/certification.json";

export default class index extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // or simply just AOS.init();
    AOS.init({
      // initialise with other settings
      duration: 2000,
    });
  }

  render() {
    return (
      <div data-aos="fade-up" data-aos-duration="2000">
        {certification.map((eduItem, index) => {
          return (
            <div key={index}>
              <div className="col-12 flex btn-bootcamp py-2  education-field">
                <div>
                  <span className="badge-lg badge-info p-1 my-auto">
                    {eduItem.eduPeriod}
                  </span>
                  <span className="lead mx-2 mobile-edu-container">
                    {eduItem.eduTitle}
                  </span>
                </div>
              </div>
            </div>
          );
        })}{" "}
      </div>
    );
  }
}
