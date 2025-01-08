import React, {useEffect, useState} from "react";
import "../css/Navbar.css"
import logo from "./files/logo-plain.png"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sendHome = () => {
    navigate("/");
    window.scrollTo({top:0});
  }
  const sendProjects = () => {
    navigate("/projects");
    window.scrollTo({top:0});
  }
  const sendExperience = () => {
    navigate("/experience");
    window.scrollTo({top:0});
  }
  const sendContact = () => {
    navigate("/contact");
  }

  const sendResume = () => {
    const link = document.createElement("a");
    link.href = "/Harsh_Amin_Resume (23).pdf";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();
  }

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
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