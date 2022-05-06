import React, { Children, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import CourseCard from "../courses/CourseCard";
import { getMyWishlistsQuery, allCoursesQuery } from "../../graphql/Queries";
import { useQuery } from "@apollo/client";
import useStore from "../../context/useStore";
import { ErrorBoundary } from "react-error-boundary";
import "./mycourses.css";
import { LockFill } from "react-bootstrap-icons";
import { log } from "react-modal/lib/helpers/ariaAppHider";
import BoxLoading from "../../UI/BoxLoading";

function MyWishlist() {
  const {
    theme,
    myWishlist,
    setMyWishlist,
    allCoursesData,
    setAllCoursesData,
  } = useStore();

  const token = localStorage.getItem("accessToken");
  const wishlist = useQuery(getMyWishlistsQuery, {
    context: {
      headers: {
        Authorization: token,
      },
    },
  });

  const allCourses = useQuery(allCoursesQuery);

  useEffect(() => {
    if (wishlist?.loading) return;
    wishlist.refetch();
    setMyWishlist(wishlist?.data?.getMyWishlists);
  }, [wishlist.data]);

  useEffect(() => {
    if (allCourses?.loading) return;

    setAllCoursesData(allCourses?.data?.courses);
  }, [allCourses?.data]);

  const mainContainerStyles = `px-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-16`;
  const btnSectionStyles = `px-2 h-[3rem] flex items-center my-4`;
  const cardContainerStyles = `flex flex-wrap gap-6 justify-around ${
    theme ? "bg-slate-800" : null
  }`;

  if (wishlist.loading || allCourses.loading) return <BoxLoading />;

  return (
    <>
      <ErrorBoundary>
        <div className={cardContainerStyles}>
          {Children.toArray(
            myWishlist.map((a) => {
              let Course = allCoursesData.filter((c) => c.id === a)[0];
              return (
                <CourseCard id={Course?.id} course={Course} inwishlist={true} />
              );
            })
          )}
        </div>
      </ErrorBoundary>
    </>
  );
}

export default MyWishlist;
