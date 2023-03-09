import React from "react";

const ExperienceItem = ({
  period,
  icon,
  place,
  iconCompany,
  position,
  company,
  responsibility,
}) => {
  return (
    <div className="mb-5 flex flex-col justify-between border-b border-gunmetal pl-1 pb-5 last:mb-0 md:mb-2 md:flex-row md:border-b-0 md:pb-0">
      <div className="mb-2 md:mb-0 md:basis-2/4">
        <div className="mb-2 flex items-center">
          <div className="relative -left-[2px] block h-1 w-1 rounded-full bg-crayola"></div>
          <time className="title-h5 pl-2">{period}</time>
          <div className="ml-3 flex items-center">
            {icon}
            <p className="title-h5 ml-1">{place}</p>
          </div>
        </div>

        <div className="flex pl-2 md:border-l md:border-gunmetal">
          <div className="mr-2 flex h-11 w-12 items-center justify-center rounded bg-green-100">
            <img src={iconCompany} alt="" />
          </div>
          <div>
            <h5 className="title-h5 mb-1">{position}</h5>
            <h4 className="title-h4 text-azureish-white">{company}</h4>
          </div>
        </div>
      </div>
      <div className="pl-2 md:basis-2/4">
        <p className="font-dmsans text-xs font-normal text-crayola">
          {responsibility}
        </p>
      </div>
    </div>
  );
};

export default ExperienceItem;
