import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import "./Dashboard.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [visibleForm, setVisibleForm] = useState(null);
  const [editTitle, setEditTitle] = useState(null);
  const [formData, setFormData] = useState({
    img: "",
    title: "",
    category: "",
    adress: "",
    area: "",
    price: 0,
  });
  const [loading, setLoading] = useState(true);

  const getProjects = async () => {
    const getProjects = await axios.get(
      "https://aqaratk-app.azurewebsites.net/projects"
    );
    setProjects(getProjects.data);
    setLoading(false);
  };

  useEffect(() => {
    getProjects();
  }, [visibleForm]);

  const { img, title, category, address, area, price } = formData;

  const handleChange = (e) => {
    setFormData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    if (visibleForm === "add")
      await axios.post(
        "https://aqaratk-app.azurewebsites.net/projects",
        formData
      );
    if (visibleForm === "edit") {
      const project = projects.filter((pro) => pro.title === editTitle);
      console.log(project);
      await axios.patch(
        `https://aqaratk-app.azurewebsites.net/projects/${project[0]._id}`,
        formData
      );
    }
    setVisibleForm(null);
    getProjects();
  };

  const deleteProject = async (title) => {
    const project = projects.filter((pro) => pro.title === title);
    await axios.delete(
      `https://aqaratk-app.azurewebsites.net/projects/${project[0]._id}`
    );
    getProjects();
  };

  const getTitle = (title) => {
    setEditTitle(title);
  };

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  } else {
    if (visibleForm)
      return (
        <div className="projects">
          <form onSubmit={handleSubmit}>
            <h4>بيانات المشروع</h4>
            <input
              placeholder="رابط الصورة"
              value={img}
              name="img"
              onChange={handleChange}
            />
            <input
              placeholder="اسم المشروع"
              value={title}
              name="title"
              onChange={handleChange}
            />
            <select
              name="category"
              onChange={handleChange}
              className="custom-select"
              value={category}
            >
              <option value="نوع العقار">نوع العقار</option>
              <option value="سكني">سكني</option>
              <option value="تجاري">تجاري</option>
              <option value="شاليه">شاليه</option>
            </select>
            <input
              placeholder="العنوان"
              value={address}
              name="address"
              onChange={handleChange}
            />
            <input
              placeholder="المساحة - "
              value={area}
              name="area"
              onChange={handleChange}
            />
            <input
              placeholder="السعر"
              value={price}
              name="price"
              onChange={handleChange}
            />
            <div className="btns-container">
              <button className="btn text-light" type="submit">
                {visibleForm === "add" ? "اضافة المشروع" : "تعديل المشروع"}
              </button>
              <button
                className="cancel btn btn-warning text-light"
                onClick={() => setVisibleForm(null)}
              >
                الغاء
              </button>
            </div>
          </form>
        </div>
      );
    return (
      <div className="projects">
        <button
          className="btn btn-success"
          onClick={() => {
            setVisibleForm("add");
            setFormData("");
          }}
        >
          مشروع جديد
        </button>
        <div className="container">
          <div className="projects-wrapper">
            {projects &&
              projects.map((project, index) => {
                const { img, title, category, address, area, price } = project;
                return (
                  <div key={index} className="project">
                    <div className="img-container">
                      <img src={img} alt="img title" />
                    </div>
                    <div className="project-title py-2">
                      <h3 className="title">{title}</h3>
                      <h3>-</h3>
                      <h3>{category}</h3>
                    </div>
                    <p>{address}</p>
                    <p>{area}</p>
                    <p>{price} ج.م</p>
                    <div className="btns-container">
                      <button
                        className="delete"
                        onClick={() => deleteProject(project.title)}
                      >
                        <MdDelete className="icon" />
                      </button>
                      <button
                        className="edit"
                        onClick={() => {
                          setVisibleForm("edit");
                          getTitle(project.title);
                          setFormData(project);
                        }}
                      >
                        <FiEdit className="icon" />
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}
