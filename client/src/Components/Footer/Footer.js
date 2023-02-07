import React from "react";
import "./Footer.css";
import footer from "../../images/footer.png";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
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
          <div className="social-icons mt-3">
            <a
              target="_blank"
              href="https://www.facebook.com/Aqarattk/"
              className="icon facebook"
              rel="noreferrer"
            >
              <BsFacebook />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/aqratak/?fbclid=IwAR2T-PiY07Oom-EAqubt2qbscT7KiMUKoSPHBl-F7HdJvWihy1HcCC4qO1A"
              className="icon instagram"
              rel="noreferrer"
            >
              <BsInstagram />
            </a>
            <a
              target="_blank"
              href="https://wa.me/+201003797849"
              className="icon whatsapp"
              rel="noreferrer"
            >
              <BsWhatsapp />
            </a>
            <a
              className="icon tiktok"
              target="_blank"
              rel="noreferrer"
              href="https://www.tiktok.com/@aqratak?_t=8ZeevsjIsUg&_r=1"
            >
              <FaTiktok />
            </a>
          </div>
          <ul>
            <li>
              <AiOutlineMail />
              <p>aqratak2030@yahoo.com</p>
            </li>
            <li>
              <AiOutlinePhone />
              <p>01111143363</p>
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
