import React from "react";

const SocialItem = ({ socialName, link, linkHref, icon, colorClass }) => {
  return (
    <li className="mb-3 flex items-center">
      <div className={`mr-5 rounded-full ${colorClass} p-2`}>{icon}</div>
      <div>
        <h4 className="title-h4">{socialName}</h4>
        <a
          className="font-dmsans text-xs font-medium text-gainsboro"
          href={linkHref}
          target="_blank"
        >
          {link}
        </a>
      </div>
    </li>
  );
};

export default SocialItem;
