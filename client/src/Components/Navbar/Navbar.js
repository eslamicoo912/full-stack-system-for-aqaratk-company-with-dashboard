import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../images/logo.png";

export default function Navbar() {
  const [active, setActive] = useState(
    window.location.pathname.replace("/", "")
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <Link className="navbar-brand" to="/">
        <img className="logo" alt="logo img" src={logo} />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li
            className={active === "home" ? "active nav-item" : "nav-item"}
            onClick={() => setActive("home")}
          >
            <Link className="nav-link" to="/">
              الرئيسية
            </Link>
          </li>
          <li
            className={active === "about" ? "active nav-item" : "nav-item"}
            onClick={() => setActive("about")}
          >
            <Link className="nav-link" to="about">
              من نحن ؟
            </Link>
          </li>
          <li
            className={active === "portfolio" ? "active nav-item" : "nav-item"}
            onClick={() => setActive("portfolio")}
          >
            <Link className="nav-link" to="portfolio">
              مشاريعنا
            </Link>
          </li>
          <li
            className={active === "contactus" ? "active nav-item" : "nav-item"}
            onClick={() => setActive("contactus")}
          >
            <Link className="nav-link" to="contactus">
              احجز وحدتك
            </Link>
          </li>
        </ul>
        <form className="search-form my-2 my-lg-0">
          <input
            placeholder="ابحث عن منزل أحلامك"
            className="form-control mr-sm-2"
            type="search"
            aria-label="Search"
          />
          <button className="btn btn-outline-light my-2 my-sm-0" type="submit">
            بحث
          </button>
        </form>
      </div>
    </nav>
  );
}
/*
  return (
    <nav className="navbar">
      <ul>
        <li onClick={() => setActive("home")}>
          <Link to="/">
            <img className="logo" alt="logo img" src={logo} />
          </Link>
        </li>
        <li
          className={active === "home" ? "active" : ""}
          onClick={() => setActive("home")}
        >
          <Link to="/">الرئيسية</Link>
        </li>
        <li
          className={active === "about" ? "active" : ""}
          onClick={() => setActive("about")}
        >
          <Link to="about">من نحن ؟</Link>
        </li>
        <li
          className={active === "portfolio" ? "active" : ""}
          onClick={() => setActive("portfolio")}
        >
          <Link to="portfolio">مشاريعنا</Link>
        </li>
        <li
          className={active === "contactus" ? "active" : ""}
          onClick={() => setActive("contactus")}
        >
          <Link to="contactus">احجز وحدتك</Link>
        </li>
      </ul>
      <div className="search">
        <input placeholder="ابحث عن منزل أحلامك" />
      </div>
    </nav>
  );
  */
