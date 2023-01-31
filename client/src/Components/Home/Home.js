import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./Home.css";
import axios from "axios";
import ProjectCard from "../ProjectCard/ProjectCard";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProjectsData = async () => {
    const response = await axios.get(
      "https://aqaratk-app.azurewebsites.net/projects"
    );
    const { data } = response;
    setProjects(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProjectsData();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <section className="projects">
        <div className="container">
          <h1>أحدث المشاريع</h1>
          <div className="projects-wrapper">
            {projects.map((project, index) => {
              return <ProjectCard key={index} project={project} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
