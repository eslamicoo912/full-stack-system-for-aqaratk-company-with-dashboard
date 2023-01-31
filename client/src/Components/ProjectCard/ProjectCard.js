import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";
export default function ProjectCard({ project }) {
  const { img, title, category, address, area, price } = project;
  return (
    <div className="project text-right">
      <div className="img-container">
        <img src={img} alt="img title" />
      </div>
      <div className="project-title">
        <h4 className="title">{title}</h4>
        <h3>-</h3>
        <h4>{category}</h4>
      </div>
      <div className="project-info">
        <p>{address}</p>
        <p>{area} متر</p>
        <p>{price} ج.م</p>
      </div>
      <button className="primary-btn">
        <Link className="text-white" to="/contactus">
          إحجز اللآن
        </Link>
      </button>
    </div>
  );
}
