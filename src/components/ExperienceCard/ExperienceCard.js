import React from "react";

import "./experience-card.css";

export const ExperienceCard = ({ experience }) => {
  return (
    <div className="experience-card">
      <p>
        <b>Company name:</b> {experience.companyName}
      </p>
      <br />
      <p>
        <b>Role:</b> {experience.role}
      </p>
      <br />
      <p>
        <b>About:</b> {experience.about}
      </p>
    </div>
  );
};
