import { Children, useEffect, useState } from "react";
import useStore from "../../context/useStore";
import { useQuery } from "@apollo/client";
import { myProjectsQuery } from "../../graphql/Queries";
import { Link, useNavigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import {userOrdersQuery} from '../../graphql/queryComponent/order'
import {allCoursesQuery} from '../../graphql/queryComponent/course'

export default ({}) => {

  function makeCard(name){
    return <div>{name}</div>
  }

  const [enrolledCourses, setEnrolledCourses]=useState([])
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

 async function runQueries(){
 let myCourseId= await  projects.getUserOrders.map(obj=>obj.courseId)
 let dataToBeShown= await allCourses.courses.filter(eachObj=>{
  return myCourseId.includes(eachObj.id) 
  })
 let k=dataToBeShown.map(obj=>makeCard(obj.name))
  console.log(k)
  setEnrolledCourses(k)
  }
//run after redering
useEffect(runQueries, [enrolledCourses])

 
  return (
    <div>
  {/* the cards*/}
     <section>
      {enrolledCourses}
     </section>
    </div>
  );

};













//  const { user, myCourses, theme } = useStore();
//  const {loading,error, data}=useQuery(myProjectsQuery, {
//    variables:{
//      "userId": user.id
//    }
 // {Children.toArray(
 //          myCourses.map((a) => {
 //            return a.id
 //          })
 //        )}
//  })

//  console.log(data);
  
// if(loading) return 'loading...'
// if(error) return 'error'
// console.log('assignment',data);