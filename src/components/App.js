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
      selectedSection: "about",
      selectedHeading: "My Section",
      selectedQuote: "My Quote",
    };
  }

  render() {
    return (
      <div className="App">
        <Portfolio
          selectedSection={this.state.selectedSection}
          selectedHeading={this.state.selectedHeading}
          selectedQuote={this.state.selectedQuote}
        />
      </div>
    );
  }
}

export default App;
