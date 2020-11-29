import React from "react";

import "./section-container.css";

export const SectionContainer = ({
  selectedSection,
  selectedHeading,
  selectedQuote,
}) => {
  return (
    <div className="section-container">
      <div className="section-heading-container">
        <h1 className="main-heading">{selectedHeading}</h1>
        <p className="main-quote">{selectedQuote}</p>
      </div>
      <div className="section-component"></div>
    </div>
  );
};
