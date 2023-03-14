import React from "react";

const ContactItem = ({ title, text, linkHref, icon }) => {
  return (
    <li className="mb-3 flex items-center">
      <div className="mr-5 rounded-full bg-gunmetal p-2">{icon}</div>
      <div>
        <h5 className="title-h5">{title}</h5>
        <a
          className="font-dmsans text-xs font-medium text-gainsboro transition-all hover:text-floral md:text-sm"
          href={linkHref}
          target="_blank"
        >
          {text}
        </a>
      </div>
    </li>
  );
};

export default ContactItem;
