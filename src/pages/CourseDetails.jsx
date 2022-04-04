import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsNavigation from "../components/courseDetailsPage/details/DetailsNavigation";
import HeroSection from "../components/courseDetailsPage/HeroSection";
import NotFound from "../components/courseDetailsPage/notFound";
import TimeOut from "../components/courseDetailsPage/timeOut";
import WhatYouGet from "../components/courseDetailsPage/details/WhatYouGet";
import DetailsAbout from "../components/courseDetailsPage/details/DetailsAbout";
import useStore from "../context/useStore";
import AuthorIntro from "../components/courseDetailsPage/AuthorIntro";
import DetailsReview from "../components/courseDetailsPage/details/DetailsReview";
import FAQ from "../components/courseDetailsPage/FAQ";

import { useQuery } from "@apollo/client";
import { getCourseByIdQuery } from "../graphql/Queries";
import { Navigate } from "react-router-dom";

const CourseDetails = () => {
  const { allCoursesData } = useStore();
  const [current, setCurrent] = useState({});
  const [courseLoading, setCourseLoading] = useState(true);
  const [notFound, setNotFound] = useState(true);
  const { id } = useParams();

  const currentCourse = useQuery(getCourseByIdQuery,{
    variables :{
      courseId:id
    }
  })

  useEffect(() => {
    const data = allCoursesData.find((course) => course.id == id);
    if (data) {
      setCurrent(data);
      setCourseLoading(false);
    }
    else if (currentCourse?.data?.courseById) {
      setCurrent(currentCourse?.data?.courseById);
      setCourseLoading(false);
    }
    else if (currentCourse?.error) {
      setNotFound(true);
      setCourseLoading(false);
      console.log('course not found');
    }
    else {
      setCourseLoading(false);
    }
  });
  return (
    <>
      <HeroSection course={current} id={id}/>
      <DetailsNavigation />
      <div className="px-4 py-6 grid grid-cols-1 text-gray-600 bg-white lg:grid-cols-6 lg:px-16 lg:py-8 lg:gap-2">
        <div className="col-span-4 order-2 p-2">
          <DetailsAbout course={current} />
          <AuthorIntro />
          <DetailsReview />
          <FAQ />
        </div>
        <WhatYouGet className="lg:col-start-5 lg:col-end-[-1] lg:order-2" />
      </div>
    </>
  );
};

export default CourseDetails;
