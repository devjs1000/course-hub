import { Children, useEffect, useState } from "react";
import useStore from "../../context/useStore";
import { useQuery, useMutation } from "@apollo/client";
import { myProjectsQuery } from "../../graphql/Queries";
import { Link, useNavigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { getMyCourses } from "../../graphql/Queries";

export default ({}) => {
  //variables
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  let { myCourses, user, theme } = useStore();

  const token = localStorage.getItem("accessToken");
  const { data, error, loading } = useQuery(getMyCourses, {
    context: {
      headers: {
        Authorization: token,
      },
    },
  });

  //function for making cards
  function makeCard(name, category, tagline, image, id) {
    let path = `/chapters/chapterdetails/${id}`;
    return (
      <div className="w-full rounded h-96 cursor-pointer">
        <Link to={path}>
          <div className="rounded overflow-hidden shadow-2xl h-full">
            <img
              src={image}
              alt="course-image"
              className="h-2/4 w-full object-cover"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{name}</div>
              <p className="">{tagline}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {category}
              </span>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  //styling for some sections
  let styles = {
    mainSection: ` ${
      theme ? "bg-slate-800" : "bg-white"
    } h-[50rem] px-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:px-16`,
    tagLine: `${theme ? "text-white" : "text-gray-700"} text-base`,
  };

  return (
    <div>
      {/* the cards*/}
      <section className={styles.mainSection}>
        {Children.toArray(
          data?.getMyCourses.map((a) => {
            console.log(a);
            return makeCard(a?.name, a?.category, a?.tagline, a?.image, a?.id);
          })
        )}
      </section>
    </div>
  );
};

