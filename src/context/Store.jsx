import { useState, useEffect } from "react";
import {allOtherCourses, allBackendCourses, allFrontendCourses, allDesigningCourses, allFullstackCourses} from '../fetch/courseApi'

const Store = () => {

  const [user, setUser] = useState({});
  const [userLoading, setUserLoading] = useState(true);
  const [otherCourses, setOtherCourses]=useState({title:"other courses", data:[]})
  const [frontendCourses, setFrontendCourses]=useState({title:"frontend courses", data:[]})
  const [backendCourses, setBackendCourses]=useState({title:"backend courses", data:[]})
  const [designingCourses, setDesigningCourses]=useState({title:"design courses", data:[]})
  const [fullstackCourses, setFullstackCourses]=useState({title:"fullstack courses", data:[]})


useEffect(()=>{
  allOtherCourses((data)=>{
    setOtherCourses({...otherCourses,data})
  })
  allFrontendCourses((data)=>{
    setFrontendCourses({...frontendCourses,data})
  })
  allBackendCourses((data)=>{
    setBackendCourses({...backendCourses, data})
  })
  allDesigningCourses((data)=>{
    setDesigningCourses({...designingCourses,data})
  })
  allFullstackCourses((data)=>{
    setFullstackCourses({...fullstackCourses,data})
  })
}, [])
  return {
    user,
    setUser,

    userLoading,
    setUserLoading,

    otherCourses,
    setOtherCourses,

    frontendCourses,
    setFrontendCourses,

    backendCourses,
    setBackendCourses,

    designingCourses,
    setDesigningCourses,

    fullstackCourses,
    setFullstackCourses
  };
};

export default Store;
