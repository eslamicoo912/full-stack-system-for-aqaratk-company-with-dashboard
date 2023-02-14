import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [overlayDisplay, setOverlayDisplay] = useState("none");
  const [currentMessage, setCurrentMessage] = useState("");
  const [editingFormVisibility, setEditingFormVisibility] = useState(false);
  const [editingFormData, setEditingFormData] = useState({
    id: "",
    contacted: "",
    comment: "",
    adminName: "",
  });
  const [loading, setLoading] = useState(true);

  const fetchMessages = async () => {
    const response = await axios.get(
      "https://aqaratk-app.azurewebsites.net/messages"
    );
    setMessages(response.data);
    setLoading(false);
  };

  const deleteMessage = async (_id) => {
    await axios.delete(`https://aqaratk-app.azurewebsites.net/messages/${_id}`);
    fetchMessages();
  };

  const handleChange = (e) => {
    setEditingFormData((data) => {
      return {
        ...data,
        [e.target.name]: e.target.value,
      };
    });
  };

  const updateMessgae = async () => {
    await axios.patch(
      `https://aqaratk-app.azurewebsites.net/messages/${editingFormData.id}`,
      editingFormData
    );
    setEditingFormVisibility(false);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  } else {
    if (editingFormVisibility) {
      return (
        <div className="messages">
          <form onSubmit={updateMessgae}>
            <input
              placeholder="تم التواصل ام لا"
              name="contacted"
              value={editingFormData.contacted}
              onChange={handleChange}
            />
            <input
              placeholder="التعليق"
              name="comment"
              value={editingFormData.comment}
              onChange={handleChange}
            />
            <input
              placeholder="اسم المتواصل"
              name="adminName"
              value={editingFormData.adminName}
              onChange={handleChange}
            />
            <button className="btn btn-success" type="submit">
              تحديث
            </button>
          </form>
        </div>
      );
    }

    return (
      <div className="messages">
        <table>
          <thead className="bg-dark text-light text-center">
            <th>الاسم الاول</th>
            <th>الاسم الاخير</th>
            <th>رقم الهاتف</th>
            <th>البريد الالكتروني</th>
            <th>الرسالة</th>
            <th>تم التواصل</th>
            <th>التعليق</th>
            <th>المتواصل</th>
            <th>تحديث</th>
            <th>حذف</th>
          </thead>
          {messages.map((message, index) => {
            const {
              _id,
              firstname,
              lastname,
              phone,
              email,
              text,
              contacted,
              comment,
              adminName,
            } = message;
            return (
              <tr key={index} className="message">
                <td>{firstname}</td>
                <td>{lastname}</td>
                <td>{phone}</td>
                <td>{email}</td>
                <td>
                  <button
                    className="show"
                    onClick={() => {
                      setCurrentMessage(text);
                      setOverlayDisplay("block");
                    }}
                  >
                    إظهار
                  </button>
                  <div className={overlayDisplay} id="overlay">
                    <div className="container">
                      {currentMessage === "" ? (
                        <h5>الرسالة فارغة</h5>
                      ) : (
                        <h5>{currentMessage}</h5>
                      )}
                      <button
                        className="close"
                        onClick={() => setOverlayDisplay("none")}
                      >
                        إغلاق
                      </button>
                    </div>
                  </div>
                </td>
                <td>{contacted}</td>
                <td>{comment}</td>
                <td>{adminName}</td>
                <td>
                  <button
                    className="primary-btn"
                    onClick={() => {
                      setEditingFormData({
                        id: message._id,
                        contacted: message.contacted,
                        comment: message.comment,
                        adminName: message.adminName,
                      });
                      setEditingFormVisibility(true);
                    }}
                  >
                    تحديث
                  </button>
                </td>
                <td>
                  <button className="delete" onClick={() => deleteMessage(_id)}>
                    حذف
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}
