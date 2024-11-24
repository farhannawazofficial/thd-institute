import React from "react";
import './TeacherCard.css'; // Create this CSS file for styling

const TeacherCard = ({ name, title, description, subject, image, social }) => {
  return (
    <div className="teacher-card">
      <img src={image} alt={name} className="teacher-image" />
      <div className="teacher-details">
        <h3>{name}</h3>
        <p>{title}</p>
        <p>{description}</p>
        <h4>{subject}</h4>
        <div className="social-icons">
          {social.instagram && <a href={social.instagram} target="_blank" rel="noreferrer"><img src="/path-to-instagram-icon.png" alt="Instagram" /></a>}
          {social.twitter && <a href={social.twitter} target="_blank" rel="noreferrer"><img src="/path-to-twitter-icon.png" alt="Twitter" /></a>}
          {social.linkedin && <a href={social.linkedin} target="_blank" rel="noreferrer"><img src="/path-to-linkedin-icon.png" alt="LinkedIn" /></a>}
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
