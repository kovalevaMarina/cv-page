import React from "react";

const LanguegeItem = ({ languege, proficiencyLevel, flag }) => {
  return (
    <li>
      <div>{flag}</div>
      <div>
        <h3>{languege}</h3>
        <p>{proficiencyLevel}</p>
      </div>
    </li>
  );
};

export default LanguegeItem;
