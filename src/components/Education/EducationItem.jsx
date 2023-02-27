import React from "react";

const EducationItem = ({ images, organization, course, period }) => {
  return (
    <div>
      <div>
        <img className="w-32 h-32" src={images} alt={`Logo ${course}`} />
        <h4>{organization}</h4>
      </div>
      <h3>{course}</h3>
      <p>{period}</p>
    </div>
  );
};

export default EducationItem;
