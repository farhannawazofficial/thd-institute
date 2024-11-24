import React from "react";
import "./CourseCard.css"; // Create the CSS file for styling
import heroImage from './assets/images/hero-image.png'

const CourseCard = ({ image, title, instructor, rating, lessons, duration, price }) => {
  return (
    <div className="course-card">
      <img src={heroImage} alt="Learning illustration" />
      <div className="course-content">
        <h3>{title}</h3>
        <p>{instructor}</p>
        <div className="course-details">
          <span>{lessons} Lessons</span> | <span>{duration}</span>
        </div>
        <div className="course-rating">
          <span>{rating} ★</span>
        </div>
        <div className="course-price">
          <p>{price}</p>
        </div>
        <button className="join-course-btn">Join Course</button>
      </div>
    </div>
  );
};

export default CourseCard;
