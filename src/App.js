import React, { useEffect, useState, useRef } from "react";
import { ReactTyped } from "react-typed";
import StarryBackground from "./star";
import "./App.css";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./footer";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const skillsRef = useRef(null);

  // تأثير السكرول الموحد
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollY(currentScroll);
      setIsScrolled(currentScroll > 50); 

      const hero = document.querySelector(".fixed-hero");
      if (hero) {
        const windowHeight = window.innerHeight;
        const scrollRatio = Math.min(currentScroll / windowHeight, 1);
        const opacity = 1 - scrollRatio * 2;
        hero.style.opacity = Math.max(opacity, 0);
      }

      if (skillsRef.current) {
        const rect = skillsRef.current.getBoundingClientRect();
        setSkillsVisible(rect.top < window.innerHeight * 0.7);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const heroStyle = {
    transform: `translateY(${scrollY * 0.2}px) scale(${1 - scrollY / 1500})`,
    opacity: 1 - scrollY / 600,
    transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
  };

  return (
    <div>
      <StarryBackground />

      {/* ---------- Header ---------- */}
   <header className={`header ${isScrolled ? "scrolled" : ""}`}>        <div className="logo">
          <img
            src="f-inside-a-circle.png"
            alt="FrontendOrbit logo"
            className="logo-icon"
          />
          <span>FrontendOrbit</span>
        </div>

        <nav className="nav-links">
          <ul>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="social-icons">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>

          <a href="https://github.com" target="_blank" rel="noreferrer">
            <i className="bi bi-github"></i>
          </a>

          <a href="https://codepen.io" target="_blank" rel="noreferrer">
            <i className="bi bi-gitlab"></i>
          </a>

          <a href="https://www.wordpress.com" target="_blank" rel="noreferrer">
            <i className="bi bi-discord"></i>
          </a>
        </div>
      </header>

      {/* ---------- Hero Section ---------- */}
      <div className="home" style={heroStyle}>
        <section className="hero fixed-hero">
          <div className="content">
            <h1>Exploring the Universe of Front-End Development</h1>
            <p className="typed-wrapper">
              Hi, I'm <span className="name">Hayam</span> — building modern web
              experiences that{" "}
              <ReactTyped
                strings={[
                  "shine like stars. ",
                  "inspire creativity. ",
                  "feel alive. ",
                ]}
                typeSpeed={70}
                backSpeed={40}
                loop
              />
            </p>
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Explore More</span>
            </button>
          </div>
        </section>
      </div>

      {/* ---------- Other Sections ---------- */}
      <div ref={skillsRef}>
        <Skills visible={skillsVisible} />
      </div>

      <Projects />
      <section className="subscribe-section">
  <div className="subscribe-box">
    <h3>See My Projects At Once & leave Here Your E-mail Address</h3>
    <form className="subscribe-form">
      <input type="email" placeholder="Email Address" required />
      <button type="submit">Submit</button>
    </form>
  </div>
</section>

      <Footer />
    </div>
  );
}

export default App;











