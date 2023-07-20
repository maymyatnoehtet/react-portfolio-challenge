import React from "react";

const Resume = () => {
  return (
    <section className="resume-section">
      <h2 className="resume-title"> Resume </h2>
      <button className="resume-download-btn">
        <a href={require("../../src/May_Resume.pdf")} download>
          <p>Download my Resume</p>
        </a>
      </button>
    </section>
  );
};

export default Resume;
