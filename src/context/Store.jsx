import { useState, useEffect } from "react";
import { postPrint } from "../bluePrint/contextPrint";

import { useQuery } from "@apollo/client";

import {
  allCoursesQuery,
  getUserById,
} from "../graphql/Queries";


const Store = () => {
  /* Define All States */
  const [user, setUser] = useState({});
  const [userLoading, setUserLoading] = useState(true);
  const [allUsersData, setAllUsersData] = useState([]);
  const [allCoursesData,setAllCoursesData] = useState([]);
  const [currentCourseId,setCurrentCourseId] = useState('')
  const [posts, setPosts] = useState(postPrint);
  const [myCourses, setMyCourses] = useState([]);
  const [assignments, setAssignments] = useState({});
  const [theme, setTheme] = useState(false);
  const [chatbotOn, setChatbotOn] = useState(false);

  /* Admin access state */
  // const [adminPanelAccess, setAdminPanelAccess] = useState(false);

  
  const token = localStorage.getItem("accessToken");
  

  const { loading, error, data } = useQuery(getUserById, {
    context: {
      headers: {
        Authorization: token,
      },
    },
  });
  

  // /* Get All Courses Data */
  useEffect(() => {
    if (Boolean(data && data.user)) {
      setUser(data.user);
      setUserLoading(false);
    }
    if (error) {
      setUserLoading(false);
    }
  }, [data]);


  //returning for global access
  return {
    user,
    setUser,

    allUsersData,
    setAllUsersData,

    userLoading,
    setUserLoading,

    posts,
    setPosts,

    myCourses,
    setMyCourses,

    assignments,
    setAssignments,

    theme,
    setTheme,

    // adminPanelAccess,
    // setAdminPanelAccess,

    chatbotOn,
    setChatbotOn,

    allCoursesData,
    setAllCoursesData,

    currentCourseId,setCurrentCourseId,
  };
};

export default Store;
