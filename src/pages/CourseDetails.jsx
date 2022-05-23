import { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
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
  const { allCoursesData,theme } = useStore();
  // const [current, setCurrent] = useState({});
  const [courseLoading, setCourseLoading] = useState(true);
  const [notFound, setNotFound] = useState(true);
  const { id, isEnrolled } = useParams();
  const token = localStorage.getItem("accessToken");
  console.log(token)
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
  console.log(data)
  console.log(data?.getFullCourseDetails?.courseDetails)
   let current = data?.getFullCourseDetails?.courseDetails
  if(loading) return 'loading...'
  if(error) return <div class="bg-gradient-to-r from-red-300 to-rose-400">
<div class="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
<div class="bg-white p-8 shadow overflow-hidden sm:rounded-lg pb-8">
<div class="border-t border-gray-200 text-center pt-8">
<h1 class="text-4xl font-bold text-rose-400">Users-Only!</h1>
<h1 class="text-6xl font-medium py-8">Please login to access this page</h1>
<p class="text-2xl pb-8 px-8 font-medium">It takes less than 30 seconds!</p>
<Link to='/login'>
  <button class="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6">
LOGIN
</button>
</Link>
<Link to='/signup'>
  <button class="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 text-white font-semibold px-6 py-3 rounded-md">
SIGN UP
</button>
</Link>
</div>
</div>
</div>
</div>
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
        <WhatYouGet className="lg:col-start-5 lg:col-end-[-1] lg:order-2" id={id} />
      </div>
    </>
  );
};

export default CourseDetails;
