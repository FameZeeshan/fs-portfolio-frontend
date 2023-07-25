import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-black-tertiary">
      <div className="container-fluid">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="navbar-brand"
        >
          Mohammed Zeeshan
        </ScrollLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                offset={-70}
                className="nav-link"
              >
                Home
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                offset={-70}
                className="nav-link"
              >
                About
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="project"
                smooth={true}
                duration={500}
                offset={-70}
                className="nav-link"
              >
                Project
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="experience"
                smooth={true}
                duration={500}
                offset={-70}
                className="nav-link"
              >
                Experience
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="nav-link"
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
