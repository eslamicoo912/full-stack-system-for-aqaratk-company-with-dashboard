import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";
export default function ProjectCard({ project }) {
  const { _id, img, title, category, address, area, price } = project;
  return (
    <div className="project text-right">
      <Link to={`/${_id}`} className="img-container">
        <img src={img} alt="img title" />
      </Link>
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

      <Link className="text-white" to="/contactus">
        <button className="primary-btn ">إحجز اللآن</button>
      </Link>
    </div>
  );
}
