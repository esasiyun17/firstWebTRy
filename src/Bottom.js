import React, { Component } from "react";
import "./App.css";

class Bottom extends Component {
  render() {
    return (
      <div className="bottom">
        <div className="personal-info">
          <h5 className="about-me">About Me</h5>
          <h2 className="philosophy">
            Run if you can't fly, walk if you can't run, crawl if you can't walk
            but whatever you do you have to move.
          </h2>
          <p className="author">Martin Luther King</p>
          <p className="about-me-paragraf">
            Hello my name is Yunus . I live in Turkey . I'm 25 years old
            Front-end developer but i know about databases SQL or NoSQL . My
            goal is become a full stack . There is a long way to go for me but i
            will crawl at least for it.
          </p>

          <div className="discuss">
            <h5 className="skills">Skills</h5>
            <ul className="skill-list">
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>ReactJS</li>
              <li>SQL</li>
              <li>NoSQL</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Bottom;
