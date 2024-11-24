import React from "react";
import "./HeroSection.css"; // Create CSS file to style
import heroImage from './assets/images/hero-image.png'

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1>
          The <span className="highlight">Smart</span> Choice For Future
        </h1>
        <p>
          Elearn is a global training provider based across the UK that specializes in accredited and bespoke training courses.
        </p>
        <div className="search-bar">
          <input type="text" placeholder="Search for a location..." />
          <button>Continue</button>
        </div>
      </div>
      <div className="hero-image">
        {/* Add your image here */}
        <img src={heroImage} alt="Learning illustration" />
      </div>
    </div>
  );
};

export default HeroSection;
