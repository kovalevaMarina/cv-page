import React from "react";
import ExperienceItem from "./ExperienceItem";
import Location from "../Icons/LocationMarker";
import Apple from "../Icons/Apple";
import Circle from "../Icons/Circle";

const experience = [
  {
    period: "Jul 20 - Jan 2022",
    icon: <Location className="h-1.5 w-1.5" />,
    place: "Cupertino",
    iconCompany: <Apple className="fill-white" />,
    position: "Front End Developer",
    company: "Apple,Inc.",
    requirements:
      "Omnis minima inventore minus. Aut et incidunt. Aut fugiat culpa illum optio dolorum aut maxime ipsa. Laborum incidunt enim consectetur perspiciatis. Dolore ullam dolor impedit dolorum recusandae facilis quo et. Et ipsam vel sunt qui ut officia voluptatem.",
  },

  {
    period: "Jul 20 - Jan 2022",
    icon: <Location className="h-1.5 w-1.5" />,
    place: "Cupertino",
    iconCompany: <Apple className="fill-white" />,
    position: "Front End Developer",
    company: "Apple,Inc.",
    requirements:
      "Omnis minima inventore minus. Aut et incidunt. Aut fugiat culpa illum optio dolorum aut maxime ipsa. Laborum incidunt enim consectetur perspiciatis. Dolore ullam dolor impedit dolorum recusandae facilis quo et. Et ipsam vel sunt qui ut officia voluptatem.",
  },

  {
    period: "Jul 20 - Jan 2022",
    icon: <Location className="h-1.5 w-1.5" />,
    place: "Cupertino",
    iconCompany: <Apple className="fill-white" />,
    position: "Front End Developer",
    company: "Apple,Inc.",
    requirements:
      "Omnis minima inventore minus. Aut et incidunt. Aut fugiat culpa illum optio dolorum aut maxime ipsa. Laborum incidunt enim consectetur perspiciatis. Dolore ullam dolor impedit dolorum recusandae facilis quo et. Et ipsam vel sunt qui ut officia voluptatem.",
  },
];

const Experience = () => {
  return (
    <div className="relative border-l border-gunmetal pb-6 pl-6">
      <Circle />
      <h2 className="title-h2 mb-4">Experience</h2>
      <div>
        {experience.map((item, index) => (
          <ExperienceItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
