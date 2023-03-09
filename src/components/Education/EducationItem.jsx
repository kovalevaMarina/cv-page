import React from "react";

const EducationItem = ({ images, organization, course, period }) => {
  return (
    <div className="px- flex flex-col justify-between rounded bg-gunmetal py-5 px-4">
      <div className="mb-3 flex items-center gap-4">
        <div className="h-11 w-11">
          <img className="w-full" src={images} alt={`Logo ${course}`} />
        </div>
        <h5 className="font-dmsans text-xs font-normal text-azureish-white">
          {organization}
        </h5>
      </div>
      <h4 className="title-h4  mb-2 text-azureish-white">{course}</h4>
      <p className="title-h5">{period}</p>
    </div>
  );
};

export default EducationItem;
