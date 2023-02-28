import React from "react";

const SocialItem = ({ socialName, link, icon, colorClass }) => {
  return (
    <li className="mb-3 flex items-center">
      <div className={`mr-2 rounded-full bg-${colorClass} p-1`}>{icon}</div>
      <div>
        <h4 className="title-h4">{socialName}</h4>
        <a
          className="font-dmsans text-[8px] font-medium text-gainsboro"
          href="#"
        >
          {link}
        </a>
      </div>
    </li>
  );
};

export default SocialItem;
