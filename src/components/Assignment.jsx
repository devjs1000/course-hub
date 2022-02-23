import React, { Children, useState } from "react";
import CountButton from "../UI/CountButton";
import Search from "../UI/Search";
import { ArrowClockwise} from "react-bootstrap-icons";
import useStore from "../context/useStore";
import BoxLoading from "../UI/BoxLoading";
import AssignmentCard from "../UI/AssignmentCard";
import { Link } from "react-router-dom";
const Assignment = ({}) => {
  const { assignments, user } = useStore();
const assignmentPrint={
  title:'My Assignments'
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
          <div className="my-4 flex px-4 bg-white py-3">
            <Search placeholder="Search your tasks" />
            <ArrowClockwise className="bg-red-700 text-white h-auto w-[2rem] mx-1 hover:text-red-700 hover:bg-white transition-all h-[2rem] p-1" />
            {
              user?.isInstructor && <Link className="bg-red-700 text-white hover:bg-white hover:text-red-700 px-4 grid place-items-center" to='/create-assignment'>
                Create Assignment
              </Link>
            }
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
    </>
  );
};

export default Assignment;
