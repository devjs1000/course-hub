import React from "react";
import { Clock, ArrowRight, Tag } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const CourseCard = ({
  image,
  title,
  description,
  price,
  tagline,
  name,
  type,
  enrolled = false,
}) => {
  return (
    <div className="rounded-xl relative h-[20rem] max-w-[18rem]  shadow-xl overflow-hidden">
      <div className="h-[10rem] rounded-t-xl   overflow-hidden border">
        <img
          src={image}
          alt="course-image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4 text-slate-900 flex flex-col items-start gap-4">
        <span className="bg-slate-800 text-[12px] font-semibold rounded-sm text-white px-2 py-[.1rem] uppercase">
          {type}
        </span>
        <h3 className="leading-6">
          <span className="text-[1.4rem] font-semibold block">{title}</span>
          <span className="font-semibold text-slate-800 block truncate h-[1.2rem] w-[calc(100%-3rem)] ">
            {tagline}
          </span>
        </h3>

        <p className="text-sm overflow-auto text-lg absolute opacity h-[50%] w-[100%] top-[0rem] rounded-t-xl hover:text-white p-4 left-[0rem] text-transparent select-none hover:bg-red-700">
          {description}
        </p>
        <div className="flex items-center justify-between w-full">
          {enrolled ? (
            <Link
              to="/"
              className="block bg-primary-color-dark text-white py-1 px-2 font-semibold rounded-sm hover:px-4 transition-all"
            >
              Start Course &#8594;
            </Link>
          ) : (
            <>
              <Link
                to="/"
                className="block bg-primary-color-dark text-white py-1 px-2 font-semibold rounded-sm hover:px-4 transition-all"
              >
                Enroll &#8594;
              </Link>
              <span className="text-xl">₹ {price}/- </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
