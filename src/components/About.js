import React from "react";
import { Link as ScrollLink } from "react-scroll";
export default function About() {
  return (
    <div className="about">
      <div className="main-container m-3">
        <h1>About</h1>
        <h3>I'm Mohammed Zeeshan</h3>
        <p>
          I am a Full Stack Developer with expertise in HTML, CSS, JavaScript,
          Bootstrap, and popular frameworks such as React.js. I create visually
          appealing and user-friendly interfaces with a focus on detail and stay
          up-to-date with the latest frontend technologies and best practices. I
          am skilled in troubleshooting and have a good understanding of web
          development concepts. I have experience working with backend
          technologies such as Node.js and Express.js. I am constantly learning
          and expanding my skillset to stay ahead in the rapidly evolving tech
          industry. In addition to my technical skills, I am a team player and
          have excellent communication and problem-solving skills. I thrive in
          collaborative environments and enjoy working with others to achieve
          common goals. If you have any questions or would like to collaborate
          on a project, feel free to get in touch with me. I look forward to
          connecting with you!
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
