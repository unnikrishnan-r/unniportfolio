import React, { Component } from "react";
import AOS from "aos";
import $ from "jquery";

export default class index extends Component {
  constructor(props) {
    super(props);
    this._toggleDiv = this._toggleDiv.bind(this);
  }

  _toggleDiv = () => {
    $(this.refs["open-aboutme"]).slideToggle();
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
        <div className="col-12 flex btn-aboutme py-3  education-field">
          <div>
            <span className="lead mx-2 mobile-edu-container">
              Technical Project Manager with over 13 years of diverse global
              experience as a Project manager, Business analyst, Full Stack Web
              developer and Mainframe solution architect, paired with a strong
              educational background and drive for continuous learning. Skilled
              in working with virtual teams for end to end execution of
              large-scale programs. Exude superb communication and
              organizational skills, an asset to any organization. Strong,
              trusted team player with excellent analytical skills.
            </span>
          </div>
          <div>
            <span
              onClick={(event) => this._toggleDiv()}
              className="btn btn-danger "
            >
              +
            </span>
          </div>
        </div>
        <div className="col-12" id="open-aboutme" ref="open-aboutme" style={{ display: "none" }}>
          <ul
            className="list-skills text-dark"
            style={
              ({ fontWeight: "200" },
              { textAlign: "left" },
              { fontSize: "1.1rem" })
            }
          >
            <li>
              <a href="https://bcert.me/bc/html/show-badge.html?b=hefndbsi">
                Certified Scrum Master
              </a>
            </li>
            <li>
              Currently executing a multi year, multi million dollar Digital
              Modernization initiative, transforming legacy applications/data
              out of Retailer's legacy platform and aiming to reduce TCO by $12
              million
            </li>
            <li>
              Designed and implemented a solution via EDI to provide visibility
              of DSD purchase order fulfillment and out of stocks in Store
              Replenishment System, reducing lost sales by $2.8 million annually
            </li>
            <li>
              Manage an annual budget of $2.5 million in Legacy Development
              Center portfolio; geographically dispersed team of 35 members
            </li>
            <li>Self upgraded technical skills as Full Stack Developer</li>
            <li>
              Core Competency in Mainframe Technologies, also well versed with
              Integration technologies like TIBCO
            </li>
            <li>
              Strong leadership and interpersonal skills. Effectively mentored
              many team members
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
