import { Children, useEffect, useState } from "react";
import useStore from "../../context/useStore";
import { useQuery } from "@apollo/client";
import { myProjectsQuery } from "../../graphql/Queries";
import { Link, useNavigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import {userOrdersQuery} from '../../graphql/queryComponent/order'
import {allCoursesQuery} from '../../graphql/queryComponent/course'

export default ({}) => {
// 	const { user, myCourses, theme } = useStore();
// 	const {loading,error, data}=useQuery(myProjectsQuery, {
// 		variables:{
// 			"userId": user.id
// 		}
 // {Children.toArray(
 //          myCourses.map((a) => {
 //            return a.id
 //          })
 //        )}
// 	})

// 	console.log(data);
	
// if(loading) return 'loading...'
// if(error) return 'error'
// console.log('assignment',data);

  const { myCourses,user } = useStore();
  const {data:projects} = useQuery(userOrdersQuery, {
    variables: {
      userId: user.id,
    },
  })
  const {data:allCourses} = useQuery(allCoursesQuery, {
    variables: {
      userId: user.id,
    },
  })

  let projectArray = projects.getUserOrders
  //get only the courses users is enrolled in
  let courseIds =projectArray.map(a=>a.courseId)
  // console.log(allCourses)
  let allCoursesId = allCourses.courses.concat(projectArray)
  allCoursesId.forEach(obj=>{
    
  })
  console.log(allCoursesId)

  return (
    <div>
     {user.id}
    </div>
  );

};
