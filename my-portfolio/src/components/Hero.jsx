import React, { useRef } from "react";
import "./Hero.css";

function Hero() {
  const cardRef = useRef();

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y / rect.height - 0.5) * 15;
    const rotateY = (x / rect.width - 0.5) * 15;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const resetTilt = () => {
    cardRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <section className="hero" id="home">
      <div
        className="hero-card"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
      >
        <h1>
          Hi, I'm <span>Mukund</span> 👋
        </h1>
        <h2>Frontend Developer</h2>
        <p>
          I build modern, responsive and visually appealing web applications
          using React.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="#" className="btn secondary">Download Resume</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;