import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  allOtherCourses,
  allBackendCourses,
  allFrontendCourses,
  allDesigningCourses,
  allFullstackCourses,
  getAllCoursesOfUser,
} from "../fetch/courseApi";
import { getAssignmentsOfUser } from "../fetch/assignmentApi";
// import useAuthCheck from "../hooks/useAuthCheck";

const Store = () => {
  // const {authCheck} = useAuthCheck()
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [user, setUser] = useState({});
  const [userLoading, setUserLoading] = useState(true);
  const [otherCourses, setOtherCourses] = useState({
    title: "other courses",
    data: [],
  });
  const [frontendCourses, setFrontendCourses] = useState({
    title: "frontend courses",
    data: [],
  });
  const [backendCourses, setBackendCourses] = useState({
    title: "backend courses",
    data: [],
  });
  const [designingCourses, setDesigningCourses] = useState({
    title: "design courses",
    data: [],
  });
  const [fullstackCourses, setFullstackCourses] = useState({
    title: "fullstack courses",
    data: [],
  });
  const [myCourses, setMyCourses] = useState({});
  const [first, setFirst] = useState(0);
  const [assignments, setAssignments] = useState({});

  useEffect(() => {
    let isMount = true;

    // authCheck(setUser,setUserLoading)
    const studentData = {
      success: true,
      data: {
        _id: "61d347889e68ba700bade96b",
        name: "Ram",
        email: "ram@gmail.com",
        password:
          "$2a$05$NtVsVdM6CDEqNo0mjCUBkedvEw509b.zwgvWjkkqSDf7.FlsIrWq6",
        isInstructor: false,
        isAdmin: false,
        appliedForInstructor: false,
        profilePicture:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
        githubLink: "",
        linkedInLink: "",
        resumeLink:
          "https://d.novoresume.com/images/doc/functional-resume-template.png",
        mobileNumber: 1111111111,
        domains: "",
        description: "Describe yourself",
        createdAt: "2022-01-03T18:59:20.145Z",
        updatedAt: "2022-01-03T18:59:20.145Z",
        __v: 0,
      },
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDM0Nzg4OWU2OGJhNzAwYmFkZTk2YiIsImlhdCI6MTY0NDc1MjMxMH0.Vhrqz1X66NC8NqxIQW0xBszhBn7SfSLoCQKH0zILsPQ",
    };

    const teacherData = {
      _id: "61d326239e68ba700baddce4",
      name: "Adnan",
      email: "adnan@gmail.com",
      password: "$2a$05$8mZRtnYWMr5faGd4JpYG1OnidCO83SHySy.Nfu1/m7RJ5jjhZh0Xa",
      isInstructor: true,
      isAdmin: false,
      appliedForInstructor: false,
      profilePicture:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
      githubLink: "",
      linkedInLink: "",
      resumeLink:
        "https://d.novoresume.com/images/doc/functional-resume-template.png",
      mobileNumber: 111111111111,
      domains: "",
      description:
        "Teacher with 20+ years of teaching experience and loves teaching",
      createdAt: "2022-01-03T16:36:52.180Z",
      updatedAt: "2022-01-03T16:36:52.180Z",
      __v: 0,
    };
    if (isMount) {
      setUser(studentData.data);
      setUserLoading(false);
    }
    return () => {
      isMount = false;
    };
  }, []);
  //stoped the course for development process so that it don't hit api so many times

  //one time effect at starting of program
  useEffect(() => {
    let isMount = true;
    if (path == "" && first == 0) {
      if (isMount) {
        setFirst(1);
        allOtherCourses((data) => {
          setOtherCourses({ ...otherCourses, data });
        });
        allFrontendCourses((data) => {
          setFrontendCourses({ ...frontendCourses, data });
        });
        allBackendCourses((data) => {
          setBackendCourses({ ...backendCourses, data });
        });
        allDesigningCourses((data) => {
          setDesigningCourses({ ...designingCourses, data });
        });
        allFullstackCourses((data) => {
          setFullstackCourses({ ...fullstackCourses, data });
        });
      }
    }
    return () => {
      isMount = false;
    };
  }, [path]);

  //after user registered it will render and called
  useEffect(() => {
    let isMount = true;
    if (isMount) {
      try {
        if (user._id.length > 8) {
          getAllCoursesOfUser(user._id, (data) => {
            setMyCourses(data);
          });
          getAssignmentsOfUser(user._id, (data) => {
            console.log(data);
            setAssignments(data.data);
          });
        }
      } catch (error) {
        console.log("eror");
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

    otherCourses,
    setOtherCourses,

    frontendCourses,
    setFrontendCourses,

    backendCourses,
    setBackendCourses,

    designingCourses,
    setDesigningCourses,

    fullstackCourses,
    setFullstackCourses,

    myCourses,
    setMyCourses,

    assignments,
    setAssignments,
  };
};

export default Store;
