import React, { Children, useEffect, useState } from "react";
import OngoingCourseCard from "./OngoingCourseCard";
import { userOrdersQuery } from "../../graphql/Queries";
import { useQuery } from "@apollo/client";
import useStore from "../../context/useStore";
import { Link } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
function MyCourses() {
  const { user, setUser } = useStore();
  const { userOrders, setUserOrders } = useState();
  const { data, error, loading } = useQuery(userOrdersQuery, {
    variables: {
      userId: user.id,
    },
  });

  useEffect(() => {
    console.log(data,'courses');
    setUserOrders(data);
    console.log(userOrders)
  }, [data]);

  if (loading) return "loading";
  if (error) return "error";

  console.log(data);
  return (
    <>
    <ErrorBoundary>
      <nav className="shadow px-4 py-2 inline-block">
        <Link className="bg-red-700 text-white px-4 py-1" to="/create-course">
          create course
        </Link>
      </nav>
      <div className="px-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-16">
        {
          userOrders.getUserOrders.map((a) => {
            return (
              <OngoingCourseCard name={a.name} image={a.image} id={a.id} />
            );
          })
        }
      </div>
      </ErrorBoundary>
    </>
  );
}

export default MyCourses;
