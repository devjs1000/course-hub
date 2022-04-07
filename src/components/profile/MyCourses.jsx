import React, { Children, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import CourseCard from "../courses/CourseCard";
import { userOrdersQuery } from "../../graphql/Queries";
import { useQuery } from "@apollo/client";
import useStore from "../../context/useStore";
import { Link } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import "./mycourses.css";

function MyCourses() {
  const { user,theme, setMyCourses } = useStore();

  const { data, error, loading } = useQuery(userOrdersQuery, {
    variables: {
      userId: user.id,
    },
  });

  useEffect(() => {
    console.log(user);
    if (data != null && data != undefined) {
      setMyCourses(data.getUserOrders);
    }
  }, [data]);

  if (loading) return "loading";
  if (error) return "error";

  console.log(data);
  const mainContainerStyles = `px-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-16`;
  return (
    <>
      <ErrorBoundary>
        {user.role === "teacher" && (
          <nav className="px-2 h-[3rem] flex items-center my-4">
            <Link
              className="bg-red-700 text-white px-4 py-2 rounded-sm"
              to="/create-course"
            >
              create course
            </Link>
          </nav>
        )}
        <div className="flex flex-wrap gap-6 justify-around">

          {Children.toArray(data?.getUserOrders.map((a) => {
            return (
            
                <CourseCard
                  id={a.courseId}
                  enrolled={true}
                  userRole={user.role}
                />
            
            );
          }))}
       
        </div>
      </ErrorBoundary>
    </>
  );
}

export default MyCourses;
