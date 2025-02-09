import React from "react";
import Footer from "../Components/Footer";
import ProjectCard from "../Components/ProjectCard";
import "../css/Projects.css";

function Projects() {


  return (
    <div>
      <div className = "random" >Projects</div>
      <ProjectCard 
        title="My Amazing Project"
        description="A short description of the amazing project."
        image="https://www.shutterstock.com/shutterstock/photos/2000850218/display_1500/stock-vector-vision-and-ideas-as-creative-project-selection-for-business-outline-concept-innovation-2000850218.jpg"
        link="https://www.example.com"
      />
      <Footer />
    </div>
  );
}

export default Projects;