import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <p>SIGN UP FOR OUR DAILY INSIDER</p>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>

      <div className="footer-links">
        <div>
          <h4>Explore</h4>
          <ul>
            <li>Home</li>
            <li>Questions</li>
            <li>Articles</li>
            <li>Tutorials</li>
          </ul>
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li>FAQs</li>
            <li>Help</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h4>Stay connected</h4>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        DEV@Deakin 2022 — Privacy Policy | Terms | Code of Conduct
      </div>
    </div>
  );
}

export default Footer;
