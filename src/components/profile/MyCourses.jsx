import React, { Children, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import CourseCard from "../courses/CourseCard";
import OngoingCourseCard from "./OngoingCourseCard";
import { userOrdersQuery } from "../../graphql/Queries";
import { useQuery } from "@apollo/client";
import useStore from "../../context/useStore";
import { Link } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import "./mycourses.css";

function MyCourses() {
  const { user, setMyCourses } = useStore();

  const { data, error, loading } = useQuery(userOrdersQuery, {
    variables: {
      userId: user.id,
    },
  });

  useEffect(() => {
    console.log(user, "teacher");
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
          <nav className="shadow my-4  mx - 2 inline-block m2">
            <Link
              className="bg-red-700 text-white px-4 py-2 rounded-sm"
              to="/create-course"
            >
              create course
            </Link>
          </nav>
        )}
        {/* <div className="px-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-16"> */}
        <Swiper
          style={{
            "--swiper-navigation-color": "#000",
          }}
          breakpoints={{
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
            // when window width is >= 1480px
            1480: {
              width: 1480,
              slidesPerView: 3,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className="py-4 lg:py-8"
        >
          {data?.getUserOrders.map((a) => {
            return (
              <SwiperSlide key={a.courseId}>
                <CourseCard
                  id={a.courseId}
                  enrolled={true}
                  userRole={user.role}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* </div> */}
      </ErrorBoundary>
    </>
  );
}

export default MyCourses;
