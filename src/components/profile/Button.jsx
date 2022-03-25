import React from "react";
import useStore from "../../context/useStore";
import { useState, useEffect } from "react";

const Button = () => {
  const { theme, setTheme } = useStore();
  return (
  <div className='flex '>
      <input
        type="checkbox"
		    checked={theme}
        className="absolute w-28 h-10 peer appearance-none rounded-md"
        onClick={()=>setTheme(val=>!val)}
        readOnly
      />
      <span class="w-16 h-10 flex items-center  flex-shrink-0 ml-4 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-green-400 after:w-8 after:h-8 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6 group-hover:after:translate-x-1"></span>
    </div>
  );
};

export default Button;
