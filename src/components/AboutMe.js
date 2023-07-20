import React from "react";

const AboutMe = () => {
  return (
    <section className="aboutme-section">
      <h2 className="aboutme-title"> About Me </h2>
      <div className="aboutme-body">
        <img
          className="aboutme-img"
          src="../assets/may.png"
          alt="black and white photo of May"
        ></img>
        <p className="aboutme-info">
          I am a recent University of Melbourne graduate in Computing and
          Software Systems, with a keen interest in full-stack web development,
          web design, and game development. I have experience in various
          programming languages like Python, C, C#, Java, JavaScript, and SQL,
          excelling in JavaScript and Python coding, as well as using HTML and
          CSS. Currently, I am enrolled in the Monash full-stack web development
          coding boot camp to further enhance my skills and project portfolio.
          Additionally, I am part of the Monash Professional Year course,
          focusing on personal and professional development. Moreover, I am
          undertaking the Google UI/UX design course to explore web design
          principles, UX research, prototyping, and cross-platform design.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
