import React from "react";
import OpenIcon from "../Icons/OpenIcon";

const CoursesItem = ({
  images,
  organization,
  course,
  period,
  linkCertificate,
}) => {
  return (
    <div className="flex flex-col justify-between gap-2 rounded bg-azureish-white p-5 dark:bg-gunmetal sm:py-6">
      <div className="flex items-center gap-4">
        <div>
          <img className="w-24" src={images} alt={`Logo ${course}`} />
        </div>
        <h5 className="basis-3/4 font-dmsans text-xs font-normal text-gunmetal dark:text-azureish-white md:text-sm">
          {organization}
        </h5>
      </div>
      <h4 className="title-h4 text-gunmetal dark:text-azureish-white">
        {course}
      </h4>
      <p className="title-h5">{period}</p>
      {linkCertificate ? (
        <a
          href={linkCertificate}
          target="_blank"
          className="flex max-w-[200px] cursor-pointer items-center justify-between rounded-lg border border-waterloo py-1 px-2 text-waterloo transition duration-200 hover:border-floral hover:text-floral active:bg-floral active:text-white"
        >
          <span className="text-base">Open the certificate</span>
          <OpenIcon />
        </a>
      ) : (
        ""
      )}
    </div>
  );
};

export default CoursesItem;
