import  {  Children } from "react";
import CourseCard from "./courses/CourseCard";
import useStore from "../context/useStore";
import { Link } from "react-router-dom";

const MyCourses = ({}) => {
  const { myCourses, user } = useStore();

  return (
    <>
      {myCourses.length ? (
        <div>
          <div className="shadow-md px-2 py-1 ">
            {user.isInstructor && (
              <Link
                className="bg-red-700 text-white px-3 py-1"
                to="/create-course"
              >
                Create Course
              </Link>
            )}
          </div>

          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-10 m-6">
            {Children.toArray(
              myCourses.map((course) => {
                return (
                  <CourseCard
                    title={course.courseId.name}
                    enrolled={true}
                    image={course.courseId.image}
                    description={course.courseId.description}
                    tagline={course.courseId.tagline}
                    type={course.courseId.type}
                  />
                );
              })
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default MyCourses;
