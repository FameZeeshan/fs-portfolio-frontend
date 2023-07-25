import React from "react";
import "./style.css";
import accordion from "../images/accordion.png";
import demo1 from "../images/demo1.png";
import formvalidation from "../images/form-validation.png";
export default function Project() {
  return (
    <div className="project">
      <div className="project-container m-3">
        <h1>Project</h1>
        <p>Check out some of my work right here:</p>

        <div className="logo-container">
          <div className="logo-img-container">
            <img src={accordion} alt="html-logo" />
            <div className="button-container">
              <a
                className="btn btn-primary"
                href="https://github.com/FameZeeshan/accordion.git"
                role="button"
              >
                Code
              </a>
              <a
                className="btn btn-primary"
                href="https://tranquil-crumble-bdb1b8.netlify.app/"
                role="button"
              >
                Demo
              </a>
            </div>
          </div>
          <div className="logo-img-container">
            <img src={formvalidation} alt="html-logo" />
            <div className="button-container">
              <a
                className="btn btn-primary"
                href="https://github.com/FameZeeshan/form.git"
                role="button"
              >
                Code
              </a>
              <a
                className="btn btn-primary"
                href="https://ubiquitous-youtiao-d3a8c2.netlify.app/"
                role="button"
              >
                Demo
              </a>
            </div>
          </div>
          <div className="logo-img-container">
            <img src={demo1} alt="html-logo" />
            <div className="button-container">
              <a className="btn btn-primary" href="/" role="button">
                Code
              </a>
              <a className="btn btn-primary" href="/" role="button">
                Demo
              </a>
            </div>
          </div>
          <div className="logo-img-container">
            <img src={demo1} alt="html-logo" />
            <div className="button-container">
              <a className="btn btn-primary" href="/" role="button">
                Code
              </a>
              <a className="btn btn-primary" href="/" role="button">
                Demo
              </a>
            </div>
          </div>
          <div className="logo-img-container">
            <img src={demo1} alt="html-logo" />
            <div className="button-container">
              <a className="btn btn-primary" href="/" role="button">
                Code
              </a>
              <a className="btn btn-primary" href="/" role="button">
                Demo
              </a>
            </div>
          </div>
          <div className="logo-img-container">
            <img src={demo1} alt="html-logo" />
            <div className="button-container">
              <a className="btn btn-primary" href="/" role="button">
                Code
              </a>
              <a className="btn btn-primary" href="/" role="button">
                Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
