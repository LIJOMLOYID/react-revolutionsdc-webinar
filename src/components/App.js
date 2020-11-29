import React, { Component } from "react";

import "./App.css";
import Portfolio from "./Portfolio/Portfolio";

import { about } from "../constants/About";
import { experiences } from "../constants/Experiences";
import { projects } from "../constants/Projects";
import { skills } from "../constants/Skills";

class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedSection: about,
      selectedHeading: about.heading,
      selectedQuote: about.quote,
      about: about,
      projects: projects,
      skills: skills,
    };
  }

  handleSectionClick = (sectionName) => {
    this.setState({
      selectedSection: sectionName,
      selectedHeading: this.state[sectionName].heading,
      selectedQuote: this.state[sectionName].quote,
    });
  };

  render() {
    return (
      <div className="App">
        <Portfolio
          selectedSection={this.state.selectedSection}
          selectedHeading={this.state.selectedHeading}
          selectedQuote={this.state.selectedQuote}
          handleSectionClick={this.handleSectionClick}
          about={this.state.about}
          skills={this.state.skills}
          projects={this.state.projects}
        />
      </div>
    );
  }
}

export default App;
