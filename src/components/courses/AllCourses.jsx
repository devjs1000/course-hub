import CourseCard from "./CourseCard";
import BoxLoading from "../../UI/BoxLoading";
import { useEffect, useState, Children } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { allCoursesQuery, getMyWishlistsQuery } from "../../graphql/Queries";
import { useQuery } from "@apollo/client";
import useStore from "../../context/useStore";
function AllCourses() {
  const { myWishlist, setMyWishlist } = useStore();

  /* Define GraphQL Hooks */
  const { data, loading, error } = useQuery(allCoursesQuery);
  const token = localStorage.getItem("accessToken");
  const wishlist = useQuery(getMyWishlistsQuery, {
    context: {
      headers: {
        Authorization: token,
      },
    },
  });

  if (loading || wishlist.loading) return <BoxLoading />;
  if (error) return <p>Error</p>;
  const { courses } = data;

  return (
    <section className=''>
      {/* modified code */}
      <ErrorBoundary fallback={"error in course page"}>
        <div className="container flex gap-6 flex-wrap bg-white p-6 justify-center">
          {Children.toArray(
            courses.map((course) => {
              let inwishlist = myWishlist.includes(course.id);
              console.log(course);
              return (
                <CourseCard
                  key={course.id}
                  course={course}
                  inwishlist={inwishlist}
                />
              );
            })
          )}
        </div>
      </ErrorBoundary>
    </section>
  );
}

export default AllCourses;
