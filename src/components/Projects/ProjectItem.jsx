import React from "react";
import Link from "../Icons/LinkSimple";

const ProjectItem = ({ img, title, description, link }) => {
  return (
    <div className="flex w-full flex-col rounded-md bg-gunmetal md:w-1/2">
      <img
        className="w-full rounded-t-md object-fill"
        src={img}
        alt={`Image project ${title}`}
      />
      <div className="flex flex-grow flex-col justify-between py-4 px-5">
        <div>
          <h3 className="title-h3 mb-2 text-azureish-white">{title}</h3>
          <p className="mb-3 font-dmsans text-xs font-normal leading-5 text-crayola">
            {description}
          </p>
        </div>
        <div className="flex items-center">
          <div className="mr-1.5 rounded-full bg-cobalt p-2">
            <Link className="h-4 w-4 fill-jordy-blue" />
          </div>
          <a
            className="font-dmsans text-xs font-medium text-jordy-blue transition-all hover:opacity-70 "
            href={link}
            target="_blank"
            title={title}
          >
            {link}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
