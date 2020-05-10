import React, { Component, Children, PropTypes } from "react";
import AOS from "aos";
import { faLaptopCode, faBriefcase ,faPeopleCarry} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from "jquery";

export default class index extends Component {
  constructor(props) {
    super(props);
    this._toggleDiv = this._toggleDiv.bind(this);
  }

  _toggleDiv() {
    $(this.refs["open-softskills"]).slideToggle();
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
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        <span>
          <FontAwesomeIcon
            icon={faPeopleCarry}
            className="display-1 text-danger"
          />
        </span>
        <br /> <br />
        <div className="text-dark">
          <div className="col-12 btn-domainskills ">
            <span className="font-gugi lead text-danger">
              Domain Skills
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
          id="open-softskills"
          style={{ display: "none" }}
          ref="open-softskills"
        >
          <ul className="list-skills text-dark">
            <li>Adaptive</li>
            <li>Effective Communicator</li>
            <li>Mentor</li>
            <li>Self Learner</li>
            <li>Team Player</li>
            <li>Active Listener</li>
            <li>Goal Focused</li>
            <li>Problem Solver</li>
          </ul>
        </div>
      </div>
    );
  }
}
