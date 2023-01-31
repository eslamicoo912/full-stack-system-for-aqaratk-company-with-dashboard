import React, { createContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home.js";
import About from "./Components/About/About.js";
import Portfolio from "./Components/Portfolio/Portfolio.js";
import ContactUs from "./Components/ContactUs/ContactUs.js";
import Footer from "./Components/Footer/Footer.js";
import Login from "./Components/Login/Login.js";
import Menu from "./Components/Dashboard/Menu";
import Projects from "./Components/Dashboard/Projects";
import Messages from "./Components/Dashboard/Messages";

export const AppContext = createContext(null);

export default function App() {
  const sessionStatus = sessionStorage.getItem("status");
  if (sessionStatus == 200)
    return (
      <div className="Dashboard">
        <Router>
          <Menu />
          <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/messages" element={<Messages />} />
          </Routes>
        </Router>
      </div>
    );
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/admin" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
