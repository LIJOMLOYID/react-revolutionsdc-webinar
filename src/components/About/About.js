import React from "react";

import "./about.css";

export const About = ({ about }) => {
  return (
    <div className="about-container">
      <p>{about.bio}</p>
    </div>
  );
};
