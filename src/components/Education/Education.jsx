import React from "react";
import EducationItem from "./EducationItem";
import { coursera, hillel, itvdn, udemy } from "../helper/images";
import Circle from "../Icons/Circle";

const education = [
  {
    images: coursera,
    organization: "Coursera",
    course: "Introduction to Git and GitHub",
    period: "Octobre, 2021",
  },

  {
    images: hillel,
    organization: "Hillel IT school",
    course: "Front-End Basic",
    period: "November, 2021 - February, 2022",
    linkCertificate: "./61510616_en_hillelbasic.pdf",
  },

  {
    images: hillel,
    organization: "Hillel IT school",
    course: "Front-End Pro",
    period: "April - September, 2022",
    linkCertificate: "./93229650_en_hillelpro.pdf",
  },

  {
    images: itvdn,
    organization: "ITVDN - IT Video Developers Network",
    course: "Java Script Starter",
    period: "April, 2022",
    linkCertificate: "./itvdn_javascript_starter.pdf",
  },

  {
    images: udemy,
    organization: "Udemy",
    course: "React - Повний курс по React",
    period: "January - February, 2023",
    linkCertificate: "./itvdn_javascript_starter.pdf",
  },
];

const Education = () => {
  return (
    <div className="pb-6 lg:relative lg:border-l lg:border-azureish-white lg:pl-10 lg:pb-8 dark:lg:border-gunmetal">
      <Circle />
      <h2 className="title-h2 mb-4">Education</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {education.map((item, index) => (
          <EducationItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Education;
