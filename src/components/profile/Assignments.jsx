import { Children, useEffect, useState } from "react";
import useStore from "../../context/useStore";
import { useQuery } from "@apollo/client";
import { myProjectsQuery } from "../../graphql/Queries";
import { Link, useNavigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import {userOrdersQuery} from '../../graphql/queryComponent/order'
import {allCoursesQuery} from '../../graphql/queryComponent/course'

export default ({}) => {

  function makeCard(name,category,tagline,image){
    return <div className='w-1/4 border border-4 border-gray-300 rounded h-48 cursor-pointer'>
    <Link to='/projects'>
       <img src={image} alt="" className='h-16' className='object-cover w-full h-2/4' />
        <h2 className='text-2xl text-center'>{name}</h2>
        <p className='text-center'>{tagline}</p>
    </Link>
    </div>
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
 console.log(dataToBeShown)
 let k=dataToBeShown.map(obj=>makeCard(obj.name, obj.category,obj.tagline, obj.image))
  console.log(k)
  setEnrolledCourses(k)
  }
  let dummyVal=1
//run after redering
useEffect(runQueries, [dummyVal])

 
  return (
    <div>
  {/* the cards*/}
     <section className='flex flex-row justify-around'>
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