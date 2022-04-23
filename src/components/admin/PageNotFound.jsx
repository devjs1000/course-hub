import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-primary-color-light flex justify-center items-center text-[40px] font-bold">
      <main className="h-screen w-full flex flex-col justify-center items-center ">
        <h1 className="text-9xl font-extrabold text-gray-300 tracking-widest">
          404
        </h1>
        <div className="bg-black text-gray-200 px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>
        <button className="mt-5">
          <a className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0" />
            <span className="relative block px-8 py-3 bg-black text-gray-200 border border-current">
              <Link to="/">Go Home</Link>
            </span>
          </a>
        </button>
      </main>
    </div>
  );
};

export default PageNotFound;
