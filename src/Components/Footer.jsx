import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "../css/Footer.css"

const Footer = () => {
    return (
      <div>
        <hr className="foo"/>
      <footer className="footer">
        
        <a href="https://linkedin.com/in/hamin06" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="footer-icon linkedin" />
        </a>
        <a href="https://github.com/hamin2006" target="_blank" rel="noopener noreferrer">
          <FaGithub className="footer-icon git" />
        </a>
        <a href="mailto:aminharsh317@gmail.com">
          <FaEnvelope className="footer-icon mail" />
        </a>
      </footer>
      </div>
    );
}

export default Footer;