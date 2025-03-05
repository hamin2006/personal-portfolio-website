import React, {useState, useEffect, useMemo} from "react";
import { motion } from "framer-motion";
import "../css/Home.css"
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
function Home() {
  document.title = "Harsh Amin | Home";
  const lines = useMemo(() => 
    [
      "Computer Science Student",
      "Hard Worker",
      "Software Developer",
      "Machine Learning Enthusiast",
      "Full-Stack Developer",
      "Innovative Problem Solver"
    ],[]
  );

  const languages = [
    { name: "JavaScript", color: "rgba(255, 223, 0, 0.03)" },
    { name: "TypeScript", color: "rgba(0, 122, 204, 0.03)" },
    { name: "Python", color: "rgba(0, 123, 255, 0.03)" },
    { name: "Java", color: "rgba(245, 127, 23, 0.03)" },
    { name: "C/C++", color: "rgba(0, 86, 156, 0.03)" },
    { name: "HTML", color: "rgba(255, 87, 34, 0.03)" },
    { name: "CSS", color: "rgba(38, 38, 215, 0.03)" },
    { name: "R", color: "rgba(255, 0, 0, 0.03)" },
    { name: "Racket", color: "rgba(44, 160, 44, 0.03)" }
  ];
  
  const webDevFrameworks = ["React.js", "Node.js", "Express.js", "Next.js", "Flask", "FastAPI"];
  const mlframeworks = ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "TensorFlow", "dplyr", "ggplot2", "OpenCV", "MediaPipe"];
  const testingframeworks = ["JUnit", "Mocha.js", "Chai.js", "PyTest", "Selenium"];
  const tools = ["AWS", "PostgreSQL", "MongoDB", "Postman", "Git", "JupyterLab", "Docker", "SQLAlchemy", "Linux/Unix"];
  const [currentLine, setCurrentLine] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [speed, setSpeed] = useState(100); // Typing/Deleting speed

  useEffect(() => {
    const typeTimeout = setTimeout(() => {
      const currentTitle = lines[index];
      if (!isDeleting) {
        // Typing
        setCurrentLine(currentTitle.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentTitle.length) {
          // Pause before deleting
          setIsDeleting(true);
          setSpeed(1000);
        } else {
          setSpeed(75);
        }
      } else {
        // Deleting
        setCurrentLine(currentTitle.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex - 1 === 0) {
          // Move to next title
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % lines.length); // Loop through titles
          setSpeed(200);
        } else {
          setSpeed(75);
        }
      }
    }, speed);

    return () => clearTimeout(typeTimeout); // Clean up timeout
  }, [charIndex, isDeleting, speed, index, lines]);

  return (
    <div className="home-wrapper">
      <Navbar/>
      <div className="body2">
        <div className="textWrap">
          <motion.div className="hamin"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay:0.3, duration: 0.8}}>
              Hi! I'm <span className="gold-text">Harsh Amin</span>
          </motion.div>
          <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay:0.3, duration: 0.8}}>
            I'm a <span className="gold-text">{currentLine}</span>
            <div className="cursor"></div>
          </motion.h2>
        </div>
      </div>
      <h2 className="about-header">About Me</h2>
      <div className="about-me">
        <img className = "my-flick" src="/logo512.png" alt="Harsh" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et luctus orci. Mauris ligula eros, venenatis et sagittis non, feugiat imperdiet massa. Cras tempor risus vitae leo fringilla interdum. Vestibulum non convallis nisi, accumsan iaculis magna. Vivamus quis massa nisi. Fusce venenatis, orci quis interdum vulputate, ligula mi sagittis augue, a semper lectus enim id ipsum. Integer vitae magna non nibh molestie volutpat at dignissim orci. Aliquam quis sem at quam convallis malesuada sed ac libero. Cras eget imperdiet ipsum, at pharetra erat. Aliquam finibus ipsum id magna faucibus malesuada. Morbi pretium sem sit amet mollis finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec pulvinar dolor a elit scelerisque mollis. Curabitur iaculis, leo eget accumsan mollis, massa lorem facilisis urna, eu rutrum ante risus sit amet tortor. Fusce tincidunt sollicitudin eleifend. Praesent sed libero sed metus pretium pretium finibus vitae arcu.</p>
      </div>
      <h2 className="about-header">Skills</h2>
      <div className="skills">
        
        <div className="languages">
          <h2 className="subheader">Languages</h2>
          <div className="languages-group">
            {languages.map((language, index) => (
              <div key={index}>
                <div  className="skills-card" style = {{}}>
                  <img src={"/skillsimgs/"+language.name + ".png"} alt={language.name} className="skills-image" />
                  
                </div>
                  <p className="skills-name">{language.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="subgroup-one">
          <div className="skills-group">
            <h2 className="subheader">Web Development</h2>
            <div className="web-dev">
              {webDevFrameworks.map((webdev, index) => (
                <div key={index}>
                  <div  className="skills-card" style = {{}}>
                    <img src={"/skillsimgs/"+webdev + ".png"} alt={webdev} className="skills-image" />
                    
                  </div>
                    <p className="skills-name">{webdev}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="ml skills-group">
            <h2 className="subheader">Data Science/Machine Learning</h2>
            <div className="ml-items">
              {mlframeworks.map((ml, index) => (
                <div key={index}>
                  <div  className="skills-card" style = {{}}>
                    <img src={"/skillsimgs/"+ml + ".png"} alt={ml} className="skills-image" />
                    
                  </div>
                    <p className="skills-name">{ml}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="subgroup-two">
          <div className="tools skills-group">
            <h2 className="subheader">Dev Tools</h2>
            <div className="ml-items">
              {tools.map((tool, index) => (
                <div key={index}>
                  <div  className="skills-card" style = {{}}>
                    <img src={"/skillsimgs/"+tool + ".png"} alt={tool} className="skills-image" />
                    
                  </div>
                    <p className="skills-name">{tool}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="testing skills-group">
            <h2 className="subheader">Testing</h2>
            <div className="web-dev">
              {testingframeworks.map((test, index) => (
                <div key={index}>
                  <div  className="skills-card" style = {{}}>
                    <img src={"/skillsimgs/"+test + ".png"} alt={test} className="skills-image" />
                    
                  </div>
                    <p className="skills-name">{test}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
      <Footer/>
    </div>
  );
}

export default Home;