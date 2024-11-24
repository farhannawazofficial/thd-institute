import React from "react";
import './Testimonials.css'; // Create this CSS file for styling
import person1 from './assets/images/person1.png'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Finlay Kirk",
      title: "Student",
      feedback: "Teachings of the great masters of truth... Learning has become easier.",
      image: "/path-to-image-1.png", // Replace with actual image paths
    },
    {
      name: "Donald T. Cochrane",
      title: "Student",
      feedback: "Complete assurance of the system and support...",
      image: "/path-to-image-2.png",
    },
    {
      name: "Claire M. Akram",
      title: "Student",
      feedback: "There are many accessible passages of great learning...",
      image: "/path-to-image-3.png",
    },
  ];

  return (
    <div className="testimonials-section">
      <h2>What Student's Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p>{testimonial.feedback}</p>
            <div className="testimonial-author">
            <img src={person1} alt="Learning illustration"  className="author-image" />
              <div>
                <h4>{testimonial.name}</h4>
                <p>{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
