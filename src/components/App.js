import React, { useState } from "react";

import "./App.css";
import Portfolio from "./Portfolio/Portfolio";

import { about } from "../constants/About";
import { experiences } from "../constants/Experiences";
import { projects } from "../constants/Projects";
import { skills } from "../constants/Skills";

const App = () => {
  const [state, setState] = useState({
    selectedSection: "about",
    selectedHeading: about.heading,
    selectedQuote: about.quote,
    about: about,
    projects: projects,
    skills: skills,
    experiences: experiences,
  });

  // constructor() {
  //   super();
  //   this.state = {
  //     selectedSection: "about",
  //     selectedHeading: about.heading,
  //     selectedQuote: about.quote,
  //     about: about,
  //     projects: projects,
  //     skills: skills,
  //   };
  // }

  const handleSectionClick = (sectionName) => {
    setState({
      ...state,
      selectedSection: sectionName,
      selectedHeading: state[sectionName].heading,
      selectedQuote: state[sectionName].quote,
    });
  };

  return (
    <div className="App">
      <Portfolio
        selectedSection={state.selectedSection}
        selectedHeading={state.selectedHeading}
        selectedQuote={state.selectedQuote}
        handleSectionClick={handleSectionClick}
        about={state.about}
        skills={state.skills}
        projects={state.projects}
        experiences={state.experiences}
      />
    </div>
  );
};

export default App;
