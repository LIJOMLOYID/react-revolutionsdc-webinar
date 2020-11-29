import React from "react";

import "./portfolio.css";
import { SideNav } from "../SideNav/SideNav";
import { SectionContainer } from "../SectionContainer/SectionContainer";

const Portfolio = ({ selectedSection, selectedHeading, selectedQuote }) => {
  return (
    <div className="portfolio-container">
      <div className="sidenav-container">
        <SideNav />
      </div>
      <div className="main-section-container">
        <SectionContainer
          selectedSection={selectedSection}
          selectedHeading={selectedHeading}
          selectedQuote={selectedQuote}
        />
      </div>
    </div>
  );
};

export default Portfolio;
