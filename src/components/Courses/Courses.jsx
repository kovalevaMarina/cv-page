import React from "react";
import CoursesItem from "./CoursesItem";
import { coursera, hillel, itvdn, udemy } from "../helper/images";
import Circle from "../Icons/Circle";

const courses = [
  {
    images: coursera,
    organization: "Coursera",
    course: "Introduction to Git and GitHub",
    period: "October, 2021",
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
    course: "JavaScript Starter",
    period: "April, 2022",
    linkCertificate: "./itvdn_javascript_starter.pdf",
  },

  {
    images: udemy,
    organization: "Udemy",
    course: "React - Повний курс по React",
    period: "January - February, 2023",
    linkCertificate: "./Udemy_React.pdf",
  },
];

const Courses = () => {
  return (
    <section className="lgxl:pb-8 pb-6 xl:relative xl:border-l xl:border-azureish-white xl:pl-10 dark:xl:border-gunmetal">
      <Circle />
      <h2 className="title-h2 mb-4">Courses</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {courses.map((item, index) => (
          <CoursesItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Courses;
