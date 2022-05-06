import { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Link } from "react-router-dom";
import useStore from "../../context/useStore";
import author from "../../images/author.jpg";
import { Clock, ListUl, Heart, HeartFill } from "react-bootstrap-icons";
import { allCoursesQuery, getMyWishlistsQuery } from "../../graphql/Queries";
import {
  addCourseIntoWishlistMutation,
  romveCourseFromWishlistMutation,
} from "../../graphql/Mutations";
import { useMutation, useQuery } from "@apollo/client";
import toast from "react-hot-toast";

const CourseCard = ({ id, course, enrolled }) => {
  const [courseInWishlist, setCourseInWishlist] = useState(false);
  const { allCoursesData } = useStore();
  const [current, setCurrent] = useState({});
  const { user } = useStore();
  const [addCourseIntoWishlist] = useMutation(addCourseIntoWishlistMutation);

  const token = localStorage.getItem("accessToken");
  const { data, loading, error } = useQuery(getMyWishlistsQuery, {
    context: {
      headers: {
        Authorization: token,
      },
    },
  });

  const handleAddCourseIntoWishlistMutation = async () => {
    try {
      let response = await addCourseIntoWishlist({
        variables: {
          courseId: course?.id,
        },
        context: {
          headers: {
            Authorization: token,
          },
        },
      });
      toast.success(response?.data?.addCourseIntoWishlist);
    } catch (err) {
      toast.error("Error occurred in adding course to wishlist");
    }
  };

  return (
    <ErrorBoundary fallback={"error in course page"}>
      <div className="bg-black rounded-sm relative w-[21rem] shadow-md overflow-hidden cursor-pointer border-4 border-grey shadow-2xl">
        <Link
          to={
            user?.role == "teacher" && Boolean(enrolled)
              ? `/create-chapter/${course?.id}`
              : `coursedetails/${course?.id}`
          }
        >
          <div className="h-[12rem] rounded-t-sm overflow-hidden relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[rgba(255,118,118,0.09)]">
            <img
              src={course?.image}
              alt="course-image"
              className="object-cover w-full h-full"
            />
          </div>
        </Link>

        <div className="relative px-8 py-10 bg-white text-slate-900 flex flex-col items-start gap-4">
          <h1 className="text-2xl">{course?.name}</h1>
          <div className="flex w-[100%] justify-between">
            <div className="bg-orange-300 text-[14px] font-semibold rounded-sm text-white p-2 uppercase">
              {course?.category}
            </div>
            <div
              className="flex justify-center align-center bg-gray-300 p-3 rounded-[50%]"
              onClick={(e) => {
                setCourseInWishlist((val) => !val);
                handleAddCourseIntoWishlistMutation();
              }}
            >
              {courseInWishlist === false && <Heart className="" />}
              {courseInWishlist && <HeartFill className="text-red-600" />}
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 font-semibold text-gray-700">
              <Clock className="text-lg text-primary-color-light" />
              <span>35 Hours</span>
            </div>
            <div className="flex items-center gap-2 font-semibold text-gray-700">
              <ListUl className="text-xl text-primary-color-light" />
              <span>{course?.noOfSubscribers || 2000}</span>
            </div>
          </div>
          <h3 className="leading-6 text-xl font-semibold h-12 text-slate-800">
            {course?.tagline}
          </h3>
          {/* <div className="flex items-center gap-4"> */}
          {/*   <div */}
          {/*     className="bg-cover h-12 w-12 rounded-full border bg-no-repeat bg-top" */}
          {/*     style={{ backgroundImage: `url(${author})` }} */}
          {/*   ></div> */}
          {/*   <span>John Doe</span> */}
          {/* </div> */}
          <span className="absolute top-[-1.1rem] right-[1rem] bg-[#fc2340] px-4 py-1 rounded-sm text-white text-xl">
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
    </ErrorBoundary>
  );
};

export default CourseCard;
