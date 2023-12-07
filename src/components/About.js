import React from "react";
import { Link as ScrollLink } from "react-scroll";
export default function About() {
  return (
    <div className="about">
      <div className="main-container m-3">
        <h1>About</h1>
        <h3>I'm Mohammed Zeeshan</h3>
        <p>
          Hello, I'm Mohammed Zeeshan, a Full Stack Developer skilled in HTML,
          CSS, JavaScript, Bootstrap, and React.js. I specialize in creating
          visually appealing and user-friendly interfaces. Proficient in both
          frontend and backend technologies, including Node.js and Express.js, I
          am committed to staying ahead in the ever-evolving tech industry.
          <br></br>
          <br></br>I also have a strong interest in Excel automation using
          Python and libraries such as Pandas, NumPy, and Openpyxl. This
          additional expertise enables me to streamline data processes
          effectively. I am a team player with excellent communication and
          problem-solving skills, thriving in collaborative environments.
        </p>
        <div className="button-container">
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="btn btn-primary"
          >
            Contact Me
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}
