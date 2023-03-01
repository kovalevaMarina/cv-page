import React from "react";
import LanguegeItem from "../Languages/LanguegeItem";
import Italian from "../Icons/Italian";
import Greece from "../Icons/Greece";
import English from "../Icons/English";
import Ukrainian from "../Icons/Ukrainian";

const langueges = [
  {
    languege: "Italian",
    proficiencyLevel: "Native",
    flag: <Italian className="h-3 w-4 rounded-sm" />,
  },

  {
    languege: "Greek",
    proficiencyLevel: "Native",
    flag: <Greece className="h-3 w-4 rounded-sm" />,
  },

  {
    languege: "English",
    proficiencyLevel: "Professional working",
    flag: <English className="h-3 w-4 rounded-sm" />,
  },

  {
    languege: "Ukrainian",
    proficiencyLevel: "Elementary",
    flag: <Ukrainian className="h-3 w-4 rounded-sm" />,
  },
];

const Langueges = () => {
  return (
    <div className="border-t border-solid border-gunmetal pt-4">
      <h4 className="title-h4 mb-3">Languages</h4>
      <ul>
        {langueges.map((languege, index) => (
          <LanguegeItem key={index} {...languege} />
        ))}
      </ul>
    </div>
  );
};

export default Langueges;
