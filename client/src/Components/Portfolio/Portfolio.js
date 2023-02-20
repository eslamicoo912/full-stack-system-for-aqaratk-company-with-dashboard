import React, { useEffect, useState } from "react";
import "./Portfolio.css";
import axios from "axios";
import ProjectCard from "../ProjectCard/ProjectCard";

export default function Projects() {
  const [housingProjects, setHousingProjects] = useState([]);
  const [commercialProjects, setCommercialProjects] = useState([]);
  const [chaletProjects, setChaletProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    const housingResponse = await axios.get(
      "https://aqaratk-app.azurewebsites.net/projects/category/سكني"
    );
    const commercialResponse = await axios.get(
      "https://aqaratk-app.azurewebsites.net/projects/category/تجاري"
    );
    const chaletResponse = await axios.get(
      "https://aqaratk-app.azurewebsites.net/projects/category/شاليه"
    );
    setHousingProjects(housingResponse.data);
    setCommercialProjects(commercialResponse.data);
    setChaletProjects(chaletResponse.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className="portoflio">
      <div className="container">
        <div className="category">
          <h1>مشاريع سكنية</h1>
          <div className="projects-wrapper">
            {housingProjects.map((project, index) => {
              return <ProjectCard key={index} project={project} />;
            })}
          </div>
        </div>
        <div className="category">
          <h1>مشاريع تجارية</h1>
          <div className="projects-wrapper">
            {commercialProjects.map((project, index) => {
              return <ProjectCard key={index} project={project} />;
            })}
          </div>
        </div>
        <div className="category">
          <h1>شاليهات</h1>
          <div className="projects-wrapper">
            {chaletProjects.map((project, index) => {
              return <ProjectCard key={index} project={project} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
