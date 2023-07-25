import React from "react";
import "./style.css";
import Zeeshan from "../images/Zeeshan.jpg";
import zeeshanResume from "../images/zeeshan-resume.pdf";
export default function Home() {
  return (
    <div id="home">
      <div className="home-main-container d-flex m-3">
        <div className="container-left">
          <h1>I'm a full-stack developer</h1>
          <p style={{ width: "90%" }}>
            Experienced Professional transitioning to a career as a MERN Stack
            Developer - Passionate about building innovative solutions with the
            latest technologies
          </p>
          <div className="social">
            <a
              href="https://www.linkedin.com/in/famezeeshan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fa fa-linkedin-square"
                style={{ fontSize: "48px", color: "#003049" }}
              ></i>
            </a>
            <a
              href="https://github.com/FameZeeshan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fa fa-github-square"
                style={{ fontSize: "48px", color: "#111111" }}
              ></i>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=+919884291490"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fa fa-whatsapp"
                style={{ fontSize: "48px", color: "#008000" }}
              ></i>
            </a>
          </div>
          <div className="resume">
            <a href={zeeshanResume} download className="btn btn-primary resume">
              Download Resume
            </a>
          </div>
        </div>
        <div className="container-right">
          <img
            src={Zeeshan}
            alt="Zeeshan"
            style={{ width: "200px", height: "200px", borderRadius: "50%" }}
          />
        </div>
      </div>
    </div>
  );
}
