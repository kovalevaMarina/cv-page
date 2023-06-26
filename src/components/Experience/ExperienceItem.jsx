import React from "react";

const ExperienceItem = ({
  period,
  icon,
  place,
  iconCompany,
  position,
  company,
  linkCompany,
  responsibility,
}) => {
  return (
    <div className="mb-5 flex flex-col justify-between pl-1 pb-5 last:mb-0 md:flex-row md:border-b-0 md:pb-0">
      <div className="mb-3 md:mb-0 md:basis-2/4">
        <div className="mb-4 flex items-center">
          <div className="block h-1 w-1 rounded-full bg-gunmetal dark:bg-crayola md:relative md:-left-[2px]"></div>
          <time className="pl-3 font-dmsans text-xs font-normal text-fiord dark:text-crayola md:text-sm">
            {period}
          </time>
          <div className="ml-3 flex items-center">
            {icon}
            <p className="title-h5 ml-1">{place}</p>
          </div>
        </div>

        <div className="flex items-center border-l border-azureish-white pl-3 dark:border-gunmetal">
          <div className="mr-4 flex h-11 w-12 items-center justify-center rounded bg-green-100">
            <img src={iconCompany} alt={`Logo ${company} company`} />
          </div>
          <div>
            <h5 className="title-h5 mb-1">{position}</h5>
            <a href={linkCompany} target="_blank" className="title-h4 text-gunmetal transition-all dark:hover:text-floral hover:text-floral dark:text-azureish-white">
              {company}
            </a>
          </div>
        </div>
      </div>
      <div className="pl-3 md:basis-2/4">
        <p className="font-dmsans text-xs font-normal text-fiord dark:text-crayola md:text-sm">
          {responsibility}
        </p>
      </div>
    </div>
  );
};

export default ExperienceItem;
