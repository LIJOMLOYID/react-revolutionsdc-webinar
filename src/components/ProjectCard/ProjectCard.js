import React from "react";

import "./project-card.css";

export const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <p>
        <b>Name:</b> {project.name}
      </p>
      <br />
      <p>
        <b>Description:</b> {project.description}
      </p>
      <br />
      <p>
        <b>Link:</b> <a href={project.link}>{project.link}</a>{" "}
      </p>
    </div>
  );
};
