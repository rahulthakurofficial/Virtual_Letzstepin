import React from "react";
import "./Footer.scss"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="footer-column">
          <h3>Letzstepin </h3>
          <p>
             Letzstepin is a forward-thinking company that helps you bring your ideas to life. 
            We specialize in delivering innovative solutions to transform your vision into reality.
          </p>
        </div>
        <div className="footer-column">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Portfolio</a></li>
          </ul>
        </div>
        <div className="footer-column">
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
      
      <div className="discount-box">
        <h2 className="discount-heading">Get discounts instantly</h2>
        <p className="discount-text">
          To save, you just have to log in to your account and look for the
          experiences with the green or yellow color code. On your first
          reservation, you can enjoy a <strong>10% discount</strong>.
        </p>
        <div className="email-box">
          <input type="email" placeholder="Enter your email" className="email-input" />
          <button className="email-button">Get started</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 LetzStepIn. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;