import React from "react";

const LanguegeItem = ({ languege, proficiencyLevel, flag }) => {
  return (
    <li className="mb-3 flex items-center">
      <div className="mr-2 h-3 w-4 rounded-md">{flag}</div>
      <div>
        <h3 className="title-h3 text-gainsboro">{languege}</h3>
        <p className="title-h4">{proficiencyLevel}</p>
      </div>
    </li>
  );
};

export default LanguegeItem;
