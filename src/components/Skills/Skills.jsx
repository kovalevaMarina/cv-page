import React from "react";
import AngleBrackets from "../Icons/AngleBrackets";
import Tools from "../Icons/Tools";
import Circle from "../Icons/Circle";

const skills = [
  {
    title: "Tools",
    firstLine: ["Git", "GitHub"],
    secondLine: ["VS Code", "Figma"],
    thirdLine: ["jQuery", "Pug", "Bootstrap"],
    colorTextClass: "text-pale-violet",
    icon: <Tools className="h-2 w-2 fill-pale-violet" />,
    iconBg: "bg-violet",
  },

  {
    title: "Technologies",
    firstLine: ["React JS", "Tailwind"],
    secondLine: ["Vite", "Webpack"],
    thirdLine: ["HTML", "CSS/SCSS", "JS"],
    colorTextClass: "text-jordy-blue",
    icon: <AngleBrackets className="h-2 w-2 fill-jordy-blue" />,
    iconBg: "bg-cosmic-cobalt",
  },
];

const Skills = () => {
  return (
    <div className="relative border-l border-gunmetal pb-6 pl-6">
      <Circle />
      <h2 className="title-h2 mb-4">Skills</h2>
      <div className="flex gap-3">
        {skills.map((skill, i) => (
          <div className="grid basis-1/2" key={skill.title}>
            <div className="mb-3 flex items-center">
              <div className={`${skill.iconBg} rounded-full p-1`}>
                {skill.icon}
              </div>
              <h3 className="ml-1 font-dmsans text-[7px] font-normal leading-[9px] text-azureish-white">
                {skill.title}
              </h3>
            </div>
            <div
              className={`grid grid-cols-2 gap-1 text-center ${skill.colorTextClass}`}
            >
              {skill.firstLine.map((elem, i) => (
                <p
                  key={i}
                  className={` ${
                    i === 0 ? "rounded-tl" : "rounded-tr"
                  } leading-[9px bg-gunmetal py-3 px-2 font-dmsans text-[7px] font-medium`}
                >
                  {elem}
                </p>
              ))}
              <div className="col-span-2 flex justify-between divide-x divide-white divide-opacity-10 bg-gunmetal py-3 px-2">
                {skill.secondLine.map((elem, i) => (
                  <p
                    key={i}
                    className="basis-2/4 py-1 font-dmsans text-[7px] font-medium leading-[9px]"
                  >
                    {elem}
                  </p>
                ))}
              </div>
              <div className="col-span-2 flex justify-between divide-x divide-white divide-opacity-10 rounded-b bg-gunmetal py-3 px-2">
                {skill.thirdLine.map((elem, i) => (
                  <p
                    key={i}
                    className="basis-1/3 py-1 font-dmsans text-[7px] font-medium leading-[9px]"
                  >
                    {elem}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
