import React, { Component } from "react";

import "react-vertical-timeline-component/style.min.css";


class Experience extends Component {
  render() {
    return (
        <section id="resume" className="pb-5">
          <div className="col-md-12 mx-auto">
            <div className="col-md-12">
              <h1 className="section-title" style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                 <a href='/resume.pdf' className="section-title" style={{ color: "red"}} download>Check out my Resume!</a>
              </span>
              </h1>
            </div >
          </div>

        </section>
    );
  }
}

export default Experience;
