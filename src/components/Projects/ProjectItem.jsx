import React from "react";

const ProjectItem = ({ img, title, description, icon, link }) => {
  return (
    <div className="max-w-[172px] rounded bg-gunmetal">
      <img className="w-full" src={img} alt={`Image project ${title}`} />
      <div className="p-3">
        <h3 className="title-h3 text-azureish-white">{title}</h3>
        <p className="mb-2 font-dmsans text-[7px] font-normal leading-[9px] text-crayola">
          {description}
        </p>
        <div className="flex items-center">
          <div className="mr-1.5 rounded-full bg-cobalt p-0.5">{icon}</div>
          <a
            className="font-dmsans text-[8px] font-medium leading-[10px] text-jordy-blue "
            href={link}
          >
            {link}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
