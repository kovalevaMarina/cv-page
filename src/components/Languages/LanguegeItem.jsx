import React from "react";

const LanguegeItem = ({ languege, proficiencyLevel, flag }) => {
  return (
    <li className="mb-3 flex items-center gap-5">
      <div className="h-8 w-11">{flag}</div>
      <div>
        <h4 className="title-h4 mb-2 text-fiord dark:text-gainsboro">
          {languege}
        </h4>
        <p className="title-h5">{proficiencyLevel}</p>
      </div>
    </li>
  );
};

export default LanguegeItem;
