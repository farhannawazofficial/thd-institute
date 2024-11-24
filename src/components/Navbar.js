import React from "react";
import "./Navbar.css"; 
// import heroImage from './assets/images/thd-logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      
      {/* <img src={thd-logo} alt="thd-logo" /> */}
      
      <div className="navbar-logo">THD Institute</div>
      <ul className="navbar-links">
        <li><a href="#about">About us</a></li>
        <li><a href="#courses">Courses</a></li>
        <li><a href="#services">Our Services</a></li>
        <li><a href="#contact">Contact us</a></li>
      </ul>
      <button className="sign-in-btn">Sign in</button>
    </nav>
  );
};

export default Navbar;
