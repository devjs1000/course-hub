import CourseCard from "./CourseCard";
import BoxLoading from "../../UI/BoxLoading";
import { useEffect, useState, Children } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { allCoursesQuery } from "../../graphql/Queries";
import { useQuery } from "@apollo/client";
import useStore from "../../context/useStore";
function AllCourses() {
  /* Define GraphQL Hooks */
  const { data, loading, error } = useQuery(allCoursesQuery);

  if (loading) return <BoxLoading />;
  if (error) return <p>Error</p>;
  const { courses } = data;

  return (
    <section>
      {/* modified code */}
      <ErrorBoundary fallback={"error in course page"}>
        <div className="container flex gap-6 flex-wrap bg-white p-6 justify-center m-6">
          {Children.toArray(
            courses.map((course) => {
              console.log(course);
              return <CourseCard key={course.id} course={course} />;
            })
          )}
        </div>
      </ErrorBoundary>
    </section>
  );
}

export default AllCourses;
