import React from "react";
import ExperienceItem from "./ExperienceItem";
import Location from "../Icons/LocationMarker";
import Circle from "../Icons/Circle";
import { dnipro_agro, baza_trainee } from "../helper/images";

const experience = [
  {
    period: "Feb 2016 - Aug 2021",
    icon: <Location className="h-3 w-3" />,
    place: "Dnipro, Ukraine",
    iconCompany: dnipro_agro,
    position: "Manager for Administrative Activities",
    company: "LLC 'UKRTRANSLIT'",
    responsibility:
      "Led contracts with 300 clients per month. Worked with manual documentation. Performed personnel accounting.",
  },

  {
    period: "Apr 2023 - Present",
    icon: <Location className="h-3 w-3" />,
    place: "Kiev, Ukraine (Remote)",
    iconCompany: baza_trainee,
    position: "Frontend Developer",
    company: "Baza Trainee Ukraine",
    responsibility:
      "Implementing UI mocks. Styling UI components. Work with back-end developers to integrate UI components with APIs.",
  },
];

const Experience = () => {
  return (
    <section className="pb-6 md:pb-8 xl:relative xl:border-l xl:border-azureish-white xl:pl-10 xl:pb-8 dark:xl:border-gunmetal">
      <Circle />
      <h2 className="title-h2 mb-4">Experience</h2>
      <div>
        {experience.map((item, index) => (
          <ExperienceItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
