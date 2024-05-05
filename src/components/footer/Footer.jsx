import React from "react";
import logo from "../../assets/images/nav-logo.svg";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import "./Footer.css";
import cards from "../../assets/images/cards.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-all">
          <div className="footer-top">
            <div className="footer-top-1">
              <div className="footer-top-logo">
                <img src={logo} alt="" />
                <h1>E-Comm</h1>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever.Since the 1500s, when an unknown printer.
              </p>
            </div>
            <div className="footer-top-1">
              <h1>Follow Us</h1>
              <p>
                Since the 1500s, when an unknown printer took a galley of type
                and scrambled.
              </p>
              <div className="footer-top-logo">
                <FaFacebookF />
                <FaTwitter />
              </div>
            </div>
            <div className="footer-top-1">
              <h1>Contact Us</h1>
              <p>
                E-Comm , 4578 <br /> Marmora Road, <br /> Glasgow D04 89GR
              </p>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-top">
              <ul className="footer-list">
                <h4>Infomation</h4>
                <li>About Us</li>
                <li>Infomation</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
              <ul className="footer-list">
                <h4>Service</h4>
                <li>About Us</li>
                <li>Infomation</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
              <ul className="footer-list">
                <h4>My Account</h4>
                <li>About Us</li>
                <li>Infomation</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
              <ul className="footer-list">
                <h4>Our Offers</h4>
                <li>About Us</li>
                <li>Infomation</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            <hr />
            <div className="footer-bottom-bottom">
              <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>
              <img src={cards} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
