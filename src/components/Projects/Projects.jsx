import React from "react";
import ProjectItem from "./ProjectItem";
import {
  project_batut,
  project_leoshop,
  project_burder_factory,
} from "../helper/images";
import Circle from "../Icons/Circle";

const projects = [
  {
    img: project_batut,
    title: "Batut - Challenge Everything",
    description:
      "Personal pet project for making new habits. Choose from the existing list of challenges and start doing it!",
    link: "https://batut.pp.ua/",
  },
  {
    img: project_burder_factory,
    title: "Burger Factory",
    description:
      "Personal pet project for making new habits. Choose from the existing list of challenges and start doing it!",
    link: "https://batut.pp.ua/",
  },
  {
    img: project_leoshop,
    title: "Modern Shop Website",
    description:
      "The Store website for buying things online + the ability to add products to the cart.",
    link: "https://kovalevaMarina.github.io/web-store-components/",
  },
];

const Projects = () => {
  return (
    <section className="pb-6 md:pb-8 xl:relative xl:border-l xl:border-azureish-white xl:pl-10 xl:pb-8 dark:xl:border-gunmetal">
      <Circle />
      <h2 className="title-h2 mb-4">Latest projects</h2>
      <div className="carousel-center carousel gap-2">
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
