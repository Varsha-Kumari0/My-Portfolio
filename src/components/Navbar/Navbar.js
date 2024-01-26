import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <nav className="navbar-inner">
          <div className="navbar-left">
            <a href="#">My Portfolio</a>
          </div>
          <div className="navbar-middle">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
          </div>
          <div className="navbar-right">
            <a
              href="https://github.com/Varsha-Kumari0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="github_button">Github Profile</button>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
