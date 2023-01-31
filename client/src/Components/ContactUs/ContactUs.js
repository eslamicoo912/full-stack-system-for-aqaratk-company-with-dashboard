import React, { createElement, useState } from "react";
import "./ContactUs.css";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import axios from "axios";

export default function ContactUs() {
  const [messageData, setMessageData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    text: "",
  });

  const handleChange = (e) => {
    setMessageData((data) => {
      return {
        ...data,
        [e.target.name]: e.target.value,
      };
    });
  };

  const submitMessage = async (e) => {
    e.preventDefault();
    await axios.post(
      "https://aqaratk-app.azurewebsites.net/messages",
      messageData
    );
    setMessageData({
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      text: "",
    });
    alert("تم إرسال رسالتك");
  };
  return (
    <div className="contactus">
      <div className="contactus-text">
        <h1>تواصل معنا</h1>
        <p>فم بملء النموذج التالي وسيتواصل معك فريقنا لمساعدتك</p>
      </div>
      <div className="contacts">
        <form onSubmit={submitMessage}>
          <h3>تواصل معنا الآن</h3>
          <div className="field-wrapper">
            <input
              name="firstname"
              value={messageData.firstname}
              onChange={handleChange}
              placeholder="الاسم الاول"
            />
          </div>
          <div className="field-wrapper">
            <input
              name="lastname"
              value={messageData.lastname}
              onChange={handleChange}
              placeholder="الاسم الثاني"
            />
          </div>
          <div className="field-wrapper">
            <input
              name="phone"
              value={messageData.phone}
              onChange={handleChange}
              placeholder="رقم الهاتف"
            />
          </div>
          <div className="field-wrapper">
            <input
              name="email"
              value={messageData.email}
              onChange={handleChange}
              placeholder="البريد الالكتروني"
            />
          </div>
          <div className="field-wrapper">
            <textarea
              name="text"
              value={messageData.text}
              onChange={handleChange}
              placeholder="رسالتك"
            ></textarea>
          </div>
          <button type="submit" className="primary-btn">
            إرسال
          </button>
        </form>
        <div className="social-contacts">
          <ul>
            <div className="contact">
              <h3 className="text-right">البريد الالكتروني</h3>
              <li>
                <AiOutlineMail />
                <p>support@aqaratk.com</p>
              </li>
            </div>
            <div className="contact">
              <h3 className="text-right">رقم الهاتف</h3>
              <li>
                <AiOutlinePhone />
                <p>2 01111143363+</p>
              </li>
            </div>
            <div className="contact">
              <h3 className="text-right">رقم الواتساب</h3>
              <li>
                <AiOutlineWhatsApp />
                <p>2 01003797849+</p>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
