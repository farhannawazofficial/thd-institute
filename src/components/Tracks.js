import './CourseCard.css';
import './Tracks.css';

import React from "react";
import CourseCard from "./CourseCard";
import "./Tracks.css"; // Create CSS file for styling

const Tracks = () => {
  const courses = [
    {
      image: "/path-to-image-1.jpg",
      title: "UX/UI Design for Beginners",
      instructor: "John Doe",
      rating: "4.9",
      lessons: "32",
      duration: "5h 15m",
      price: "$99",
    },
    {
      image: "/path-to-image-2.jpg",
      title: "Graphic Design for Beginners",
      instructor: "Jane Doe",
      rating: "4.8",
      lessons: "28",
      duration: "4h 30m",
      price: "$89",
    },
    // Add more course objects as needed
  ];

  return (
    <div className="tracks-section">
      <h2>Our Tracks</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="tracks-grid">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
      <button className="see-more-btn">See More</button>
    </div>
  );
};

export default Tracks;
