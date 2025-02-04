import React from "react";
import Footer from "../Components/Footer";
import "../css/Projects.css";

function Projects() {

  const webDevFrameworks = ["React.js", "Node.js", "Express.js", "Next.js", "Flask", "FastAPI"];

  return (
    <div>
      <div>Projects</div>

      <div className="subgroup-one">
          <div className="skills-group">
            <h2 className="subheader">Web Development Frameworks</h2>
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
            <h2 className="subheader">Data Science/ML Frameworks</h2>
          </div>
        </div>
      <Footer />
    </div>
  );
}

export default Projects;