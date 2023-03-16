import React from "react";

const EducationItem = ({ images, organization, course, period }) => {
  return (
    <div className="flex flex-col justify-between rounded bg-white-lilac p-5 dark:bg-gunmetal sm:py-6">
      <div className="mb-3 flex items-center gap-4">
        <div>
          <img className="w-24" src={images} alt={`Logo ${course}`} />
        </div>
        <h5 className="basis-3/4 font-dmsans text-xs font-normal text-gunmetal dark:text-azureish-white md:text-sm">
          {organization}
        </h5>
      </div>
      <h4 className="title-h4  mb-2 text-gunmetal dark:text-azureish-white">
        {course}
      </h4>
      <p className="title-h5">{period}</p>
    </div>
  );
};

export default EducationItem;
