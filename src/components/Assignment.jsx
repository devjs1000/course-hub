import React, { Children, useState } from "react";
import CountButton from "../UI/CountButton";
import Search from "../UI/Search";
import { ArrowClockwise } from "react-bootstrap-icons";
import useStore from "../context/useStore";
import BoxLoading from "../UI/BoxLoading";
import AssignmentCard from "../UI/AssignmentCard";
const Assignment = ({}) => {
  const { assignments,user,myCourses } = useStore();
  const [assignmentData,setAssignmentData] = useState({})
  const [courseInfo,setCourseInfo] = useState(null)
const assignmentPrint={
  title:'My Assignments'
}

const getAssignmentData=e=>{
  const name = e.target.name
  const value = e.target.value
  const newData = {...assignmentData}
  newData[name]=value
  setAssignmentData(newData)
}

const getSelected=e=>{
  if(e.target.value==='None')return setCourseInfo(null)
  const exact = myCourses.find(data=>data.name===e.target.value)
  setCourseInfo({instructorId:exact.instructorId,courseId:exact._id,userId:user._id})
}

const submitAssignment = e =>{
  e.preventDefault()
  if(!courseInfo) return alert('Select the course for assignment')
  const finalData = {...assignmentData,...courseInfo}
  // Post request here
  e.target.reset()
  setCourseInfo(null)
}

  return (
    <>
      {assignments?.data ? (
        <div className="bg-slate-100 h-[85vh]">
          <h1 className="p-4 text-4xl sm:text-6xl font-bold text-center text-slate-700 ">
            {assignmentPrint.title}
          </h1>
          <div className="flex mx-[0rem] sm:mx-[6rem]">
            <CountButton title={"All"} count={0} />
            <CountButton title={"Un Checked"} count={0} />
            <CountButton title={"Checked"} count={0} />
          </div>
          <div className="my-4 flex justify-center bg-white py-3">
            <Search placeholder="Search your tasks" />
            <ArrowClockwise className="bg-red-700 text-white w-[2rem] mx-1 hover:text-red-700 hover:bg-white transition-all h-[2rem] p-1" />
          </div>

          <div className="h-[70vh]  overflow-auto">
            {Children.toArray(
              assignments.data.map((a) => {
                return <AssignmentCard assignments={a}/>
              })
            )}
          </div>
        </div>
      ) : (
        <BoxLoading />
      )}
     <div className="w-2/6 mx-auto bg-red-300 p-3 rounded-lg my-3">
     <h1 className="text-2xl font-bold text-center text-white">Create Assignment</h1>
      <form className="bg-red-300 p-5 flex flex-col items-center justify-between" onSubmit={submitAssignment}>
        <input className="w-full my-2 px-2 py-1 rounded-md outline-none" required onChange={getAssignmentData} placeholder="Assignment Link" name="assignmentLink"  type="text" />
        <input className="w-full my-2 px-2 py-1 rounded-md outline-none" required onChange={getAssignmentData} placeholder="Assignment Screenshot Link" name="assignmentScreenshotLink"  type="text" />
        <input className="w-full my-2 px-2 py-1 rounded-md outline-none" onChange={getAssignmentData} placeholder="Assignment Status" name="assignmentStatus"  type="text" />
        <input className="w-full my-2 px-2 py-1 rounded-md outline-none" onChange={getAssignmentData} placeholder="Assignment Comment" name="assignmentComment"  type="text" />
        <select onChange={getSelected} className="w-3/6 my-2 outline-none rounded-md text-gray-500 p-1">
          <option>None</option>
          {
            myCourses.map(course=> <option key={course._id}>{course.name}</option> )
          }
        </select>
        <button className="border-2 px-3 mt-2 font-bold text-white" type="submit">Submit</button>
      </form>
     </div>
    </>
  );
};

export default Assignment;
