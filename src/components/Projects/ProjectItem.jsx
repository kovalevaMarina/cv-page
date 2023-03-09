import React from "react";
import Link from "../Icons/LinkSimple";

const ProjectItem = ({ img, title, description, link }) => {
  return (
    <div className="rounded-md bg-gunmetal">
      <img
        className="w-full rounded-t-md"
        src={img}
        alt={`Image project ${title}`}
      />
      <div className="p-3">
        <h3 className="title-h3 mb-2 text-azureish-white">{title}</h3>
        <p className="mb-2 font-dmsans text-xs font-normal leading-5 text-crayola">
          {description}
        </p>
        <div className="flex items-center">
          <div className="mr-1.5 rounded-full bg-cobalt p-2">
            <Link className="h-4 w-4 fill-jordy-blue" />
          </div>
          <a
            className="font-dmsans text-xs font-medium text-jordy-blue "
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
