import React from "react";

const ContactItem = ({ title, text, icon }) => {
  return (
    <li className="mb-3 flex items-center">
      <div className="mr-5 rounded-full bg-gunmetal p-2">{icon}</div>
      <div>
        <h4 className="title-h4">{title}</h4>
        <a className="font-dmsans text-xs font-medium text-gainsboro" href="#">
          {text}
        </a>
      </div>
    </li>
  );
};

export default ContactItem;
