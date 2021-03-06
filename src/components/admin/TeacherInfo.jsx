import React, { useState, useEffect } from "react";
import useStore from "../../context/useStore";
import { Search, Trash, PencilSquare, ArrowClockwise } from "react-bootstrap-icons";
import { useMutation, useQuery } from "@apollo/client";
import {
  adminDeleteUserByIdMutation,
  adminUpdateUserRoleByIdMutation,
} from "../../graphql/Mutations";
import { adminGetAllTeachersQuery } from "../../graphql/Queries";
import toast from "react-hot-toast";

export const TeacherInfo = () => {
  const [teachers, setTeachers] = useState([]);
  const [inputField, setInputField] = useState("");
  let data = [];
  const [adminDeleteByUserId] = useMutation(adminDeleteUserByIdMutation);
  const [adminUpdateUserRoleById] = useMutation(
    adminUpdateUserRoleByIdMutation
  );

  const allTeachers = useQuery(adminGetAllTeachersQuery, {
    context: {
      headers: {
        Authorization: localStorage.getItem("accessToken"),
      },
    },
  });

  useEffect(() => {
    if (allTeachers.loading) return;

    setTeachers(allTeachers?.data?.adminGetAllTeachers);
  }, [allTeachers.data]);

  const token = localStorage.getItem("accessToken");
  const handleChangeRole = (e) => {
    e.preventDefault();
    console.log("role changed");
    let user_id = e.target.id;
    let new_role = "student";
    adminUpdateUserRoleById({
      variables: {
        userId: user_id,
        role: new_role,
      },
      context: {
        headers: {
          Authorization: token,
        },
      },
    })
      .then((res) => {
        console.log("res", res);
        toast.success("User role updated succesfully ! ");
        allTeachers.refetch();
      })
      .catch((err) => {
        console.log("err", err);
        toast.error("User role updation failed ! ");
      });
  };

  const handleDeleteUser = async (e) => {
    e.preventDefault();
    // console.log(e.target.id + "account deleted");
    let user_id = e.target.id;
    adminDeleteByUserId({
      variables: {
        userId: user_id,
      },
      context: {
        headers: {
          Authorization: token,
        },
      },
    })
      .then((res) => {
        console.log("res", res);
        toast.success("User deleted succesfully ! ");
        allTeachers.refetch();
      })
      .catch((err) => {
        console.log("err", err);
        toast.error("User deletion failed ! ");
      });

    let data = teachers.filter((user) => {
      if (user.id !== user_id) return user;
    });

    setAllTeachers(data);
  };

  if (allTeachers.loading) return "loading...";

  return (
    <div className="bg-white w-full sm:px-8 p-2 sm:py-4">
      <div className="flex flex-col mt-4 border">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full sm:px-6 lg:px-8">
            <div
              className="border-b px-4 py-4 bg-primary-color-dark
            text-white flex justify-between items-center"
            >
              <h1 className="text-xl uppercase order-2 p-4 font-bold  ">
                teachers information
              </h1>
              <div className="flex items-center order-1 bg-white px-4 text-gray-400 h-[50px] rounded-lg">
                <Search className="text-2xl  " />
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-2   bg-transparent outline-none"
                  onChange={(e) => setInputField(e.target.value)}
                />
              </div>
              <div className="order-3 p-2">
                <ArrowClockwise 
                className="text-2xl cursor-pointer hover:rotate-45 ease-in-out duration-300" 
                onClick={()=>{
                  allTeachers.refetch()
                  }}/>
              </div>
            </div>
            <div className="overflow-scroll max-h-[470px]">
              <table className="min-w-full  mt-2 relative ">
                <thead className="bg-white border-b sticky top-0">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm whitespace-nowrap w-[5rem] font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      S No.
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium whitespace-nowrap w-[10rem] text-gray-900 px-6 py-4 text-left"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium whitespace-nowrap w-[10rem] text-gray-900 px-6 py-4 text-left"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium whitespace-nowrap w-[10rem] text-gray-900 px-6 py-4 text-left"
                    >
                      Phone
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium whitespace-nowrap text-gray-900 px-6 py-4 text-left"
                    >
                      Change Role
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium whitespace-nowrap text-gray-900 px-6 py-4 text-left"
                    >
                      Delete Account
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {teachers
                    ?.filter((teacher) => {
                      if (inputField === "") return teacher;
                      else if (
                        teacher.name
                          .toLowerCase()
                          .startsWith(inputField.toLowerCase()) === true ||
                        teacher.name
                          .toLowerCase()
                          .includes(inputField.toLowerCase()) === true
                      )
                        return teacher;
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
                              <PencilSquare className="mr-2" />
                              Make Student
                            </button>
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
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
