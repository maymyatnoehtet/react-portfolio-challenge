import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();

  return (
    <nav className="nav-section">
      <ul className="nav-links">
        <li>
          <Link to="/">About Me</Link>
        </li>
        <li
          className={
            location.pathname === "/portfolio" ? "mx-2 navActive" : "mx-2"
          }
        >
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li
          className={
            location.pathname === "/contact" ? "mx-2 navActive" : "mx-2"
          }
        >
          <Link to="/contact">Contact</Link>
        </li>
        <li
          className={
            location.pathname === "/resume" ? "mx-2 navActive" : "mx-2"
          }
        >
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
