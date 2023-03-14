import React from "react";

const SkillItem = ({
  title,
  firstLine,
  secondLine,
  thirdLine,
  colorTextClass,
  icon,
  iconBg,
}) => {
  return (
    <div className="grid basis-1/2">
      <div className="mb-3 flex items-center">
        <div className={`${iconBg} mr-2 rounded-full p-2`}>{icon}</div>
        <h3 className="ml-1 font-dmsans text-base font-normal text-azureish-white">
          {title}
        </h3>
      </div>
      <div
        className={`grid grid-cols-2 gap-1 text-center ${colorTextClass} font-dmsans text-xs font-medium md:text-sm`}
      >
        {firstLine.map((elem, i) => (
          <p
            key={i}
            className={` ${
              i === 0 ? "rounded-tl" : "rounded-tr"
            } bg-gunmetal py-3 px-2 md:py-5 md:px-4 `}
          >
            {elem}
          </p>
        ))}
        <div className="col-span-2 flex justify-between divide-x divide-white divide-opacity-10 bg-gunmetal py-3 px-2 md:py-5 md:px-4">
          {secondLine.map((elem, i) => (
            <p key={i} className="basis-2/4 py-1">
              {elem}
            </p>
          ))}
        </div>
        <div className="col-span-2 flex justify-between divide-x divide-white divide-opacity-10 rounded-b bg-gunmetal py-3 px-2 md:py-5 md:px-4">
          {thirdLine.map((elem, i) => (
            <p key={i} className="basis-1/3 py-1">
              {elem}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
