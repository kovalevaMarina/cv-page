import React from "react";

const ContactItem = ({ title, text, icon }) => {
  return (
    <li className="flex items-center mb-3">
      <div className="p-1 bg-gunmetal rounded-full mr-2">{icon}</div>
      <div>
        <h4 className="font-dmsans font-normal text-[7px] text-crayola">
          {title}
        </h4>
        <a className="font-dmsans text-[8px] text-gainsboro" href="#">
          {text}
        </a>
      </div>
    </li>
  );
};

export default ContactItem;
