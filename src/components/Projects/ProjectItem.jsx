import React from "react";
import Link from "../Icons/LinkSimple";

const ProjectItem = ({ img, title, description, tools, link }) => {
  return (
    <div className="carousel-item w-full flex-col rounded-md bg-azureish-white dark:bg-gunmetal sm:w-2/3 md:w-2/5 transition duration-300 ease-in-out cursor-pointer hover:-translate-y-2.5">
      <img
        className="h-60 max-w-full rounded-t-md object-cover md:h-44 lg:h-52 xl:h-48 2xl:h-52"
        src={img}
        alt={`Image project ${title}`}
      />
      <div className="flex shrink grow basis-auto flex-col justify-between gap-4 py-4 px-5">
        <div>
          <h3 className="title-h3 mb-3 text-gunmetal dark:text-azureish-white">
            {title}
          </h3>
          <p className="font-dmsans text-xs font-normal leading-5 text-waterloo dark:text-crayola">
            {description}
          </p>
        </div>
        <div>
          <div className="mb-4 flex flex-wrap gap-2 text-waterloo dark:text-crayola">
            {tools.map((tool, i) => (
              <div className="badge-outline badge">{tool}</div>
            ))}
          </div>
          <div className="flex items-center">
            <div className="mr-1.5 rounded-full bg-hawkes-blue p-2 dark:bg-cobalt">
              <Link className="h-4 w-4 fill-jordy-blue" />
            </div>
            <a
              className="font-dmsans text-xs font-medium text-ultramarine-blue transition-all hover:opacity-70 dark:text-jordy-blue "
              href={link}
              target="_blank"
              title={title}
            >
              {link}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
