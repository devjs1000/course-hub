import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  postPrint,
  teacherPrint,
  studentPrint,
} from "../bluePrint/contextPrint";
import useBetterFetch from "../hooks/useBetterFetch";
import {
  // allCourses,
  getAllCoursesOfUser,
  allInstructorCourses,
} from "../fetch/courseApi";
import {
  getAssignmentsOfUser,
  getAllAssignmentsOfInstructor,
} from "../fetch/assignmentApi";
// import useAuthCheck from "../hooks/useAuthCheck";

const Store = () => {
  // const {authCheck} = useAuthCheck()
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [user, setUser] = useState({});
  const [userLoading, setUserLoading] = useState(true);
  const [allCoursesData, setAllCoursesData] = useState([]);
  const [allCoursesLoading, setAllCoursesLoading] = useState(true);
  const [posts, setPosts] = useState(postPrint);
  const [myCourses, setMyCourses] = useState([]);
  const [first, setFirst] = useState(0);
  const [assignments, setAssignments] = useState({});
  const [betterFetch] = useBetterFetch();

  useEffect(() => {
    // allCourses((data) => {
    //   setAllCoursesData(data);
    //   setAllCoursesLoading(false);
    // });
    betterFetch(
      "/api/course/allCourses",
      10000,
      "GET",
      "still",
      (data) => {
        console.log(data, 'better');
        setAllCoursesData(data);
      }
    );
  }, []);

  useEffect(() => {
    let isMount = true;
    // authCheck(setUser,setUserLoading)
    if (isMount) {
      // setUser(studentData.data);
      setUser(teacherPrint);

      setUserLoading(false);
    }
    return () => {
      isMount = false;
    };
  }, []);
  //stoped the course for development process so that it don't hit api so many times

  //after user registered it will render and called
  useEffect(() => {
    let isMount = true;
    if (isMount) {
      try {
        if (!user.isInstructor && user._id !== undefined) {
         
          getAllCoursesOfUser(user._id, (courses) => {
            setMyCourses(courses.data);
          });

          getAssignmentsOfUser(user._id, (data) => {
            console.log(data);
            setAssignments(data.data);
          });
        } else if (user.isInstructor && user._id !== undefined) {
          allInstructorCourses(user._id, (courses) => {
            setMyCourses(courses.data);
          });

          getAllAssignmentsOfInstructor(user._id, (data) => {
            console.log(data);
            setAssignments(data.data);
          });
        }
      } catch (error) {
        console.log("error");
      }
    }

    return () => {
      isMount = false;
    };
  }, [user]);

  //returning for global access
  return {
    user,
    setUser,

    userLoading,
    setUserLoading,

    allCoursesData,
    allCoursesLoading,

    posts,
    setPosts,

    myCourses,
    setMyCourses,

    assignments,
    setAssignments,
  };
};

export default Store;
