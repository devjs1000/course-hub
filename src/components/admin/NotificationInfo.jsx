import React, { useState, useEffect } from "react";
import useStore from "../../context/useStore";
import { Search, Trash, PencilSquare, ArrowClockwise } from "react-bootstrap-icons";
import { useMutation, useQuery } from "@apollo/client";
import { allNotificationsQuery } from "../../graphql/Mutations";

export const NotificationInfo = () => {
  const [notifications, setNotifications] = useState([]);
  const [inputField, setInputField] = useState("");

  const allNotifications = useQuery(allNotificationsQuery, {
    context: {
      headers: {
        Authorization: localStorage.getItem("accessToken"),
      },
    },
  });

  useEffect(() => {
    if (allNotifications.loading) return;

    setNotifications(allNotifications?.data?.allNotifications);
  }, [allNotifications.data]);

  if (allNotifications.loading) return "loading...";

  return (
    <div className="bg-white w-full sm:px-8 p-2 sm:py-4">
      <div className="flex flex-col mt-4 border">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full sm:px-6 lg:px-8">
            <div
              className="border-b px-4 py-4 bg-primary-color-dark
            text-white flex justify-between items-center"
            >
              <h1 className="text-xl uppercase p-4 font-bold order-2  ">
                Notification information
              </h1>
              <div className="flex items-center bg-white order-1 px-4 text-gray-400 h-[50px] rounded-lg">
                <Search className="text-2xl  " />
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-2   bg-transparent outline-none"
                  onChange={(e) => setInputField(e.target.value)}
                  value={inputField}
                />
              </div><div className="order-3 p-2">
                <ArrowClockwise 
                className="text-2xl cursor-pointer hover:rotate-45 ease-in-out duration-300" 
                onClick={()=>{
                  allNotifications.refetch()
                  }}/>
              </div>
            </div>
            <div className="overflow-scroll max-h-[470px]">
              <table className="min-w-full  mt-2 relative ">
                <thead className="bg-white border-b sticky top-0">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm w-[5rem] whitespace-nowrap font-medium w-1/12 text-gray-900 px-6 py-4 text-center"
                    >
                      S No.
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium whitespace-nowrap w-2/12 text-gray-900 px-6 py-4 text-left"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium whitespace-nowrap w-5/12 text-gray-900 px-6 py-4 text-left"
                    >
                      about
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium whitespace-nowrap w-2/12 text-gray-900 px-6 py-4 text-left"
                    >
                      Target
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium whitespace-nowrap w-2/12 text-gray-900 px-6 py-4 text-left"
                    >
                      Target type
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {notifications
                    ?.filter((notification) => {
                      if (inputField === "") return notification;
                      else if (
                        notification.title
                          .toLowerCase()
                          .startsWith(inputField.toLowerCase()) === true ||
                        notification.title
                          .toLowerCase()
                          .includes(inputField.toLowerCase()) === true
                      )
                        return notification;
                    })
                    ?.map((notification, idx) => {
                      return (
                        <tr
                          className={`${
                            idx % 2 == 0 ? "bg-gray-100" : "bg-white"
                          } border-b`}
                          key={notification.id}
                        >
                          <td className="px-6 whitespace-nowrap py-4 text-sm font-medium w-1/12 text-gray-900 text-center">
                            {idx + 1}
                          </td>
                          <td className="text-sm  text-gray-900 font-light  w-2/12 px-6 py-4">
                            {notification.title}
                          </td>
                          <td className="text-sm w-[10rem] flex overflow-auto text-gray-900 font-light  w-5/12 px-6 py-4">
                            {notification.about}
                          </td>
                          <td className="text-sm  whitespace-nowrap overflow-auto text-gray-900 font-light  w-2/12 px-6 py-4">
                            {notification.target}
                          </td>
                          <td className="text-sm  whitespace-nowrap overflow-auto text-gray-900 font-light  w-2/12 px-6 py-4">
                            {notification.targetType}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
