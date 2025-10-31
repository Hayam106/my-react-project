import React from "react";
import { FaGithub, FaLinkedin, FaCodepen } from "react-icons/fa";
import "./App.css";

function Footer() {
  return (
    <footer className="modern-footer">
      <div className="footer-container">

        <ul className="footer-nav">
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer-icons">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://codepen.io" target="_blank" rel="noreferrer">
            <FaCodepen />
          </a>
        </div>
      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} FrontendOrbit. Crafted with Hayam
      </p>
    </footer>
  );
}

export default Footer;
