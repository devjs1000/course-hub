import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useStore from "../../context/useStore";

const CourseCard = ({
  enrolled = false,
  id,
  drill = false,
  image,
  title,
  tagline,
  price,
  type,
  description,
}) => {
  const { allCoursesData } = useStore();
  const [current, setCurrent] = useState({});
  useEffect(() => {
    if (drill) return;
    const data = allCoursesData.find((course) => course._id === id);
    setCurrent(data);
  }, [id]);

  const bluePrint = {
    enterline: {
      enrolled: "Start Course",
      noEnrolled: "enroll",
    },
  };

  return (
    <div className="rounded-xl relative h-[20rem] max-w-[18rem] shadow-xl overflow-hidden">
      <div className="h-[10rem] rounded-t-xl   overflow-hidden border">
        <img
          src={drill ? image : current?.image}
          alt="course-image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4 bg-white text-slate-900 flex flex-col items-start gap-4">
        <span className="bg-slate-800 text-[12px] font-semibold rounded-sm text-white px-2 py-[.1rem] uppercase">
          {drill ? type : current?.type}
        </span>
        <h3 className="leading-6">
          <span className="text-[1.4rem] font-semibold block">
            {drill ? title : current?.title}
          </span>
          <span className="font-semibold text-slate-800 block truncate h-[1.2rem] w-[calc(100%-3rem)] ">
            {drill ? tagline : current?.tagline}
          </span>
        </h3>

        <p className="overflow-auto text-lg absolute opacity h-[50%] w-[100%] top-[0rem] rounded-t-xl hover:text-white p-4 left-[0rem] text-transparent select-none hover:bg-red-700">
          {drill ? description : current?.description}
        </p>
        <div className="flex items-center justify-between w-full">
          {enrolled ? (
            <Link
              to="/"
              className="block bg-primary-color-dark text-white py-1 px-2 font-semibold rounded-sm hover:px-4 transition-all"
            >
              {bluePrint?.enterline?.enrolled} &#8594;
            </Link>
          ) : (
            <>
              <Link
                to={`coursedetails/${id}`}
                className="block bg-primary-color-dark text-white py-1 px-2 font-semibold rounded-sm hover:px-4 transition-all"
              >
                {bluePrint?.enterline?.noEnrolled} &#8594;
              </Link>
              <span className="text-xl">
                ₹ {drill ? price : current?.price}/-{" "}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
