import React from "react";

const ExperienceItem = ({
  period,
  icon,
  place,
  iconCompany,
  position,
  company,
  requirements,
}) => {
  return (
    <div className="mb-2 flex justify-between last:mb-0">
      <div className="w-[120px]">
        <div className="mb-1 flex items-center">
          <div className="block h-0.5 w-0.5 rounded-full bg-crayola"></div>
          <time className="pl-1 font-dmsans text-[5px] font-normal leading-[7px] text-crayola">
            {period}
          </time>
          <div className="ml-1 flex">
            {icon}
            <p className="ml-1 font-dmsans text-[5px] font-normal leading-[7px] text-crayola">
              {place}
            </p>
          </div>
        </div>

        <div className="flex border-l border-gunmetal pl-2">
          <div className="mr-2 flex h-5 w-5 items-center justify-center rounded bg-black">
            {iconCompany}
          </div>
          <div>
            <h4 className="mb-1 font-dmsans text-[6px] font-normal leading-[8px] text-crayola">
              {position}
            </h4>
            <h3 className="font-dmsans text-[7px] font-medium leading-[9px] text-azureish-white">
              {company}
            </h3>
          </div>
        </div>
      </div>
      <div className="w-52">
        <p className="font-dmsans text-[5px] font-normal leading-[7px] text-crayola">
          {requirements}
        </p>
      </div>
    </div>
  );
};

export default ExperienceItem;
