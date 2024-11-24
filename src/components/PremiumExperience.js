import React from "react";
import './PremiumExperience.css'; // Create this CSS file for styling
import fun from './assets/images/fun.png'
import learn from './assets/images/learn.jpg'

const PremiumExperience = () => {
  return (
    <div className="premium-experience-section">
      <div className="experience-header">
        <h2>
          Premium <span className="highlight">Learning</span> Experience
        </h2>
        <div className="experience-points">
          <div className="point">
            <div className="point-icon">
             { /* Use a placeholder for icons, or replace with actual images */}
              <img src={fun} alt="Learning illustration" />
            </div>
            <div className="point-details">
              <h3>Easily Accessible</h3>
              <p>Learning will feel very comfortable with our platform.</p>
            </div>
          </div>
          <div className="point">
            <div className="point-icon">
            <img src={learn} alt="Learning illustration" />
            </div>
            <div className="point-details">
              <h3>Fun Learning Experience</h3>
              <p>Enjoy a fun and engaging learning environment.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumExperience;
