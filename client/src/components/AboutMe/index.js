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
              Passionate and dedicated Early Childhood Educator with over two years of
              experience in creating a nurturing and stimulating environment for
              young learners. Committed to promoting holistic development and
              providing a solid foundation for future success. Seeking to
              contribute my skills and enthusiasm to a progressive educational
              institution. <br></br> <br></br>
              As a dedicated Early Childhood Educator, my mission is to create a
              nurturing and inclusive environment where every child feels
              valued, supported, and empowered to explore their unique
              potential. I am committed to fostering a love of learning through
              creative and developmentally appropriate practices, while
              advocating for the safety, well-being, and holistic growth of each
              child in my care. By partnering with families and communities, I
              strive to lay a strong foundation for lifelong learning and
              success.
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
        <div
          className="col-12"
          id="open-aboutme"
          ref="open-aboutme"
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
            <li>Currently performing Director approved ECE role</li>
            <li>Diploma in Early Childcare Assistant, GPA 4.5</li>
            <li>
              Experience in working in preschool and toddler childcare settings
            </li>
            <li>Experience working in multicultural environments</li>
            <li>Effective communicator - verbal, written, and electronic</li>
            <li>Good team player with analytical and communication skills</li>
            <li>Adaptive and agile to changing environment</li>
            <li>Natural leader, problem solver, and excellent organizer</li>
            <li>
              Computer Skills: Proficient in Microsoft Office suite of products
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
