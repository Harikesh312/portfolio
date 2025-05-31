import React from "react";
import "./Footer.css";
import { LuUserRound } from "react-icons/lu";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src="images/Harikesh-logo.png" alt="" />
          <p>
            I’m a frontend developer from India with 4 months of Practice
            building user-friendly websites.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <LuUserRound />
            <input type="email" placeholder="Enter Your Email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2023 Harikesh Kumar. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
