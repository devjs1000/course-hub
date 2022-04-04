import React, { useState, useEffect } from "react";
import useStore from "../../context/useStore";

const AdminDashboard = () => {
  const { allUsersData, allUsersLoading } = useStore();
  const [allStudents, setAllStudents] = useState([]);
  const [allTeachers, setAllTeachers] = useState([]);

  useEffect(() => {
    try {
      if (!allUsersData.length) return;

      let students = [];
      let teachers = [];

      allUsersData?.forEach((user) => {
        if (user.role === "student") students.push(user);
        else if (user.role === "teacher") teachers.push(user);
      });

      setAllStudents(students);
      setAllTeachers(teachers);
    } catch (error) {
      console.log(error);
    }
  }, [allUsersData]);

  if (allUsersLoading === true)
    return (
      <div className="bg-white w-full px-16 py-4">
        <h1>Loading</h1>
      </div>
    );
  return (
    <div className="bg-white w-full px-16 py-4">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      <div class="flex flex-col mt-4 border">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full sm:px-6 lg:px-8">
            <h1 className="text-xl p-4 font-bold border-b bg-red-400 ">
              Students Info
            </h1>
            <div class="overflow-hidden">
              <table class="min-w-full  mt-2">
                <thead class="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      S No.
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Phone
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allStudents?.map((user, idx) => {
                    return (
                      <tr
                        class={`${
                          idx % 2 == 0 ? "bg-gray-100" : "bg-white"
                        } border-b`}
                        key={user.id}
                      >
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {idx + 1}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {user.name}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {user.email}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {user.phone}
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
      <div class="flex flex-col my-4 border">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full sm:px-6 lg:px-8">
            <h1 className="text-xl p-4 font-bold border-b bg-red-400 ">
              Teachers Info
            </h1>
            <div class="overflow-hidden">
              <table class="min-w-full">
                <thead class="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      S No.
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Phone
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allTeachers?.map((user, idx) => {
                    return (
                      <tr
                        class={`${
                          idx % 2 == 0 ? "bg-gray-100" : "bg-white"
                        } border-b`}
                        key={user.id}
                      >
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {idx + 1}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {user.name}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {user.email}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {user.phone}
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

export default AdminDashboard;
