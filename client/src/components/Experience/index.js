import React, { Component } from "react";
import AOS from "aos";
import $ from "jquery";
import experience from "../../utils/experience.json";

export default class index extends Component {
  constructor(props) {
    super(props);
    this._toggleDiv = this._toggleDiv.bind(this);
  }

  _toggleDiv = (id) => {
    console.log("Got Clicked", id);
    $(this.refs[`open-experience${id}`]).slideToggle();
  };

  componentDidMount() {
    // or simply just AOS.init();
    AOS.init({
      // initialise with other settings
      duration: 2000,
    });
  }

  render() {
    return (
      <div>
        {experience.map((exp, index) => {
          {
            return (
              <div key={index}>
                <div className="col-12 flex btn-experience1 py-3  education-field">
                  <div>
                    <span className="badge-lg badge-primary p-1 my-auto">
                      {exp.experiencePeriod}{" "}
                    </span>
                    <span className="font-weight-bold lead mx-2 mobile-edu-container">
                      {exp.experienceTitle}
                    </span>
                    <div className="p-2">
                      <i>{exp.experienceLocation}</i>
                    </div>
                  </div>
                  <div>
                    <span
                      onClick={(event) => this._toggleDiv(exp.id)}
                      className="btn btn-primary "
                    >
                      +
                    </span>
                  </div>
                </div>
                <div
                  className="col-12"
                  id="open-experience1"
                  ref={`open-experience${exp.id}`}
                  style={{ display: "none" }}
                >
                  <ul
                    className="list-skills text-dark"
                    style={{
                      fontWeight: "200",
                      textAlign: "left",
                      fontSize: "1.1rem",
                    }}
                  >
                    {exp.highlights.map((item, index1) => {
                      return <li key={index1}>{item}</li>;
                    })}
                  </ul>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  }
}
