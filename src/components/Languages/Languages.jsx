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
    flag: <Italian />,
  },

  {
    languege: "Greek",
    proficiencyLevel: "Native",
    flag: <Greece />,
  },

  {
    languege: "English",
    proficiencyLevel: "Professional working",
    flag: <English />,
  },

  {
    languege: "Ukrainian",
    proficiencyLevel: "Elementary",
    flag: <Ukrainian />,
  },
];

const Langueges = () => {
  return (
    <div className="languages">
      <h3>Languages</h3>
      <ul>
        {langueges.map((languege, index) => (
          <LanguegeItem key={index} {...languege} />
        ))}
      </ul>
    </div>
  );
};

export default Langueges;
