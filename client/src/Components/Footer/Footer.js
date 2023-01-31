import React from "react";
import "./Footer.css";
import footer from "../../images/footer.png";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mb-0">
      <div className="container">
        <div>
          <img src={footer} alt="footer img" />
        </div>
        <div>
          <h3 className="text-right">من نحن</h3>
          <ul>
            <li>
              <Link to="/contactus">تواصل معنا</Link>
            </li>
            <li>
              <Link to="/about">لماذا عقاراتك ؟</Link>
            </li>
            <li>
              <Link to="/about">سياسة الخصوصية</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-right">تواصل معنا</h3>
          <ul>
            <li>
              <AiOutlineMail />
              <p>support@aqaratk.com</p>
            </li>
            <li>
              <AiOutlinePhone />
              <p>+201204505484</p>
            </li>
            <li>
              <AiOutlineWhatsApp />
              <p>+201092908943</p>
            </li>
            <li>
              <FaMapMarkerAlt />
              <p>فيصل , القاهرة</p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
