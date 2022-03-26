import { useState, useEffect } from "react";
import { postPrint } from "../bluePrint/contextPrint";

import { useQuery } from "@apollo/client";
import { allCoursesQuery, userByEmailQuery } from "../graphql/Queries";

import {
	useJwt
} from "react-jwt";

const Store = () => {
  
  /* Define All States */
  const [user, setUser] = useState({});
  const [userLoading, setUserLoading] = useState(true);
  const [allCoursesData, setAllCoursesData] = useState([]);
  const [allCoursesLoading, setAllCoursesLoading] = useState(true);
  const [posts, setPosts] = useState(postPrint);
  const [myCourses, setMyCourses] = useState([]);
  const [assignments, setAssignments] = useState({});
  const [theme, setTheme] = useState(false)

  /* Define GraphQL Hooks */
  const getAllCourses = useQuery(allCoursesQuery);


  /* Get All Courses Data */
  useEffect(() => {
    if (getAllCourses?.data?.courses) {
      setAllCoursesData(getAllCourses?.data?.courses);
      setAllCoursesLoading(false);
    }
    if (getAllCourses?.error?.message) {
      console.log(getAllCourses.error.message);
      setAllCoursesLoading(false);
    }
    if (localStorage.getItem("accessToken") != null &&
        localStorage.getItem("accessToken") != undefined ) {
          const token = localStorage.getItem("accessToken");
          console.log('cache available');
          const {
            decodedToken,
            isExpired
          } = useJwt(token);
          console.log(decodedToken,isExpired);
          if(decodedToken.email != nul && !isExpired) {
            console.log('valid cache');
            const userByEmail = useQuery(userByEmailQuery,{
              variables: {
                email: user.email,
              },
            });
            setUser(userByEmail);
            console.log('cuser',userByEmail);
          }
    }
  }, [getAllCourses?.data]);

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
    
    theme, setTheme,
  };
};

export default Store;
