import React, { Component } from "react";
import AOS from "aos";
import $ from "jquery";
import skills from "../../utils/skills.json";
import {
  faLaptopCode,
  faPeopleCarry,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class index extends Component {
  constructor(props) {
    super(props);
    this._toggleDiv = this._toggleDiv.bind(this);
  }

  _toggleDiv = (skillClass) => {
    $(this.refs[`open${skillClass}`]).slideToggle();
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
      <div className="row col-12">
        {skills.map((skill) => {
          {
            return (
              <div
                className="col-md text-center my-2"
                data-aos={skill.fadeDirection}
                data-aos-duration="2000"
                key={skill.id}
              >
                <span>
                  <FontAwesomeIcon
                    icon={
                      (skill.skillIcon === "faLaptopCode"
                        ? faLaptopCode
                        : (skill.skillIcon === "faBriefcase"
                            ? faBriefcase
                            : faPeopleCarry))
                    }
                    className={`display-1 ${skill.skillFontColor}`}
                  />
                </span>
                <br /> <br />
                <div className="text-dark">
                  <div className={`col-12 btn-${skill.skillClass} `}>
                    <span className={`font-gugi lead ${skill.skillFontColor} `}>
                      {skill.skillName}
                      <span
                        onClick={(event) => this._toggleDiv(skill.skillClass)}
                        value={skill.skillClass}
                        className="btn btn-success "
                      >
                        +
                      </span>
                    </span>
                  </div>
                </div>
                <span />
                <br />
                <div
                  className="col-12"
                  id={`open${skill.skillClass}`}
                  style={{ display: "none" }}
                  ref={`open${skill.skillClass}`}
                >
                  <ul className="list-skills text-dark">
                    {skill.skillList.map((skillItem) => {
                      return <li key={skillItem}>{skillItem}</li>;
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
