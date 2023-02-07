import React, { useEffect, useState } from "react";
import "./Header.css";
import house from "../../images/myhouse.png";
import { Link } from "react-router-dom";
import axios from "axios";
import ProjectCard from "../ProjectCard/ProjectCard.js";

export default function Header() {
  const [searchData, setSearchData] = useState({
    country: "",
    category: "",
    area: "",
  });
  const [projects, setProjects] = useState([]);
  const [overlayDisplay, setOverlayDisplay] = useState("none");

  const fetchSearchProjects = async () => {
    const response = await axios.get(
      `https://aqaratk-app.azurewebsites.net/projects/${searchData.category}`
    );
    const searchProjects = response.data.filter(
      (project) => project.area === searchData.area
    );
    setProjects(searchProjects);
    setOverlayDisplay("block");
  };

  const handleChange = (e) => {
    setSearchData((data) => {
      return {
        ...data,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <header className="header">
      <div className="right-side">
        <img src={house} alt="house" />
      </div>
      <div className="left-side">
        <h1>نساعدك على إيجاد عقار أحلامك</h1>
        <p>منزل؟ تجاري؟ لا يهم فأنت مع الخبراء.</p>
        <div className="search">
          <select
            name="category"
            onChange={handleChange}
            className="custom-select"
            value={searchData.category}
          >
            <option value="نوع العقار">نوع العقار</option>
            <option value="سكني">سكني</option>
            <option value="تجاري">تجاري</option>
            <option value="شاليه">شاليه</option>
          </select>
          {/*<select
            name="country"
            onChange={handleChange}
            className="custom-select"
            value={searchData.country}
          >
            <option value="المحافظة">المحافطة</option>
            <option value="القاهرة">القاهرة</option>
            <option value="التجمع">التجمع</option>
            <option value="العبور">العبور</option>
          </select>*/}
          <input
            placeholder="المحافظة"
            name="country"
            value={searchData.country}
            onChange={handleChange}
          />
          <input
            name="area"
            value={searchData.area}
            placeholder="المساحة"
            onChange={handleChange}
          />
          <button onClick={fetchSearchProjects} className="primary-btn">
            بحث
          </button>
        </div>
      </div>
      <div className={overlayDisplay} id="overlay">
        <div className="overlay-container">
          <div className="projects">
            {projects.map((project, index) => {
              return <ProjectCard project={project} key={index} />;
            })}
          </div>
          <button className="close" onClick={() => setOverlayDisplay("none")}>
            إغلاق
          </button>
        </div>
      </div>
    </header>
  );
}
