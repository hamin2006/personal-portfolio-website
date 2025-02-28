import React from "react";
import { motion } from "framer-motion"
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "../css/Footer.css"

const Footer = () => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay:0.3, duration: 0.8}}>
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
      </motion.div>
    );
}

export default Footer;