import React, { useState } from "react";
import "./App.css";
import Contact from "./Contact";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("project1");

  const projects = [
    { id: 1, title: "React Portfolio", category: "React", img: "image_merge.jpg" },
    { id: 2, title: "Plant Nursery", category: "js", img: "js-prog.png" },
    { id: 3, title: "Women's Watches", category: "project1", img: "prog1.png" },
    { id: 4, title: "Makeup Store", category: "project1", img: "New Project.png" },
    { id: 5, title: "Architectural Wonders", category: "project1", img: "boot-prog.png" },

  ];

  // فلترة ال progect   حسب category
  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory
  );

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="buttons">
        <button
          className={activeCategory === "project1" ? "active" : ""}
          onClick={() => setActiveCategory("project1")}
        >
          Basics Projects
        </button>
        <button
          className={activeCategory === "js" ? "active" : ""}
          onClick={() => setActiveCategory("js")}
        >
          js
        </button>
        <button
          className={activeCategory === "React" ? "active" : ""}
          onClick={() => setActiveCategory("React")}
        >
          React
        </button>
        <button
          className={activeCategory === "contact" ? "active" : ""}
          onClick={() => setActiveCategory("contact")}
        >
          Contact
        </button>
      </div>

<div
  className={`projects-container ${
    filteredProjects.length === 1 ? "single" : "three"
  }`}
>        
        {activeCategory === "contact" ? (
          <Contact />
        ) : (
          filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.img} alt={project.title} />
              <h3>{project.title}</h3>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default Projects;
