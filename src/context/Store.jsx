import { useState, useEffect } from "react";
import { postPrint } from "../bluePrint/contextPrint";

import { useQuery } from "@apollo/client";

import {
  allCoursesQuery,
  getUserById,
} from "../graphql/Queries";

import jwt_decode from "jwt-decode";

const Store = () => {
  /* Define All States */
  const [user, setUser] = useState({});
  const [userLoading, setUserLoading] = useState(true);
  const [allUsersData, setAllUsersData] = useState([]);
  const [allCoursesData,setAllCoursesData] = useState([]);

  const [posts, setPosts] = useState(postPrint);
  const [myCourses, setMyCourses] = useState([]);
  const [assignments, setAssignments] = useState({});
  const [theme, setTheme] = useState(false);
  const [chatbotOn, setChatbotOn] = useState(false);

  /* Admin access state */
  const [adminPanelAccess, setAdminPanelAccess] = useState(false);

  let decoded = { id: null };
  const token = localStorage.getItem("accessToken");
  if (token) {
    decoded = jwt_decode(token, "anandpandit");
  }

  const { loading, error, data } = useQuery(getUserById, {
    context: {
      headers: {
        Authorization: token,
      },
    },
  });

  /* Get All Courses Data */
  useEffect(() => {
    if (data && data.user) {
      setUser(data.user);
      setUserLoading(false);
    }
    if (error) {
      setUserLoading(false);
    }
  }, []);

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

    adminPanelAccess,
    setAdminPanelAccess,

    chatbotOn,
    setChatbotOn,

    allCoursesData,
    setAllCoursesData
  };
};

export default Store;
