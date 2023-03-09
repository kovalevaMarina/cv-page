import React from "react";
import ProjectItem from "./ProjectItem";
import { project_figma, project_shop } from "../helper/images";
import Circle from "../Icons/Circle";

const projects = [
  {
    img: project_figma,
    title: "Batut - Challenge Everything",
    description:
      "Personal pet project for making new habits. Choose from the existing list of challenges and start doing it!",
    link: "https://batut.pp.ua/",
  },
  {
    img: project_shop,
    title: "Modern Shop Website",
    description:
      "The Store website for buying things online + the ability to add products to the cart.",
    link: "https://kovalevaMarina.github.io/web-store-components/",
  },
];

const Projects = () => {
  return (
    <div className="pb-6 md:relative md:border-l md:border-gunmetal md:pl-6">
      <Circle />
      <h2 className="title-h2 mb-4">Latest projects</h2>
      <div className="flex flex-col gap-2 md:flex-row">
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
