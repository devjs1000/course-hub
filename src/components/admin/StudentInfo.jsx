import React, { useState, useEffect } from "react";
import useStore from "../../context/useStore";
import { Search, Trash, PencilSquare } from "react-bootstrap-icons";
import { useMutation } from "@apollo/client";



import {
  adminDeleteUserByIdMutation,
  adminUpdateUserRoleByIdMutation,
} from "../../graphql/Mutations";

export const StudentInfo = () => {
  const { allUsersData, allUsersLoading, setAllUsersData } = useStore();
  const [allStudents, setAllStudents] = useState([]);

  const [inputField, setInputField] = useState("");
  let data = [];
  const [adminDeleteUserById] = useMutation(adminDeleteUserByIdMutation);
  const [adminUpdateUserRoleById] = useMutation(
    adminUpdateUserRoleByIdMutation
  );



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

  const token = localStorage.getItem("accessToken");
  const handleChangeRole = (e) => {
    e.preventDefault();
    console.log("role changed");
    // let user_id = e.target.id;
    // let new_role = "teacher";
    // adminUpdateUserRoleById({
    //   variables: {
    //     userId: user_id,
    //     role: new_role,
    //   },
    //   context: {
    //     headers: {
    //       Authorization: token,
    //     },
    //   },
    // });
  };

  const handleDeleteUser = async (e) => {
    e.preventDefault();
    // console.log(e.target.id + "account deleted");
    let user_id = e.target.id;
    await adminDeleteUserById({
      variables: {
        userId: user_id,
      },
      context: {
        headers: {
          Authorization: token,
        },
      },
    });

    let data = allUsersData.filter((user) => {
      if (user.id !== user_id) return user;
    });

    setAllUsersData(data);
  };

  if (allUsersLoading === true)
    return (
      <div className="bg-white w-full px-16 py-4">
        <h1>Loading</h1>
      </div>
    );
  return (
    <div className="bg-white w-full px-8 py-4">
      <div className="flex flex-col mt-4 border">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full sm:px-6 lg:px-8">
            <div
              className="border-b px-4 py-4 bg-primary-color-dark
            text-white flex justify-between items-center"
            >
              <h1 className="text-xl uppercase p-4 font-bold  ">
                student information
              </h1>
              <div className="flex items-center bg-white px-4 text-gray-400 h-[50px] rounded-lg">
                <Search className="text-2xl  " />
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-2   bg-transparent outline-none"
                  onChange={(e) => setInputField(e.target.value)}
                />
              </div>
            </div>
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
                  {allStudents
                    ?.filter((student) => {
                      if (inputField === "") return student;
                      else if (
                        student.name
                          .toLowerCase()
                          .startsWith(inputField.toLowerCase()) === true ||
                        student.name
                          .toLowerCase()
                          .includes(inputField.toLowerCase()) === true
                      )
                        return student;
                    })
                    ?.map((user, idx) => {
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
                              onClick={handleChangeRole}
                              className="bg-blue-500 flex justify-evenly
                            items-center p-2 font-bold
                            rounded-sm"
                            >
                              <PencilSquare className="mr-3" />
                              Make Teacher
                            </button>
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                            <button
                              id={user.id}
                              onClick={handleDeleteUser}
                              className="bg-red-500 flex justify-evenly
                            items-center p-2 font-bold
                            rounded-sm"
                            >
                              <Trash className="mr-2" />
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
