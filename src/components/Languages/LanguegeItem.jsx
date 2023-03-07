import React from "react";

const LanguegeItem = ({ languege, proficiencyLevel, flag }) => {
  return (
    <li className="mb-3 flex items-center gap-5">
      <div className="h-7 w-12">{flag}</div>
      <div>
        <h3 className="title-h3 mb-2 text-gainsboro">{languege}</h3>
        <p className="title-h4">{proficiencyLevel}</p>
      </div>
    </li>
  );
};

export default LanguegeItem;
