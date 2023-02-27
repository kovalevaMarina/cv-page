import React from "react";
import Figma from "../Icons/FigmaLogo";
import Link from "../Icons/LocationMarker";
import ProjectItem from "./ProjectItem";
import { project_figma, project_shop } from "../helper/images";

const projects = [
  {
    img: project_figma,
    title: "Poweful Design System",
    description:
      "Figma UI Kit and Design System targeting a wide variety of use cases.",
    icon: <Figma />,
    link: "https//figma.com",
  },
  {
    img: project_shop,
    title: "Modern Website",
    description:
      "Powerful website + dashboard template for your next Chakra UI project.",
    icon: <Link />,
    link: "https://ui-8.net",
  },
];

const Projects = () => {
  return (
    <div className="contacts">
      <h2>Latest projects</h2>
      <div>
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
