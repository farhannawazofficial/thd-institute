import React from "react";
import TeacherCard from "./TeacherCard";
import './OurTracks.css'; // Create this CSS file for layout styling

const OurTracks = () => {
  const teachers = [
    {
      name: "Matthew E. McNatt",
      title: "Professor @George Brown College",
      description: "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut aliquip ex commodo.",
      subject: "English Teacher",
      image: "/path-to-image-1.jpg", // Replace with actual image paths
      social: {
        instagram: "https://www.instagram.com",
        twitter: "https://www.twitter.com",
        linkedin: "https://www.linkedin.com"
      }
    },
    {
      name: "Tracy D. Wright",
      title: "Professor @George Brown College",
      description: "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut aliquip ex commodo.",
      subject: "Physics & Math Teacher",
      image: "/path-to-image-2.jpg",
      social: {
        instagram: "https://www.instagram.com",
        linkedin: "https://www.linkedin.com"
      }
    },
    {
      name: "Cynthia A. Nelson",
      title: "Professor @George Brown College",
      description: "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut aliquip ex commodo.",
      subject: "Bio & Chem Teacher",
      image: "/path-to-image-3.jpg",
      social: {
        instagram: "https://www.instagram.com",
        twitter: "https://www.twitter.com",
        linkedin: "https://www.linkedin.com"
      }
    }
  ];

  return (
    <div className="our-tracks-section">
      <h2>Our Tracks</h2>
      <p>Lorem ipsum is simply dummy text of the printing.</p>
      <div className="tracks-grid">
        {teachers.map((teacher, index) => (
          <TeacherCard key={index} {...teacher} />
        ))}
      </div>
    </div>
  );
};

export default OurTracks;
