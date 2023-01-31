import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineMessage,
} from "react-icons/ai";
import { MdDashboard, MdOutlineLogout } from "react-icons/md";
import "./Dashboard.css";

export default function Menu() {
  return (
    <nav className="menu">
      <div className="head">
        <MdDashboard className="icon" />
        <h3>عقاراتك</h3>
      </div>
      <ul>
        <li>
          <AiOutlineFundProjectionScreen className="icon" />
          <Link to="/">المشاريع</Link>
        </li>
        <li>
          <AiOutlineMessage className="icon" />
          <Link to="/messages">الرسائل</Link>
        </li>
        <li>
          <MdOutlineLogout className="icon" />
          <Link
            to="/"
            onClick={() => {
              sessionStorage.clear();
              window.location = "/";
            }}
          >
            تسجيل الخروج
          </Link>
        </li>
      </ul>
    </nav>
  );
}
