import React from "react";
import EducationItem from "./EducationItem";
import { coursera, hillel, itvdn, udemy } from "../helper/images";
import Circle from "../Icons/Circle";

const education = [
  {
    images: hillel,
    organization: "Hillel IT school",
    course: "Front-End Basic",
    period: "November - January, 2022",
  },

  {
    images: coursera,
    organization: "Coursera",
    course: "Introduction to Git and GitHub",
    period: "Octobre, 2021",
  },

  {
    images: itvdn,
    organization: "ITVDN - IT Video Developers Network",
    course: "Java Script Starter",
    period: "April, 2022",
  },

  {
    images: udemy,
    organization: "Udemy",
    course: "React - Повний курс по React",
    period: "January - February, 2023",
  },
];

const Education = () => {
  return (
    <div className="relative border-l border-gunmetal pb-6 pl-6">
      <Circle />
      <h2 className="title-h2 mb-4">Education</h2>
      <div className="grid max-w-[346px] grid-cols-3 gap-1">
        {education.map((item, index) => (
          <EducationItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Education;
