import React from "react";
import "./Footer.scss"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="about-us">
          <h3>LetzStepIn</h3>
          <p>
            LetzStepIn is a forward-thinking company that helps you bring your
            ideas to life. We specialize in delivering innovative solutions to
            transform your vision into reality. Whether it's web development,
            digital marketing, or creative services, we have got you covered.
          </p>
        </div>
        <div className="useful-links">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Portfolio</a></li>
          </ul>
        </div>
        <div className="our-services">
          <h3>Our Services</h3>
          <ul>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Mobile Apps</a></li>
            <li><a href="#">UI/UX Design</a></li>
            <li><a href="#">SEO Optimization</a></li>
            <li><a href="#">Digital Marketing</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 LetzStepIn. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
