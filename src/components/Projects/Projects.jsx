import React from "react";
import ProjectItem from "./ProjectItem";
import {
  project_batut,
  project_leoshop,
  project_burder_factory,
} from "../helper/images";
import Circle from "../Icons/Circle";
import ArrowRight from "../Icons/ArrowRight";

const projects = [
  {
    img: project_batut,
    title: "Batut - Challenge Everything",
    description:
      "Personal pet project for making new habits. Providing challenge programs, telegram button for sing up and log in on personal profile, get a notification in telegram bot, keep track of the statistics of each challenges.",
    tools: [
      "React",
      "React Context & Hooks",
      "React Router",
      "Vite",
      "JavaScript",
      "SCSS",
      "Eslint",
      "Fetch API",
      "Chart.js",
    ],
    link: "https://batut.pp.ua/",
  },
  {
    img: project_burder_factory,
    title: "Burger Factory",
    description:
      "Personal pet project for making new habits. Choose from the existing list of challenges and start doing it!",
    tools: [
      "React",
      "React Router & Hooks",
      "Vite",
      "JavaScript",
      "Tailwind",
      "DaisyUI",
    ],
    link: "https://kovalevamarina.github.io/burger-factory/",
  },
  {
    img: project_leoshop,
    title: "Modern Shop Website",
    description:
      "The Store website for buying things online + the ability to add products to the cart.",
    tools: [
      "React",
      "React Context & Hooks",
      "React Router",
      "Webpack",
      "JavaScript",
      "SCSS",
    ],
    link: "https://kovalevaMarina.github.io/web-store-components/",
  },
];

const Projects = () => {
  return (
    <section className="pb-6 md:pb-8 xl:relative xl:border-l xl:border-azureish-white xl:pl-10 xl:pb-8 dark:xl:border-gunmetal">
      <Circle />
      <div className="flex items-center justify-between">
        <h2 className="title-h2 mb-4">Latest projects</h2>
        <div className="flex w-24 justify-between">
          <p className="anim text-xs text-waterloo">scroll right</p>
          <ArrowRight />
        </div>
      </div>
      <div className="carousel-center carousel gap-2">
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
