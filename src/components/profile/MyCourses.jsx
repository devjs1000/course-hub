import React, { Children, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import CourseCard from "../courses/CourseCard";
import { getMyCourses } from "../../graphql/Queries";
import { useQuery } from "@apollo/client";
import useStore from "../../context/useStore";
import { Link } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import "./mycourses.css";

function MyCourses() {
  const { user, theme, setMyCourses } = useStore();

  const token = localStorage.getItem("accessToken");
  const { data, error, loading } = useQuery(getMyCourses, {
    context: {
      headers: {
        Authorization: token,
      },
    },
  });


  // const { data, error, loading } = useQuery(userOrdersQuery, {
  //   variables: {
  //     userId: user.id,
  //   },
  // });

  useEffect(() => {
    if (data != null && data != undefined) {
      setMyCourses(data.getMyCourses);
    }
  }, [data]);

  if (loading) return "loading";
  if (error) return "error";
  const mainContainerStyles = `px-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-16`;
  const btnSectionStyles = `px-2 h-[3rem] flex items-center my-4`;
  const cardContainerStyles = `flex flex-wrap gap-6 justify-around ${
    theme ? "bg-slate-800" : null
  }`;
  return (
    <>
      <ErrorBoundary>
        {user.role === "teacher" && (
          <nav className={btnSectionStyles}>
            <Link
              className="bg-red-700 text-white px-4 py-2 rounded-sm"
              to="/create-course"
            >
              create course
            </Link>
          </nav>
        )}
        <div className={cardContainerStyles}>
          {Children.toArray(
            data?.getMyCourses.map((a) => {
              console.log(a, "a");

              return (
                <CourseCard id={a?.id} enrolled={true} userRole={user?.role} />
              );
            })
          )}
        </div>
      </ErrorBoundary>
    </>
  );
}

export default MyCourses;
