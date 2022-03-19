import React, { useState } from "react";
import useStore from "../../service/context/useStore";

export default () => {
  const {  user, myCourses } = useStore();
  const [assignmentData, setAssignmentData] = useState({});
  const [courseInfo, setCourseInfo] = useState(null);

  const getAssignmentData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newData = { ...assignmentData };
    newData[name] = value;
    setAssignmentData(newData);
  };

  const getSelected = (e) => {
    if (e.target.value === "None") return setCourseInfo(null);
    const exact = myCourses.find((data) => data.name === e.target.value);
    setCourseInfo({
      instructorId: exact.instructorId,
      courseId: exact._id,
      userId: user._id,
    });
  };

  const submitAssignment = (e) => {
    e.preventDefault();
    if (!courseInfo) return alert("Select the course for assignment");
    const finalData = { ...assignmentData, ...courseInfo };
    // Post request here
    e.target.reset();
    setCourseInfo(null);
  };

  return (
    <div className="w-full h-screen bg-red-700 flex items-center">
      <div className="w-[25rem] mx-auto bg-white p-3 rounded-lg my-3">
        <h1 className="text-2xl font-bold  px-5 text-red-700">
          Create Assignment
        </h1>
        <form
          className="bg-white p-5 flex flex-col items-center justify-between"
          onSubmit={submitAssignment}
        >
          <input
            className="w-full my-2 bg-slate-100  px-2 py-2 rounded-md outline-none"
            required
            onChange={getAssignmentData}
            placeholder="Assignment Link"
            name="assignmentLink"
            type="text"
          />
          <input
            className="w-full my-2 bg-slate-100 px-2 py-2 rounded-md outline-none"
            required
            onChange={getAssignmentData}
            placeholder="Assignment Screenshot Link"
            name="assignmentScreenshotLink"
            type="text"
          />
          <input
            className="w-full my-2 px-2 bg-slate-100 py-2 rounded-md outline-none"
            onChange={getAssignmentData}
            placeholder="Assignment Comment"
            name="assignmentComment"
            type="text"
          />
          <select
            onChange={getSelected}
            className="w-full my-2 outline-none rounded-md text-gray-500 p-2"
          >
            <option>None</option>
            {myCourses.map((course) => (
              <option key={course._id}>{course.name}</option>
            ))}
          </select>
          <button
            className="m-btn px-3 py-2 mt-2 font-bold bg-red-700 text-slate-100 w-full"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
