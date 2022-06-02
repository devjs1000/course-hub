import { useState, Children, useEffect } from "react";
import { createPortal } from "react-dom";
import Button from "../../UI/Button";
import CourseVideo from "../chapter/CourseVideo";
import Overlay from "../../UI/Overlay";
import useStore from "../../context/useStore";
import useRazor from "./useRazor";
import { Navigate } from "react-router-dom";
import { getChaptersQuery } from "../../graphql/Queries";
import { useQuery, useMutation } from "@apollo/client";
import {
  addCourseIntoWishlistMutation,
  romveCourseFromWishlistMutation,
} from "../../graphql/Mutations";
import { Heart, HeartFill } from "react-bootstrap-icons";
import toast from "react-hot-toast";
import noImagePlaceHolder from '../../images/noImagePlaceHolder.png'
import RefundBtn from "./RefundBtn";

function HeroSection({ course, id, isEnrolled }) {
  const [courseInWishlist, setCourseInWishlist] = useState(false);
  const { myCourses } = useStore();
  const [chapters, setChapters] = useState([]);
  const [openCourse, setOpenCourse] = useState(false);
  const [isSubcribed, setSubcribed] = useState(false);
  const { showRazorpay } = useRazor();
  const [addCourseIntoWishlist] = useMutation(addCourseIntoWishlistMutation);

  const openCourseHandler = () => {
    setOpenCourse(true);
  };
  const { user } = useStore();

  const closeCourseHandler = () => {
    setOpenCourse(false);
  };

  const token = localStorage.getItem("accessToken");
  const { loading, data, error } = useQuery(getChaptersQuery, {
    context: {
      headers: {
        Authorization: token,
      },
    },
    variables: {
      courseId: course.id,
    },
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
      const course = myCourses.filter((courseItem) => courseItem?.id == id);
      if (course && course[0] && course[0]?.id) {
        setSubcribed(true);
      }
    }

    if (data) {
      console.log("data", data);
      console.log("data.chapters", data?.chapters);
    }
    if (data && data.chapters) {
      setChapters(data.chapters);
      setSubcribed(true);
    }
  }, [openCourse]);

  const handleRazor = () => {
    if (user.id) {
      showRazorpay(course.id, user.id);
    }
  };

  const handleAddCourseIntoWishlistMutation = async () => {
    try {
      addCourseIntoWishlist({
        variables: {
          courseId: course?.id,
        },
        context: {
          headers: {
            Authorization: token,
          },
        },
      }).then((res)=>{
        console.log("res",res);
        toast.success("Course added into wishlist succesfully ! ");
        setCourseInWishlist((val) => !val);
      }).catch((err)=>{
        console.log("err",err);
        toast.error("Course addition into wishlist failed ! ")
      });
    } catch (err) {
      toast.error("Error occurred in adding course to wishlist");
    }
  };
  // { backgroundImage: `url(${course?.image})` }
  return (
    <>
      <div className="relative h-auto overflow-hidden flex flex-col lg:flex-row justify-between items-center px-16 lg:flex-row lg:h-[60vh] md:gap-4">
        <img className='-z-10 lg:hidden h-full w-full absolute object-cover ' src={course?.image=='IMG_20220321_121445.jpg' || course?.image==undefined || course?.image=='lukas-NLSXFjl_nhc-unsplash.jpg' ? noImagePlaceHolder : course?.image} alt="course-image object-fit" />
        <div className="flex flex-col lg:items-start py-8 sm:rounded-xl lg:ml-32">
          <div className="mb-7">
            <h1 className="text-4xl font-bold text-white text-center uppercase tracking-wide">
              {course?.name}
            </h1>
            <p className="text-xl text-white">{course?.tagline}</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="my-4 flex flex-wrap items-center justify-center gap-2 w-full">
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
            <div
              className="flex justify-center items-center mt-8 cursor-pointer h-16 w-16 align-center bg-gray-300 p-3 rounded-[50%]"
              onClick={(e) => {
                setCourseInWishlist((val) => !val);
                handleAddCourseIntoWishlistMutation();
              }}
            >
              {courseInWishlist === false && <Heart className="" />}
              {courseInWishlist && <HeartFill className="text-red-600" />}
            </div>
          </div>
          <RefundBtn/>
        </div>
        <div className='mb-4'>
        <div className=' w-[100%] h-full relative'>
        <img className='lg:block hidden w-full' src={course?.image=='IMG_20220321_121445.jpg' || course?.image==undefined || course?.image=='lukas-NLSXFjl_nhc-unsplash.jpg' ? noImagePlaceHolder : course?.image} alt="course-image object-fit" />
        <span 
          className="bg-[#fc2340] mb-4 px-4 py-1 lg:absolute lg:right-0 lg:bottom-2 rounded-sm text-white text-xl lg:w-[25%]"
          >
          <strong>
            ₹
            {Math.round(
              `${
                course?.price -
                (course?.price *
                  (course?.discount === null ? 0 : course?.discount)) /
                  100
              }` * 100
            ) / 100}
          </strong>
          <small className="line-through mx-2 text-gray-600">
            ₹ {course?.price}
          </small>
          <small className="text-gray-600">
            ({course?.discount === null ? 0 : course?.discount}%)
          </small>
        </span>
        </div>
        </div>
          
      </div>

      {openCourse &&
        createPortal(
          <CourseVideo
            closeModal={closeCourseHandler}
            chapters={chapters}
            courseName={course.name}
          />,
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
