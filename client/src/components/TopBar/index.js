import React, { Component } from "react";
import AOS from "aos";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        className="header pt-2"
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        <div className="container-justify btns">
          <div className="header-btn">
            <a href="/" className="link-block">
              <button>Home</button>
            </a>
            <a href="/api/projects" className="link-block">
              <button>Projects</button>
            </a>
          </div>
          <div className="my-auto contact">
            <a
              className="mx-2 text-white"
              href="mailto:unnipbvr@gmail.com"
              target="_blank"
            >
              unnipbvr@gmail.com
            </a>
            <span className="mx-2 text-white">+1 210-616-1664</span>
          </div>
        </div>

        <div className="row col-md-12">
          <div
            className="jumbotron pb-1 text-center col-md-12"
            style={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <div
              className="text-center head-prime text-white"
              style={{ fontFamily: "Cardo" }}
            >
              <h1>
                <span>UNNIKRISHNAN RAMACHANDRAN</span>
              </h1>
            </div>
            <p
              className="text-center text-black"
              style={{ fontFamily: "Merriweather,Regular Italic" }}
            >
              MERN Stack | JavaScript | MAINFRAMES | Project Management | Agile
              Practicioner | Scrum Master | Retail | Supply Chain
            </p>
            <hr className="bg-white w-25" />
            <div className="col-12 text-center" style={{ margin: "0 auto" }}>
              <span className="m-2">
                <a
                  href="https://www.linkedin.com/in/unnikrishnan-ramachandran/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin text-white display-4 social"></i>
                </a>
              </span>
              <span className="m-2">
                <a href="https://github.com/unnikrishnan-r" target="_blank">
                  <i className="fab fa-github text-white display-4 social"></i>
                </a>
              </span>
              <span className="m-2">
                <a
                  href="https://drive.google.com/file/d/1BQPq_zmIX0MGWE3AUA-qOu5hwu4aemlq/view?usp=sharing"
                  target="_blank"
                  download
                >
                  {/* <i className="fas fa-file-download text-white display-4 social"></i> */}
                  <FontAwesomeIcon
                    icon={faFileDownload}
                    className="fas fa-file-download text-white display-4 social"
                  />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
