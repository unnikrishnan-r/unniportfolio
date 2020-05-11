import React, { Component } from "react";
import AOS from "aos";
import $ from "jquery";
import education from "../../utils/education.json";

export default class index extends Component {
  constructor(props) {
    super(props);
    this._toggleDiv = this._toggleDiv.bind(this);
  }

  _toggleDiv = (id) => {
    $(this.refs[`open-education${id}`]).slideToggle();
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
      <div data-aos="fade-up" data-aos-duration="2000">
        {education.map((eduItem, index) => {
          return (
            <div key={index}>
              <div className="col-12 flex btn-bootcamp py-3  education-field">
                <div>
                  <span className="badge-lg badge-success p-1 my-auto">
                    {eduItem.eduPeriod}
                  </span>
                  <span className="font-weight-bold lead mx-2 mobile-edu-container">
                    {eduItem.eduTitle}
                  </span>
                  {eduItem.eduSubText ? (
                    <div className="p-2">
                      <i>{eduItem.eduInstitution}</i>
                      <a href={eduItem.eduSubTextUrl}>
                        {eduItem.eduSubText}
                      </a>
                    </div>
                  ) : 
                  <div className="p-2">
                      {/* <i>{eduItem.eduInstitution}</i> */}
                      <a href={eduItem.eduSubTextUrl}>
                        {eduItem.eduInstitution}
                      </a>
                    </div>
                  }
                </div>
                {eduItem.eduDetails ? (
                  <div>
                    <span
                      onClick={(event) => this._toggleDiv(eduItem.id)}
                      className="btn btn-success "
                    >
                      +
                    </span>
                  </div>
                ) : null}
              </div>
              {eduItem.eduDetails ? (
                <div
                  className="col-12"
                  id="open-bootcamp"
                  ref={`open-education${eduItem.id}`}
                  style={{ display: "none" }}
                >
                  What I've Learned -
                  <ul
                    className="list-skills text-dark"
                    style={{
                      fontWeight: "200",
                      textAlign: "left",
                      fontSize: "1.1rem",
                    }}
                  >
                    {eduItem.eduDetails.map((item, index1) => {
                      return <li key={index1}>{item}</li>;
                    })}
                  </ul>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    );
  }
}
