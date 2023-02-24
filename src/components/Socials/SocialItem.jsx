import React from "react";

const SocialItem = ({ socailName, link, icon }) => {
  return (
    <li>
      <div style={{ color: "white" }}>{icon}</div>
      <div>
        <h4>{socailName}</h4>
        <a href="#">{link}</a>
      </div>
    </li>
  );
};

export default SocialItem;
