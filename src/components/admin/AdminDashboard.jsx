import React, { useEffect, useState } from "react";
import useStore from "../../context/useStore";
import { PeopleFill, Journal, PersonLinesFill } from "react-bootstrap-icons";

export const AdminDashboard = () => {
  const { allUsersData, allCoursesData } = useStore();
  const [studentsCount, setStudentCount] = useState(0);
  const topIconDiv =
    "w-10 h-10 flex items-center justify-center text-white rounded-full text-2xl";

  let students = 0;

  useEffect(() => {
    if (allUsersData?.length === 0) return;

    allUsersData.forEach((user) => {
      if (user.role === "student") students++;
    });
    setStudentCount(students);
  }, [allUsersData]);
  return (
    <div>
      <h1 className="ml-8 mt-8 text-xl font-semibold">Dashboard</h1>

      <div className="grid grid-cols-3 gap-x-10  m-8 ">
        <div
          className="bg-blue-300 
        flex justify-center items-center flex-col py-8 rounded-md"
        >
          <div className="p-2 rounded-full bg-blue-200">
            <div className="p-2 rounded-full bg-blue-300">
              <div className="p-2 rounded-full bg-blue-400">
                <div className={`${topIconDiv} bg-blue-500`}>
                  <Journal />
                </div>
              </div>
            </div>
          </div>
          <div className="text-xl font-semibold flex mt-2">
            <h1 className="mr-4">Courses</h1>
            <p>{allCoursesData.length}</p>
          </div>
        </div>
        <div className="bg-red-300 flex justify-center items-center flex-col py-8 rounded-md">
          <div className="p-2 rounded-full bg-red-200">
            <div className="p-2 rounded-full bg-red-300">
              <div className="p-2 rounded-full bg-red-400">
                <div className={`${topIconDiv} bg-red-500`}>
                  <PersonLinesFill />
                </div>
              </div>
            </div>
          </div>
          <div className="text-xl font-semibold flex mt-2">
            <h1 className="mr-4">Teachers</h1>
            <p>{allUsersData.length - studentsCount}</p>
          </div>
        </div>
        <div className="bg-green-300 flex justify-center items-center flex-col py-8 rounded-md">
          <div className="p-2 rounded-full bg-green-200">
            <div className="p-2 rounded-full bg-green-300">
              <div className="p-2 rounded-full bg-green-400">
                <div className={`${topIconDiv} bg-green-500`}>
                  <PeopleFill />
                </div>
              </div>
            </div>
          </div>
          <div className="flex text-xl mt-2 font-semibold ">
            <h1 className="mr-4">Students</h1>
            <p>{studentsCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
