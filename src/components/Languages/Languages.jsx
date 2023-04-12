import React from "react";
import LanguegeItem from "../Languages/LanguegeItem";
import English from "../Icons/English";
import Ukrainian from "../Icons/Ukrainian";

const langueges = [
  {
    languege: "English",
    proficiencyLevel: "Intermediate",
    flag: <English className="h-full w-full" />,
  },

  {
    languege: "Ukrainian",
    proficiencyLevel: "Native",
    flag: <Ukrainian className="h-full w-full" />,
  },
];

const Langueges = () => {
  return (
    <section>
      <h5 className="title-h5 mb-3">Languages</h5>
      <ul>
        {langueges.map((languege, index) => (
          <LanguegeItem key={index} {...languege} />
        ))}
      </ul>
    </section>
  );
};

export default Langueges;
