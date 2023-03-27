import React from "react";

const SocialItem = ({ socialName, link, linkHref, icon, colorClass }) => {
  return (
    <li className="mb-3 flex items-center">
      <div className={`mr-5 rounded-full ${colorClass} p-2`}>{icon}</div>
      <div>
        <h5 className="title-h5">{socialName}</h5>
        <a
          className="font-dmsans text-xs font-medium text-fiord transition-all hover:text-floral dark:text-gainsboro dark:hover:text-floral md:text-sm"
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
