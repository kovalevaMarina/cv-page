import React from "react";

const EducationItem = ({ images, organization, course, period }) => {
  return (
    <div className="flex flex-col justify-between rounded bg-gunmetal py-2 px-3">
      <div className="mb-1 flex items-center gap-2">
        <div className="h-6 w-6">
          <img className="w-full" src={images} alt={`Logo ${course}`} />
        </div>
        <h4 className="font-dmsans text-[6px] font-medium leading-[8px] text-azureish-white">
          {organization}
        </h4>
      </div>
      <h3 className="mb-0.5 font-dmsans text-[7px] font-medium leading-[9px] text-azureish-white">
        {course}
      </h3>
      <p className="font-dmsans text-[5px] font-normal leading-[7px] text-crayola">
        {period}
      </p>
    </div>
  );
};

export default EducationItem;
