import React from "react";

import "./sidenav.css";

export const SideNav = ({ handleSectionClick }) => {
  return (
    <div className="sidenav">
      <img
        src="https://avatars2.githubusercontent.com/u/2143962"
        className="avatar"
        alt="avatar"
      />
      <h2 className="main-name">Lijo M Loyid</h2>
      <p className="subtitle">"Technology buff"</p>
      <div className="sections-list">
        <p
          className="section-list-element"
          onClick={() => handleSectionClick("about")}
        >
          About Me
        </p>
        <p
          className="section-list-element"
          onClick={() => handleSectionClick("skills")}
        >
          Skills
        </p>
        <p
          className="section-list-element"
          onClick={() => handleSectionClick("projects")}
        >
          Projects
        </p>
        <p
          className="section-list-element"
          onClick={() => handleSectionClick("experiences")}
        >
          Experiences
        </p>
      </div>
    </div>
  );
};
