import React from "react";

import "./experiences.css";
import { ExperienceCard } from "../ExperienceCard/ExperienceCard";

export const Experiences = ({ experiences }) => {
  return (
    <div className="experiences-container">
      <div className="industry-skill-container">
        {experiences.experienceList.map((experience) => (
          <ExperienceCard experience={experience} />
        ))}
      </div>
    </div>
  );
};
