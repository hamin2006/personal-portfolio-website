import React from "react";
import "../css/Navbar.css"
import logo from "./files/logo-plain.png"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const sendHome = () => {
    navigate("/");
  }
  const sendProjects = () => {
    navigate("/projects");
  }
  const sendExperience = () => {
    navigate("/experience");
  }
  const sendContact = () => {
    navigate("/contact");
  }

  const sendResume = () => {
    const link = document.createElement("a");
    link.href = "/Harsh_Amin_Resume (23).pdf"; 
    link.download = "Harsh-Resume.pdf"; 
    link.click();
  }

  return (
    <nav className="navbar">
      <div className="logo"><img src = {logo} alt = "Logo" onClick = {sendHome} className="logo-img"></img></div>
      <ul className="nav-links">
        <li onClick = {sendHome}>Home</li>
        <li onClick = {sendResume}>Resume</li>
        <li onClick = {sendProjects}>Projects</li>
        <li onClick = {sendExperience}>Experience</li>
        <li onClick = {sendContact}>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;