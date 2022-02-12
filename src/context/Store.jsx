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

//stoped the course for development process so that it don't hit api so many times

useEffect(()=>{

  setUser({"success":true,
    "data":{
      "_id":"6206cbd3b15c3abdf86c7e74",
      "name":"andy",
      "email":"mandy@gmail.com",
      "password":"$2a$05$hiH21XfdUsmC8Ubuhe03juCtPkqGd8HnTugsTh6oOgnnFz0Uq5h0W",
      "isInstructor":false,
      "isAdmin":false,
      "appliedForInstructor":false,
      "profilePicture":"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
      "githubLink":"",
      "linkedInLink":"",
      "resumeLink":"https://d.novoresume.com/images/doc/functional-resume-template.png",
      "mobileNumber":1233211234,
      "domains":"",
      "description":"Describe yourself",
      "createdAt":"2022-02-11T20:49:23.243Z",
      "updatedAt":"2022-02-11T20:49:23.243Z","__v":0},
    "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDZjYmQzYjE1YzNhYmRmODZjN2U3NCIsImlhdCI6MTY0NDYxNDQ0NX0.qtOSW6zFeewI9M5q68vEgtKEUg5oohox7bwqQ8LvwaY"}
  )


  // allOtherCourses((data)=>{
  //   setOtherCourses({...otherCourses,data})
  // })
  // allFrontendCourses((data)=>{
  //   setFrontendCourses({...frontendCourses,data})
  // })
  // allBackendCourses((data)=>{
  //   setBackendCourses({...backendCourses, data})
  // })
  // allDesigningCourses((data)=>{
  //   setDesigningCourses({...designingCourses,data})
  // })
  // allFullstackCourses((data)=>{
  //   setFullstackCourses({...fullstackCourses,data})
  // })
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
