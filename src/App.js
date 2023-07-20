import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  return (
    <Router>
      <div>
        <div className="mobile-header">
          <Header />
        </div>
        <div>
          <main>
            <Routes>
              <Route path="/" element=<AboutMe /> />
              <Route path="/portfolio" element=<Portfolio /> />
              <Route path="/contact" element=<Contact /> />
              <Route path="/resume" element=<Resume /> />
            </Routes>
          </main>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
