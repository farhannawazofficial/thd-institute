import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img src="/path-to-logo.png" alt="THD Institute Logo" className="footer-logo" />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>How to work?</li>
            <li>Popular Course</li>
            <li>Service</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Courses</h4>
          <ul>
            <li>Categories</li>
            <li>Offline Course</li>
            <li>Video Course</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li>FAQ</li>
            <li>Help Center</li>
            <li>Career</li>
            <li>Privacy</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <ul>
            <li>+92 3132490324</li>
            <li>Contact@thdinstitute.com</li>
            <li>Karachi Superior School SJ Saeedabad Baldia town Karachi</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© THDInstitute All Rights Reserved, 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
