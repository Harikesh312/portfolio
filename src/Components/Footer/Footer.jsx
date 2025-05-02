import React from "react";
import "./Footer.css";
import { LuUserRound } from "react-icons/lu";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <h1>Harikesh</h1>
          <p>
            I am a frontend developer from, USA with 10 years of experience in
            companies like Microsoft, Tesla and Apple.
          </p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <LuUserRound/>
                <input type="email" placeholder="Enter Your Email"/>
            </div>
            <div className="footer-subscribe">
                Subscribe
            </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
        © 2023 Alex Bennett. All rights reserved.
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
