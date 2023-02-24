import React from "react";

const ContactItem = ({ title, text, icon }) => {
  return (
    <li>
      <div style={{ color: "white" }}>{icon}</div>
      <div>
        <h4>{title}</h4>
        <a href="#">{text}</a>
      </div>
    </li>
  );
};

export default ContactItem;
