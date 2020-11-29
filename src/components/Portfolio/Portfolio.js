import React from "react";

import "./portfolio.css";
import { SideNav } from "../SideNav/SideNav";
import { SectionContainer } from "../SectionContainer/SectionContainer";

const Portfolio = ({
  selectedSection,
  selectedHeading,
  selectedQuote,
  handleSectionClick,
  about,
  projects,
  skills,
}) => {
  return (
    <div className="portfolio-container">
      <div className="sidenav-container">
        <SideNav handleSectionClick={handleSectionClick} />
      </div>
      <div className="main-section-container">
        <SectionContainer
          selectedSection={selectedSection}
          selectedHeading={selectedHeading}
          selectedQuote={selectedQuote}
          about={about}
          projects={projects}
          skills={skills}
        />
      </div>
    </div>
  );
};

export default Portfolio;
