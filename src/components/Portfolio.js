import React from "react";
import Project from "./Project";
const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <h2 className="portfolio-title"> Portfolio </h2>
      <div className="portfolio-projects">
        <Project>
          <a href="https://joshua-watson96.github.io/Travel-Wise/">
            <img
              className="portfolio-project-img"
              src="../assets/TravelWise.png"
              alt="travel wise app"
            />
            <p> Travel Wise (Travel Website) </p>
          </a>
        </Project>
        <Project>
          <a href="https://betterreads-bookreviewapp.herokuapp.com/login">
            <img
              className="portfolio-project-img"
              src="../assets/BetterReads.png"
              alt="book review app"
            />
            <p> Better Read (Book Review App) </p>
          </a>
        </Project>
        <Project>
          <a href="https://maymyatnoehtet.github.io/weather-dashboard/?">
            <img
              className="portfolio-project-img"
              src="../assets/WeatherDashboard.png"
              alt="weather dashboard"
            />
            <p> Weather Dashboard </p>
          </a>
        </Project>
        <Project>
          <a href="https://github.com/maymyatnoehtet/personal_portfolio">
            <img
              className="portfolio-project-img"
              src="./assets/TravelWise.png"
              alt="contact book app"
            />
            <p> Contact Book App </p>
          </a>
        </Project>
        <Project>
          <a href="https://github.com/maymyatnoehtet/personal_portfolio">
            <img
              className="portfolio-project-img"
              src="./assets/TravelWise.png"
              alt="diabetes monitoring app"
            />
            <p> Diabetes Monitoring App </p>
          </a>
        </Project>
        <Project>
          <a href="https://github.com/maymyatnoehtet/personal_portfolio">
            <img
              className="portfolio-project-img"
              src="./assets/TravelWise.png"
              alt="pac man game"
            />
            <p> Pac Man </p>
          </a>
        </Project>
      </div>
    </section>
  );
};

export default Portfolio;
