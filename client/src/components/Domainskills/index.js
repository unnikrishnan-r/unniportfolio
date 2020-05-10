import React, { Component, Children, PropTypes } from "react";
import AOS from "aos";
import { faLaptopCode, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from "jquery";

export default class index extends Component {
  constructor(props) {
    super(props);
    this._toggleDiv = this._toggleDiv.bind(this);
  }

  _toggleDiv() {
    $(this.refs["open-domainskills"]).slideToggle();
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
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <span>
          <FontAwesomeIcon
            icon={faBriefcase}
            className="display-1 text-primary"
          />
        </span>
        <br /> <br />
        <div className="text-dark">
          <div className="col-12 btn-domainskills ">
            <span className="font-gugi lead text-warning">
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
          id="open-domainskills"
          style={{ display: "none" }}
          ref="open-domainskills"
        >
          <ul className="list-skills text-dark">
            <li>Retail</li>
            <li>Supply Chain</li>
            <li>Master Data Management</li>
            <li>Data Analytics</li>
            <li>Order Management</li>
            <li>Forecasting and Replenishment</li>
            <li>Warehouse Operations</li>
          </ul>
        </div>
      </div>
    );
  }
}
