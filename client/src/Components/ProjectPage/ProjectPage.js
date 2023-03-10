import axios from "axios";
import "./ProjectPage.css";
import React, { useEffect, useState } from "react";

export default function ProjectPage() {
  const [project, setProject] = useState();
  const [loading, setLoading] = useState(true);

  const fetchProject = async () => {
    const response = await axios.get(
      `https://aqaratk-app.azurewebsites.net/projects/id${window.location.pathname}`
    );
    setProject(response.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProject();
  }, []);
  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className="project-page">
      <div className="container">
        <img alt="project-img" src={project.img} />
        <div className="info-container">
          <h1>{project.title}</h1>
          <h3>مشروع {project.category}</h3>
          <p className="text-dark">{project.address}</p>
          <p className="text-dark">{project.area} متر</p>
          <p className="text-dark">{project.price} جنيه مصري</p>
          <p className="text-dark description">{project.description}</p>
        </div>
      </div>
    </div>
  );
}
