import React from "react";
import "./style.css";
import html from "../images/html.png";
import css from "../images/css.png";
import javascript from "../images/javascript.png";
import react from "../images/react.png";
import mongo from "../images/mongo.png";
import node from "../images/node.png";
import express from "../images/express.png";
import bootstrap from "../images/bootstrap.png";
import tailwind from "../images/tailwind.png";
import python from "../images/python.png";
export default function Experience() {
  return (
    <div className="experience">
      <div className="experience-container m-3">
        <h1>Experience</h1>
        <p>These are the technologies I've worked with</p>

        <div className="logo-container">
          <div className="tools-img-container">
            <img src={html} alt="html-logo" />
            <p>HTML</p>
          </div>

          <div className="tools-img-container">
            <img src={css} alt="css-logo" />
            <p>CSS</p>
          </div>
          <div className="tools-img-container">
            <img src={javascript} alt="javascript-logo" />
            <p>Java Script</p>
          </div>
          <div className="tools-img-container">
            <img src={react} alt="react-logo" />
            <p>ReactJS</p>
          </div>
          <div className="tools-img-container">
            <img src={mongo} alt="mongo-logo" />
            <p>MongoDB</p>
          </div>
          <div className="tools-img-container">
            <img src={node} alt="node-logo" />
            <p>NodeJS</p>
          </div>
          <div className="tools-img-container">
            <img src={express} alt="express-logo" />
            <p>ExpressJS</p>
          </div>
          <div className="tools-img-container">
            <img src={bootstrap} alt="bootstrap-logo" />
            <p>Bootstrap</p>
          </div>
          <div className="tools-img-container">
            <img src={tailwind} alt="tailwind-logo" />
            <p>Tailwind CSS</p>
          </div>
          <div className="tools-img-container">
            <img src={python} alt="python-logo" />
            <p>Python</p>
          </div>
        </div>
      </div>
    </div>
  );
}
