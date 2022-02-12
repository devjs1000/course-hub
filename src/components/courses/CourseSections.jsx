import {Children, useState, useEffect} from 'react'
import Courses from './Courses'
import useStore from '../../context/useStore'
const Section=()=>{
const {frontendCourses, backendCourses, designingCourses, fullstackCourses, otherCourses}=useStore()



  return <div>
<Courses courseArray={frontendCourses.data} title={frontendCourses.title}/>
<Courses courseArray={backendCourses.data} title={backendCourses.title}/>
<Courses courseArray={designingCourses.data} title={designingCourses.title}/>
<Courses courseArray={fullstackCourses.data} title={fullstackCourses.title}/>
<Courses courseArray={otherCourses.data} title={otherCourses.title}/>

</div>

}

export default Section
