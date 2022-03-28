import { useState, useEffect } from "react";
import { postPrint } from "../bluePrint/contextPrint";

import { useQuery } from "@apollo/client";
import { allCoursesQuery,getUserById } from "../graphql/Queries";
import jwt_decode from "jwt-decode";

const Store = () => {
  
  /* Define All States */
  const [user, setUser] = useState({});
  const [userLoading, setUserLoading] = useState(true);
  const [allCoursesData, setAllCoursesData] = useState([]);
  const [allPopularCoursesData, setAllPopularCoursesData] = useState([]);
  const [allCoursesLoading, setAllCoursesLoading] = useState(true);
  const [posts, setPosts] = useState(postPrint);
  const [myCourses, setMyCourses] = useState([]);
  const [assignments, setAssignments] = useState({});
  const [theme, setTheme] = useState(false)

  let decoded = {id:null};
  const token = localStorage.getItem("accessToken");
  if(token){
    decoded = jwt_decode(token, "anandpandit");
  }

  const { loading, error, data } = useQuery(getUserById,{
    variables: {
      getUserByIdId:decoded.id
    } 
  });
       
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
    if (data && data.getUserById) {
      setUser(data.getUserById);
      setUserLoading(false);
    }
    if (error) {
      setUserLoading(false);
    }
  }, [getAllCourses?.data]);

 
  //returning for global access
  return {
    user,
    setUser,

    userLoading,
    setUserLoading,

    allPopularCoursesData,
    setAllPopularCoursesData,

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
