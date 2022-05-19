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
import { getCourseDetails } from "../graphql/Queries";
import { Navigate } from "react-router-dom";

const CourseDetails = () => {
  const { allCoursesData } = useStore();
  // const [current, setCurrent] = useState({});
  const [courseLoading, setCourseLoading] = useState(true);
  const [notFound, setNotFound] = useState(true);
  const { id, isEnrolled } = useParams();
  const token = localStorage.getItem("accessToken");

  const {data,loading,error} = useQuery(getCourseDetails,{
     context: {
      headers: {
        Authorization: token,
      },
    },
    variables :{
      courseId:id
    }
  })
  console.log(data?.getFullCourseDetails?.courseDetails)
   let current = data?.getFullCourseDetails?.courseDetails
  if(loading) return 'loading...'
  if(error) return 'some error occured'
  return (
    <>
      <HeroSection course={current} id={id} isEnrolled={isEnrolled}/>
      <DetailsNavigation />
      <div className="px-4 py-6 grid grid-cols-1 text-gray-600 bg-white lg:grid-cols-6 lg:px-16 lg:py-8 lg:gap-2">
        <div className="col-span-4 order-2 p-2">
          <DetailsAbout course={current} />
          <AuthorIntro id={id} />
          <DetailsReview />
          <FAQ />
        </div>
        <WhatYouGet className="lg:col-start-5 lg:col-end-[-1] lg:order-2" />
      </div>
    </>
  );
};

export default CourseDetails;
