import React from "react";

const ProjectItem = ({ img, title, description, icon, link }) => {
  return (
    <div>
      <img src={img} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        <div>{icon}</div>
        <a href={link}>{link}</a>
      </div>
    </div>
  );
};

export default ProjectItem;
