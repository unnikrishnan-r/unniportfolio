import React, { Component } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TopBar.css";

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
            <Link to="/">
              <button>Home</button>
            </Link>
            <Link to="/activityplans">
              <button>Activity Plans</button>
            </Link>
          </div>
          <div className="my-auto contact">
            <a
              className="mx-2 text-white"
              href="mailto:sandrasaju2@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              sandrasaju2@gmail.com
            </a>
            <span className="mx-2 text-white">+1 647-865-1664</span>
          </div>
        </div>
        <div class="container">
          <div className="col-md-4 child text-left">
            <img
              className="image img-fluid"
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQMzhFNFo6-w38Rp5dIgDa3LJhYOCYOuT8cbR_nVn1skvc6rTbH"
            ></img>
          </div>
          <div className="col-md-8 child">
            <div
              className="jumbotron pb-1 text-center col-md-12"
              style={{ backgroundColor: "rgba(0,0,0,0)" }}
            >
              <div
                className="text-center head-prime text-white"
                style={{ fontFamily: "Cardo" }}
              >
                <h1>
                  <span>SANDRA LEENA</span>
                </h1>
              </div>
              <p
                className="text-center text-black"
                style={{ fontFamily: "Merriweather,Regular Italic" }}
              >
                Early Childhood Educator | Observant | Nurturing | Empathetic |
                Adaptable
              </p>
              {/* <hr className="bg-blue w-25" /> */}
              <div className="col-2 text-center" style={{ margin: "0 auto" }}>
                <span className="m-2">
                  <a
                    href="https://drive.google.com/file/d/10X5q7VjT2GI7Wh-OnGytJB1hD1LYEW2j/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
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
      </div>
    );
  }
}
