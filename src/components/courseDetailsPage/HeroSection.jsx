import { useState, Children, useEffect } from "react";
import { createPortal } from "react-dom";
import Button from "../../UI/Button";
import CourseVideo from "../chapter/CourseVideo";
import Overlay from "../../UI/Overlay";
import useStore from "../../context/useStore";
import useRazor from "./useRazor";
import { Navigate } from "react-router-dom";
import { getChaptersQuery } from "../../graphql/Queries";
import { useQuery } from "@apollo/client";

function HeroSection({ course, id, isEnrolled }) {
  const { myCourses,  } = useStore();
  const [chapters,setChapters] = useState([]);
  const [openCourse, setOpenCourse] = useState(false);
  const [isSubcribed, setSubcribed] = useState(false);
  const { showRazorpay } = useRazor();
  const openCourseHandler = () => {
    setOpenCourse(true);
  };
  const {user}=useStore()
  
  const closeCourseHandler = () => {
    setOpenCourse(false);
  };

  const token = localStorage.getItem("accessToken");
  const { loading, data, error } = useQuery(getChaptersQuery,{
    context : {
      headers:{
        Authorization: token
      }
    },
    variables: {
      courseId: course.id,
    }
  });

  useEffect(() => {
    // if (token) {
    //   setSubcribed(true);
    // }
    if (openCourse) {
      document.body.style = "overflow:hidden;";
    } else {
      document.body.style = "overflow:auto;";
    }
    if (user && course.subscribers && course.subscribers.includes(user.id)) {
      setSubcribed(true);
    }
    if (myCourses.length != 0) {
      const course = myCourses.filter((courseItem)=>courseItem.id == id);
      if (course && course[0] && course[0].id) {
        setSubcribed(true);
      }
    }
    if(data){
      console.log("data",data);
      console.log("data.chapters",data.chapters);
    }
    if (data && data.chapters) {
      setChapters(data.chapters);
      setSubcribed(true);
    }
  }, [openCourse]);

  const handleRazor = () => {
    if(user.id){
      showRazorpay(course.id, user.id);
    }
  };
  // { backgroundImage: `url(${course?.image})` }
  return (
    <>
      <div className="details-hero h-auto overflow-hidden bg-center bg-fixed bg-no-repeat bg-cover flex flex-col justify-between items-center px-16 md:flex-row md:h-[60vh] md:gap-4">
        <div className="flex flex-col items-start sm:w-full backdrop-blur-[100px] py-8 sm:rounded-xl ">
          <div className="mb-7">
            <h1 className="text-4xl font-bold text-white uppercase tracking-wide">
              {course.name}
            </h1>
            <p className="text-xl text-white">{course.tagline}</p>
          </div>

          <div className="">
            <div className="my-4 flex flex-wrap items-center gap-2">
              {Children.toArray(
                course?.advantages?.map((a) => {
                  return (
                    <span className="inline-block rounded-full bg-white px-4 py-1 text-slate-700">
                      {a.advantageName}
                    </span>
                  );
                })
              )}
            </div>
            {isSubcribed ? (
              <Button isPrimary={true} onClick={openCourseHandler}>
                Get started
              </Button>
            ) : (
              <Button isPrimary={true} onClick={handleRazor}>
                Enroll
              </Button>
            )}
          </div>
        </div>
        <div
          className="bg-cover bg-no-rnextVideosepeat bg-center rounded-md relative  after:absolute after:top-0 after:left-0 after:w-full after:h-full after:mix-blend-multiply after:bg-gray-600 after:opacity-75 md:h-[50%] md:w-[80%] lg:h-[80%] lg:w-full"
          style={{ backgroundImage: `url(${course?.image})` }}
        >
          <span className="absolute z-10 top-[16rem] right-[4rem] bg-[#fc2340] px-4 py-1 rounded-sm text-white text-xl">
            ₹ {course?.price}/-{" "}
          </span>
        </div>
      </div>

      {openCourse &&
        createPortal(
          <CourseVideo closeModal={closeCourseHandler} chapters={chapters} courseName={course.name}/>,
          document.getElementById("video-section")
        )}
      {openCourse &&
        createPortal(
          <Overlay clickHandler={closeCourseHandler} />,
          document.getElementById("overlay")
        )}
    </>
  );
}

export default HeroSection;
