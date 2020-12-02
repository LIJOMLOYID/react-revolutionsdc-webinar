import React from "react";

import "./section-container.css";
import { About } from "../About/About";
import { Projects } from "../Projects/Projects";
import { Skills } from "../Skills/Skills";
import { Experiences } from "../Experiences/Experiences";

export const SectionContainer = ({
  selectedSection,
  selectedHeading,
  selectedQuote,
  about,
  projects,
  skills,
  experiences,
}) => {
  return (
    <div className="section-container">
      <div className="section-heading-container">
        <h1 className="main-heading">{selectedHeading}</h1>
        <p className="main-quote">{selectedQuote}</p>
      </div>
      <div className="section-component">
        {
          {
            about: <About about={about} />,
            skills: <Skills skills={skills} />,
            projects: <Projects projects={projects} />,
            experiences: <Experiences experiences={experiences} />,
          }[selectedSection]
        }
      </div>
    </div>
  );
};
