import React from "react";
import "./Footer.css";
import LinkedIn from "../../assets/linkedin.png";
import Telegram from "../../assets/telegram.png";
import Hackerrank from "../../assets/hackerrank.png";
import Gmail from "../../assets/gmail.png";

const Footer = () => {
  const email = "varsha20046kumari@gmail.com";

  return (
    <>
      <footer className="footer">
        <div className="footer-top">
          <p className="spanColor">Varsha Kumari</p>
        </div>
        <div className="footer-middle">
          <a
            href="https://www.linkedin.com/in/varsha-kumari-038ba1248"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a
            href="https://www.hackerrank.com/profile/varsha20046kuma1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Hackerrank} alt="Hackerrank" />
          </a>
          <a
            href="https://t.me/VarshaSingh004"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Telegram} alt="Telegram" />
          </a>
          <a href={`mailto:${email}`}>
            <img src={Gmail} alt="Gmail" />
          </a>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Varsha Kumari. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
