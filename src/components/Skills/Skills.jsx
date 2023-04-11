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
    icon: <Tools className="h-4 w-4 fill-violet dark:fill-pale-violet" />,
    iconBg: "dark:bg-violet bg-pale-violet",
  },

  {
    title: "Technologies",
    firstLine: ["React JS", "Tailwind"],
    secondLine: ["Vite", "Webpack"],
    thirdLine: ["HTML", "CSS/SCSS", "JS"],
    colorTextClass: "text-jordy-blue",
    icon: (
      <AngleBrackets className="h-4 w-4 fill-cosmic-cobalt dark:fill-jordy-blue" />
    ),
    iconBg: "dark:bg-cosmic-cobalt bg-jordy-blue",
  },
];

const Skills = () => {
  return (
    <section className="pb-6 xl:relative xl:border-l xl:border-azureish-white xl:pb-8 xl:pl-10 dark:xl:border-gunmetal">
      <Circle />
      <h2 className="title-h2 mb-4">Skills</h2>
      <div className="flex flex-col gap-3 sm:flex-row">
        {skills.map((skill, i) => (
          <SkillItem key={`${skill.title}-${i}`} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
