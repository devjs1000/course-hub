import React, { useEffect, useState } from "react";
import useStore from "../../context/useStore";
import {useQuery} from "@apollo/client"
import { PeopleFill, Journal, PersonLinesFill, Projector, BagPlusFill,TicketFill,TicketPerforated } from "react-bootstrap-icons";
import { adminGetAllCountsQuery } from "../../graphql/Queries";

export const AdminDashboard = () => {

  const token = localStorage.getItem("accessToken");
  const adminContext = {
    context: {
      headers: {
        Authorization: token,
      },
    }
  };
  const adminGetAllCounts = useQuery(adminGetAllCountsQuery,adminContext);
  const [count, setCount] = useState({
    students: 0,
    teachers: 0,
    courses: 0,
    orders: 0,
    projects: 0,
    pendingRequests: 0,
    completedRequests: 0,
  });
  const topIconDiv =
    "w-10 h-10 flex items-center justify-center text-white rounded-full text-2xl";
  console.log("adminGetAllCounts",adminGetAllCounts);
  console.log("adminGetAllCounts.data",adminGetAllCounts.data);
  if (adminGetAllCounts && adminGetAllCounts.data ) {
    console.log("adminGetAllCounts.data.adminGetAllCounts",adminGetAllCounts.data.adminGetAllCounts); 
  }
  useEffect(() => {
    if (adminGetAllCounts && adminGetAllCounts.data) {
      setCount(adminGetAllCounts.data.adminGetAllCounts);
    }
  }, []);

  return (
    <div>
      <h1 className="ml-8 mt-8 text-xl font-semibold">Dashboard</h1>

      <div className="grid grid-cols-3 gap-x-10  m-8 ">
        <div className="bg-blue-300 flex justify-center items-center flex-col py-8 my-6 rounded-md">
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
            <p>{count.courses}</p>
          </div>
          <div className="text-xl font-semibold flex mt-2">
            <h1 className="w-full text-center">Courses</h1>
          </div>
          
        </div>
        <div className="bg-red-300 flex justify-center items-center flex-col py-8 my-6 rounded-md">
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
            <p>{count.teachers}</p>
          </div>
          <div className="text-xl font-semibold flex mt-2">
            <h1 className="w-full text-center">Teachers</h1>
          </div>
          
        </div>
        <div className="bg-green-300 flex justify-center items-center flex-col py-8 my-6 rounded-md">
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
            <p>{count.students}</p>
          </div>
          <div className="flex text-xl mt-2 font-semibold ">
            <h1 className="w-full text-center">Students</h1>
          </div>
          
        </div>
        <div className="bg-orange-300 flex justify-center items-center flex-col py-8 my-6 rounded-md">
          <div className="p-2 rounded-full bg-green-200">
            <div className="p-2 rounded-full bg-green-300">
              <div className="p-2 rounded-full bg-green-400">
                <div className={`${topIconDiv} bg-green-500`}>
                  <Projector />
                </div>
              </div>
            </div>
          </div>
          <div className="flex text-xl mt-2 font-semibold ">
            <p>{count.projects}</p>
          </div>
          <div className="flex text-xl mt-2 font-semibold ">
            <h1 className="w-full text-center">Projects</h1>
          </div>
          
        </div>
        <div className="bg-yellow-300 flex justify-center items-center flex-col py-8 my-6 rounded-md">
          <div className="p-2 rounded-full bg-green-200">
            <div className="p-2 rounded-full bg-green-300">
              <div className="p-2 rounded-full bg-green-400">
                <div className={`${topIconDiv} bg-green-500`}>
                  <BagPlusFill />
                </div>
              </div>
            </div>
          </div>
          <div className="flex text-xl mt-2 font-semibold ">
            <p>{count.orders}</p>
          </div>
          <div className="flex text-xl mt-2 font-semibold ">
            <h1 className="w-full text-center">Orders</h1>
          </div>
          
        </div>
        <div className="bg-gray-300 flex justify-center items-center flex-col py-8 my-6 rounded-md">
          <div className="p-2 rounded-full bg-green-200">
            <div className="p-2 rounded-full bg-green-300">
              <div className="p-2 rounded-full bg-green-400">
                <div className={`${topIconDiv} bg-green-500`}>
                  <TicketFill />
                </div>
              </div>
            </div>
          </div>
          <div className="flex text-xl mt-2 font-semibold ">
            <p>{count.pendingRequests}</p>
          </div>
          <div className="flex text-xl mt-2 font-semibold ">
            <h1 className="w-full text-center">Pendind requests</h1>
          </div>
          
        </div>
        <div className="bg-brown-300 flex justify-center items-center flex-col py-8 my-6 rounded-md">
          <div className="p-2 rounded-full bg-green-200">
            <div className="p-2 rounded-full bg-green-300">
              <div className="p-2 rounded-full bg-green-400">
                <div className={`${topIconDiv} bg-green-500`}>
                  <TicketPerforated />
                </div>
              </div>
            </div>
          </div>
          <div className="flex text-xl mt-2 font-semibold ">
            <p>{count.completedRequests}</p>
          </div>
          <div className="flex text-xl mt-2 font-semibold ">
            <h1 className="w-full text-center">Completed Requests</h1>
          </div>
          
        </div>
      </div>
    </div>
  );
};
