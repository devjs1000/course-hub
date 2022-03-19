import React, { useEffect, useLayoutEffect, useState } from "react";
import { ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import useStore from "../../../service/context/useStore";

const Navside = ({ navLinks, showNavside, setShowNavside }) => {
  const { user } = useStore();
  const [navSlide, setNavSlide] = useState("-right-full");

  useEffect(() => {
    if (showNavside) return setNavSlide("right-0");
    setNavSlide("-right-full");
  }, [showNavside]);

  return (
    <div
      className={`fixed z-50 inset-y-0 ${navSlide} w-full   ease-out duration-300 text-white lg:hidden flex`}
    >
      <div onClick={() => setShowNavside(false)} className="w-full"></div>
      <div className="bg-primary-color-dark w-full px-10 sm:w-1/2">
        <div className="flex items-center gap-5 px-4 py-2">
          {/* <h2 className="text-2xl font-bold">XcitEducation</h2> */}
          <ArrowRight
            onClick={() => setShowNavside(false)}
            className="text-2xl cursor-pointer"
          />
        </div>
        {user?.id && (
          <Link
            onClick={() => setShowNavside(false)}
            to="/my-profile/dashboard"
            className="flex flex-col items-center my-5 w-fit mx-auto"
          >
            <img className="w-12 h-12 rounded-full" src={user?.image} alt="" />
            <p>{user?.name}</p>
          </Link>
        )}

        {!user?.id && (
          <div className="flex items-center justify-center gap-3 my-3">
            <Link
              onClick={() => setShowNavside(false)}
              to="/login"
              className="p-btn-light"
            >
              Login
            </Link>
            <Link
              onClick={() => setShowNavside(false)}
              to="/signup"
              className="p-btn-light"
            >
              Signup
            </Link>
          </div>
        )}

        {navLinks.map((item) => (
          <Link
            key={item.name}
            className="block pl-2 py-1  font-bold hover:bg-red-700 hover:pl-3 ease-linear duration-300"
            onClick={() => setShowNavside(false)}
            to={item.path}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navside;
