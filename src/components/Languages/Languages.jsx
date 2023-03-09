import React from "react";
import LanguegeItem from "../Languages/LanguegeItem";
import English from "../Icons/English";
import Ukrainian from "../Icons/Ukrainian";

const langueges = [
  {
    languege: "English",
    proficiencyLevel: "Intermediate",
    flag: <English className="h-full w-full rounded-lg" />,
  },

  {
    languege: "Ukrainian",
    proficiencyLevel: "Native",
    flag: <Ukrainian className="h-full w-full rounded-lg" />,
  },
];

const Langueges = () => {
  return (
    <div className="border-t border-solid border-gunmetal pt-4">
      <h5 className="title-h5 mb-3">Languages</h5>
      <ul>
        {langueges.map((languege, index) => (
          <LanguegeItem key={index} {...languege} />
        ))}
      </ul>
    </div>
  );
};

export default Langueges;
