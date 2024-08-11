import React, { Component } from "react";
import AOS from "aos";
import API from "../../utils/API";

export default class index extends Component {
  state = {
    projects: [],
  };
  componentDidMount() {
    // or simply just AOS.init();
    AOS.init({
      // initialise with other settings
      duration: 2000,
    });

    this.loadProjects();
  }

  loadProjects = () => {
    API.getProjects()
      .then((res) => this.setState({ projects: res.data }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="row col-12 m-0 p-0">
        {this.state.projects.map((project) => {
          return (
            <div
              className="col-md-4 col-6 p-0"
              data-aos="fade-up"
              data-aos-duration="2000"
              key={project.id}
            >
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-block project"
              >
                <div className="m-2 border project-shadow">
                  <div>
                    <h3 className="font-gugi lead text-center p-2 m-0 bg-gradient text-bold">
                      {project.projectName}
                    </h3>
                  </div>
                  <div>
                    <img
                      src={project.projectImageUrl}
                      className="img-fluid"
                    />
                  </div>
                  <div className="text-center p-md-3 py-3">
                    <p className="small px-3">{project.projectDescription}</p>
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-block-black small"
                    >
                      <button className="btn btn-sm btn-outline-dark my-1 mr-1 p-1 link-block-black">
                        Download Activity Plan
                      </button>
                    </a>

                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}
