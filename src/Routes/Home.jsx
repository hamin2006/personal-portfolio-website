import React, {useState, useEffect, useMemo} from "react";
import "../css/Home.css"
import Footer from "../Components/Footer";
function Home() {
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
    <div>
      <div className="body2">
        <div className="textWrap">
          <h1>Hi! I'm <span className="gold-text">Harsh Amin</span></h1>
          <h2>
            I'm a <span className="gold-text">{currentLine}</span>
            <div className="cursor"></div>
          </h2>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;