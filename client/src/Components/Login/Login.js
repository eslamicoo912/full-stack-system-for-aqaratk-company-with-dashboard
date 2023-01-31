import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

export default function Login() {
  const [adminData, setAdminData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setAdminData((data) => {
      return {
        ...data,
        [e.target.name]: e.target.value,
      };
    });
  };

  const loginAsAdmin = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "https://aqaratk-app.azurewebsites.net/login/admin",
      adminData
    );
    const { status } = response.data;
    if (status === 200) {
      sessionStorage.setItem("status", response.status);
      window.location = "/";
    } else {
      setError(response.data.message);
    }
  };
  return (
    <div className="login">
      <form onSubmit={loginAsAdmin}>
        <input
          type="text"
          placeholder="الاسم"
          name="username"
          value={adminData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="كلمة السر"
          name="password"
          value={adminData.password}
          onChange={handleChange}
        />
        {error && <p>{error}</p>}
        <button className="primary-btn" type="submit">
          تسجيل الدخول
        </button>
      </form>
    </div>
  );
}
