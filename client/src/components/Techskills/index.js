import React, { Component, Children, PropTypes } from "react";
import AOS from "aos";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from "jquery";

export default class index extends Component {
  constructor(props) {
    super(props);
    this._toggleDiv = this._toggleDiv.bind(this);
  }

  _toggleDiv() {
    $(this.refs["open-techskills"]).slideToggle();
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
      <div
        className="col-md text-center my-2"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <span>
          <FontAwesomeIcon
            icon={faLaptopCode}
            className="display-1 text-warning"
          />
        </span>
        <br /> <br />
        <div className="text-dark">
          <div className="col-12 btn-techskills ">
            <span className="font-gugi lead text-warning">
              Technology Skills
              <span onClick={this._toggleDiv} className="btn btn-success ">
                +
              </span>
            </span>
          </div>
        </div>
        <span />
        <br />
        <div
          className="col-12"
          id="open-techskills"
          style={{ display: "none" }}
          ref="open-techskills"
        >
          <ul className="list-skills text-dark">
            <li>HTML5, CSS3, Bootstrap</li>
            <li>JavaScript, jQuery</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>React.js</li>
            <li>MongoDb,MySQL, Oracle, DB2</li>
            <li>Mainframes</li>
            <li>TIBCO</li>
          </ul>
        </div>
      </div>
    );
  }
}
