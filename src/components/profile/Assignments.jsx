import { Children, useEffect, useState } from "react";
import useStore from "../../context/useStore";
import { useQuery } from "@apollo/client";
import { myProjectsQuery } from "../../graphql/Queries";
import { Link, useNavigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import {userOrdersQuery} from '../../graphql/queryComponent/order'
import {allCoursesQuery} from '../../graphql/queryComponent/course'

export default ({}) => {

  function makeCard(name,category,tagline,image,id){
    let path = `/chapters/chapterdetails/${id}`
    return <div className='w-full rounded h-96 cursor-pointer'>
    <Link to={
      path
    }>
      <div className="rounded overflow-hidden shadow-2xl h-full">
      <img src={image} alt="course-image" className='h-2/4 w-full object-cover' />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          {tagline}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{category}</span>
      </div>
    </div>
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
  try{
    let myCourseId= await  projects.getUserOrders.map(obj=>obj.courseId)
 let dataToBeShown= await allCourses.courses.filter(eachObj=>{
  return myCourseId.includes(eachObj.id) 
  })
 console.log(dataToBeShown)
 let k=dataToBeShown.map(obj=>makeCard(obj.name, obj.category,obj.tagline, obj.image, obj.id))
  console.log(k)
  setEnrolledCourses(k)
  }
 catch{
  setEnrolledCourses('loading......')
 }
  }


//run after redering
useEffect(runQueries, [projects || allCourses])

  return (
    <div>
  {/* the cards*/}
     <section className='px-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:px-16'>
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