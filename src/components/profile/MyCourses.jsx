import React, { Children } from "react";
import OngoingCourseCard from "./OngoingCourseCard";
import { userOrdersQuery } from "../../graphql/Queries";
import { useQuery } from "@apollo/client";
import useStore from "../../context/useStore";
function MyCourses() {
  const { user,theme } = useStore();
  const { data, error, loading } = useQuery(userOrdersQuery, {
    variables: {
      userId: user.id,
    },
  });

  if (loading) return "loading";
  if (error) return "error";

  console.log(data);
  const mainContainerStyles = `px-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-16`
  return (
    <div className={mainContainerStyles} >
      {Children.toArray(
        data?.getUserOrders.map((a) => {
          return (
            <OngoingCourseCard
              tag="frontend"
              title="Beginner to Advanced ReactJS"
            />
          );
        })
      )}
    </div>
  );
}

export default MyCourses;
