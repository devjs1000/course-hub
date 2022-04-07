import React, { useState, useEffect } from "react";
import useStore from "../../context/useStore";

export const StudentInfo = () => {
  const { allUsersData, allUsersLoading, setAllUsersData } = useStore();
  const [allStudents, setAllStudents] = useState([]);
  let data = [];

  useEffect(() => {
    try {
      if (!allUsersData.length) return;

      allUsersData?.forEach((user) => {
        if (user.role === "student") data.push(user);
      });

      data.sort((a, b) => {
        if (a.name.toLowerCase() <= b.name.toLowerCase()) return -1;
        return 1;
      });

      setAllStudents(data);
    } catch (error) {
      console.log(error);
    }
  }, [allUsersData]);
  const changeRole = (e) => {
    e.preventDefault();
    console.log("student role changed to  teacher");
  };

  const deleteAccount = (e) => {
    e.preventDefault();
    console.log(e.target.id + "student  account deleted");
  };

  if (allUsersLoading === true)
    return (
      <div className="bg-white w-full px-16 py-4">
        <h1>Loading</h1>
      </div>
    );
  return (
    <div className="bg-white w-full px-16 py-4">
      <div className="flex flex-col mt-4 border">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full sm:px-6 lg:px-8">
            <h1 className="text-xl uppercase p-4 font-bold border-b bg-red-400 ">
              student information
            </h1>
            <div className="overflow-scroll  max-h-[470px]">
              <table className="min-w-full relative">
                <thead className="bg-white border-b sticky top-0">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      S No.
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Phone
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Change Role
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Delete Account
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allStudents?.map((user, idx) => {
                    return (
                      <tr
                        className={`${
                          idx % 2 == 0 ? "bg-gray-100" : "bg-white"
                        } border-b`}
                        key={user.id}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {idx + 1}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {user.name}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {user.email}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {user.phone}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <button
                            id={user.id}
                            onClick={changeRole}
                            className="bg-blue-400 p-2 rounded-sm"
                          >
                            Change
                          </button>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <button
                            id={user.id}
                            onClick={deleteAccount}
                            className="bg-red-600 p-2 rounded-sm"
                          >
                            Delete
                          </button>
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
