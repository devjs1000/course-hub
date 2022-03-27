import React from "react";
import useStore from "../../context/useStore";
import { useState, useEffect } from "react";

const Button = () => {
  const { theme, setTheme } = useStore();
  function toggleTheme() {
    setTheme((val) => !val);
  }

  const toggleClass = " transform translate-x-5";

  return (

    <div
      className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer"
      onClick={toggleTheme}
    >
      <div
        className={
          "bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform" +
          (theme ? toggleClass : null)
        }
      ></div>

    </div>
  );
};

export default Button;
