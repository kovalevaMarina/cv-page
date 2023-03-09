import React from "react";
import AngleBrackets from "../Icons/AngleBrackets";
import Tools from "../Icons/Tools";
import Circle from "../Icons/Circle";
import SkillItem from "./SkillItem";

const skills = [
  {
    title: "Tools",
    firstLine: ["Git", "GitHub"],
    secondLine: ["VS Code", "Figma"],
    thirdLine: ["jQuery", "Pug", "Bootstrap"],
    colorTextClass: "text-pale-violet",
    icon: <Tools className="h-4 w-4 fill-pale-violet" />,
    iconBg: "bg-violet",
  },

  {
    title: "Technologies",
    firstLine: ["React JS", "Tailwind"],
    secondLine: ["Vite", "Webpack"],
    thirdLine: ["HTML", "CSS/SCSS", "JS"],
    colorTextClass: "text-jordy-blue",
    icon: <AngleBrackets className="h-4 w-4 fill-jordy-blue" />,
    iconBg: "bg-cosmic-cobalt",
  },
];

const Skills = () => {
  return (
    <div className="pb-6 md:relative md:border-l md:border-gunmetal md:pl-6">
      <Circle />
      <h2 className="title-h2 mb-4">Skills</h2>
      <div className="flex flex-col gap-3 md:flex-row">
        {skills.map((skill, i) => (
          <SkillItem key={`${skill.title}-${i}`} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
