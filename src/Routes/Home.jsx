import React, { useState, useEffect, useRef, useMemo } from "react";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import "../css/Home.css";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
function Home() {
  document.title = "Harsh Amin | Home";
  const lines = useMemo(
    () => [
      " ",
      "Software Developer",
      "Machine Learning Engineer",
      "Cloud Solutions Architect",
      "Innovative Problem Solver",
      "Vibe Coder",
    ],
    [],
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
    { name: "Racket", color: "rgba(44, 160, 44, 0.03)" },
  ];

  const webDevFrameworks = [
    "React.js",
    "Node.js",
    "Express.js",
    "Next.js",
    "Flask",
    "FastAPI",
  ];
  const mlframeworks = [
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Scikit-learn",
    "TensorFlow",
    "dplyr",
    "ggplot2",
    "OpenCV",
    "MediaPipe",
  ];
  const testingframeworks = [
    "JUnit",
    "Mocha.js",
    "Chai.js",
    "PyTest",
    "Selenium",
  ];
  const tools = [
    "AWS",
    "PostgreSQL",
    "MongoDB",
    "Postman",
    "Git",
    "JupyterLab",
    "Docker",
    "SQLAlchemy",
    "Linux/Unix",
  ];
  const [currentLine, setCurrentLine] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [speed, setSpeed] = useState(100); // Typing/Deleting speed
  const About = useRef(null);

  const scrollDown = () => {
    About.current?.scrollIntoView({ behavior: "smooth" });
  };

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
    <div className="home-wrapper min-h-screen flex flex-col flex-grow">
      <Navbar />
      <div className="body2 flex overflow-hidden h-screen px-4">
        <div className="textWrap text-center sm:text-left mt-[20vh] sm:mt-[25vh] md:mt-[30vh] text-[#333] w-full sm:w-auto sm:ml-[5vw] md:ml-[7vw]">
          <motion.div
            className="hamin font-semibold text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[7rem] text-[#062930]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Hi I'm <span className="gold-text">Harsh Amin</span>
          </motion.div>
          <motion.h2
            className="text-[2rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] tracking-[0.5px] sm:tracking-[1px] font-extrabold text-[#062930]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            I'm a <span className="gold-text">{currentLine}</span>
            <div className="cursor h-[30px] sm:h-[30px] md:h-[40px] lg:h-[50px]"></div>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.45, duration: 0.5 }}
          className="absolute bottom-10 flex justify-center w-[95vw] text-center"
        >
          <button
            onClick={scrollDown}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-gray-700 text-opacity-50">
              Scroll to explore
            </span>
            <ArrowDown color="#374151" className="animate-bounce" />
          </button>
        </motion.div>
      </div>

      <motion.h2
        ref={About}
        className="about-header"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <div className="about-me flex flex-col md:flex-row min-h-screen justify-center items-center gap-[10vw]">
        <motion.div
          className="about-image md:w-[40%] flex justify-center items-center"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-[200px] h-[350px] md:w-[350px] md:h-[600px] rounded-full overflow-hidden border-4 border-white shadow-[0px_10px_50px_rgba(225,225,225,0.7)] ring-4 ring-white/30 hover:ring-8 hover:ring-white/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              className="w-full h-full object-cover brightness-125 shadow-lg"
              src="/harsh.png"
              alt="Harsh"
            />
          </motion.div>
        </motion.div>

        <motion.p
          className="about-text w-[80%] md:w-[40%] text-[#333] text-[0.6rem] sm:text-[0.8rem] md:text-[0.8rem] lg:text-[1rem]"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          With a strong foundation in computer science and mathematics, I am
          driven by a passion for solving complex problems and building
          impactful software solutions. Currently pursuing my Bachelor's in
          Computer Science at the University of British Columbia, My variety of
          extracurriculars, coupled with my academic excellence, allow me to
          enjoy and thrive in fast-paced, collaborative environments where
          innovation meets real-world application.
          <br />
          <br />
          From developing AI-powered applications to optimizing cloud-based
          systems, I enjoy tackling challenges that push my technical and
          analytical skills to new heights. My experience spans through
          full-stack development, cloud development, and machine learning, with
          a keen interest in leveraging technology to drive efficiency and
          sustainability. Particularly I'm passionate about working on projects
          that have a tangible impact on people and society.
          <br />
          <br />
          Outside of Computer Science I love to play basketball, hockey, lift
          weights, and listen to new music. Whether it’s on the ice or in front
          of a whiteboard debugging a tough problem, I embrace challenges with
          resilience and curiosity.
        </motion.p>
      </div>
      <motion.h2
        className="about-header"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>
      <div className="skills">
        <motion.div
          className="languages"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="subheader">Languages</h2>
          <div className="languages-group relative flex-col grid grid-cols-3 md:flex md:flex-row items-center justify-center my-[10vh] gap-[4vw]">
            {languages.map((language, index) => (
              <div key={index}>
                <div className="skills-card" style={{}}>
                  <img
                    src={"/skillsimgs/" + language.name + ".png"}
                    alt={language.name}
                    className="skills-image"
                  />
                </div>
                <p className="skills-name">{language.name}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="subgroup-one flex-col md:flex-row">
          <motion.div
            className="skills-group"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="subheader">Web Development</h2>
            <div className="web-dev">
              {webDevFrameworks.map((webdev, index) => (
                <div key={index}>
                  <div className="skills-card" style={{}}>
                    <img
                      src={"/skillsimgs/" + webdev + ".png"}
                      alt={webdev}
                      className="skills-image"
                    />
                  </div>
                  <p className="skills-name">{webdev}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="ml skills-group"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="subheader">Data Science/Machine Learning</h2>
            <div className="ml-items">
              {mlframeworks.map((ml, index) => (
                <div key={index}>
                  <div className="skills-card" style={{}}>
                    <img
                      src={"/skillsimgs/" + ml + ".png"}
                      alt={ml}
                      className="skills-image"
                    />
                  </div>
                  <p className="skills-name">{ml}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="subgroup-two flex-col md:flex-row">
          <motion.div
            className="tools skills-group"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="subheader">Dev Tools</h2>
            <div className="ml-items">
              {tools.map((tool, index) => (
                <div key={index}>
                  <div className="skills-card" style={{}}>
                    <img
                      src={"/skillsimgs/" + tool + ".png"}
                      alt={tool}
                      className="skills-image"
                    />
                  </div>
                  <p className="skills-name">{tool}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="testing skills-group"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="subheader">Testing</h2>
            <div className="web-dev">
              {testingframeworks.map((test, index) => (
                <div key={index}>
                  <div className="skills-card" style={{}}>
                    <img
                      src={"/skillsimgs/" + test + ".png"}
                      alt={test}
                      className="skills-image"
                    />
                  </div>
                  <p className="skills-name">{test}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
