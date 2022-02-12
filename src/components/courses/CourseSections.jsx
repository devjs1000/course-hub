import {Children, useState, useEffect} from 'react'
import Courses from './Courses'
import useStore from '../../context/useStore'
const Section=()=>{
const {frontendCourses, backendCourses, designingCourses, fullstackCourses, otherCourses}=useStore()



  return <div>
  <h1 className="text-6xl text-slate-800 bg-yellow-200 text-center">un comment the useEffect in the store for getting course data shown</h1>

<Courses courseArray={frontendCourses.data} title={frontendCourses.title}/>
<Courses courseArray={backendCourses.data} title={backendCourses.title}/>
<Courses courseArray={designingCourses.data} title={designingCourses.title}/>
<Courses courseArray={fullstackCourses.data} title={fullstackCourses.title}/>
<Courses courseArray={otherCourses.data} title={otherCourses.title}/>

</div>

}

export default Section
