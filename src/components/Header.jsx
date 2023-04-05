import React from "react";
import Moon from "../components/Icons/Moon";
import Sun from "../components/Icons/Sun";

const Header = ({ darkMode, setDarkMode }) => {
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="flex justify-end py-2 lg:pr-6">
      <button
        onClick={toggleDarkMode}
        className="rounded-lg p-1 transition-all hover:bg-azureish-white dark:hover:bg-gunmetal"
      >
        {darkMode ? (
          <Moon className="h-6 w-6 fill-crayola" />
        ) : (
          <Sun className="h-6 w-6 fill-crayola" />
        )}
      </button>
    </div>
  );
};

export default Header;
