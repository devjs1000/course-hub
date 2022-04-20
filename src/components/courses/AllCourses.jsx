import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import CourseCard from "./CourseCard";
import useStore from "../../context/useStore";
import BoxLoading from "../../UI/BoxLoading";
import { useEffect, useState, Children } from "react";
import { ErrorBoundary } from "react-error-boundary";

function AllCourses() {
  const { allCoursesData } = useStore();
  const [coursesByType, setCoursesByType] = useState([]);

  useEffect(() => {
    try {
      let tempType = [];
      let tempData = [];
      if (!allCoursesData.length) return;

      allCoursesData?.forEach((course) => {
        if (!tempType.includes(course?.type)) {
          tempType.push(course?.type);
        }
      });
      tempType?.forEach((type) => {
        const data = allCoursesData.filter((course) => course.type === type);
        tempData = [...tempData, { type, data }];
      });
      setCoursesByType(tempData);
    } catch (err) {
      console.log(err);
    }
  }, [allCoursesData]);

  return (
    <section>
      {/* modified code */}
      <ErrorBoundary fallback={"error in course page"}>
        {allCoursesData?.length !== 0 ? (
          Children.toArray(
            coursesByType.map((eachType) => (
              <div className="bg-[#fffbfb] px-16 h-[100%]  pt-8 select-none lg:pt-16">
                <h2 className="text-4xl font-semibold w-full text-slate-700 uppercase">
                  {eachType?.type}
                </h2>
                <div className="flex flex-wrap justify-around gap-6 ">
                  {Children.toArray(
                    eachType?.data.map((course) => {
                      return <CourseCard id={course?.id} />;
                    })
                  )}
                </div>
              </div>
            ))
          )
        ) : (
          <BoxLoading />
        )}
      </ErrorBoundary>
    </section>
  );
}

export default AllCourses;
