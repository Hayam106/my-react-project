import React, { useEffect, useRef, useState } from "react";

const skills = [
  { name: "JavaScript (ES6+)", level: 85 },
  { name: "React JS", level: 80 },
  { name: "Bootstrap", level: 90 },
  { name: "HTML & CSS", level: 95 },
  { name: "Vue.js", level: 70 },
  { name: "Node.js", level: 60 },
  { name: "TypeScript", level: 75 },
];

const Circle = ({ level, size = 150, stroke = 12, color = "#2dc6faff", animate }) => {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (circumference * level) / 100;

  return (
    <div className="circle" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(255,255,255,0.08)"
            strokeWidth={stroke}
            fill="none"
            strokeLinecap="round"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={stroke}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={animate ? offset : circumference}
            style={{ transition: "stroke-dashoffset 1.5s ease-out" }}
          />
        </g>
      </svg>
      <div className="percentage">
        <h3>{level}%</h3>
      </div>
    </div>
  );
};

const Skills = () => {
  const [animate, setAnimate] = useState(false);
  const containerRef = useRef(null);

  // تشغيل الأنيميشن   
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setAnimate(true);
      },
      { threshold: 0.4 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  //  نكرر العناصر مرتين 
  const doubledSkills = [...skills, ...skills];

  const scrollLeft = () => {
    const container = containerRef.current;
    container.scrollBy({ left: -250, behavior: "smooth" });
  };

  const scrollRight = () => {
    const container = containerRef.current;
    container.scrollBy({ left: 250, behavior: "smooth" });
  };

  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <p className="skills-subtitle">You Can See My Skills Here</p>

      <div
        className="slider-wrapper"
        style={{ position: "relative", width: "100%", display: "flex", alignItems: "center" }}
      >
        {/* السهم الشمال */}
        <button
          className="arrow left"
          onClick={scrollLeft}
          style={{
            position: "absolute",
            left: "10px",
            zIndex: 10,
            borderRadius: "50%",
            width: "40px",
            height: "40px",
          }}
        >
          &#10094;
        </button>

        <div
          className="skills-container"
          ref={containerRef}
          style={{
            display: "flex",
            gap: "40px",
            overflowX: "auto",
            scrollBehavior: "smooth",
            width: "90%",
          }}
        >
          {doubledSkills.map((s, i) => (
            <div key={i} style={{ flex: "0 0 auto", textAlign: "center" }}>
              <Circle level={s.level} animate={animate} />
              <p className="skill-name">{s.name}</p>
            </div>
          ))}
        </div>

        {/* السهم اليمين */}
        <button
          className="arrow right"
          onClick={scrollRight}
          style={{
            position: "absolute",
            right: "10px",
            zIndex: 10,
            borderRadius: "50%",
            width: "40px",
            height: "40px",
          }}
        >
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Skills;
