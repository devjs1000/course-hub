import React, { useState, useEffect } from "react";
import BoxLoading from "../../UI/BoxLoading";
import { Search, Trash, PencilSquare, ArrowClockwise } from "react-bootstrap-icons";
import { adminGetAllStudentsQuery } from "../../graphql/Queries";
import { useMutation, useQuery } from "@apollo/client";
import toast from "react-hot-toast";
import {
  adminDeleteUserByIdMutation,
  adminUpdateUserRoleByIdMutation,
} from "../../graphql/Mutations";

export const StudentInfo = () => {
  const [inputField, setInputField] = useState("");
  const [students, setAllStudents] = useState();
  let data = [];
  const [adminDeleteUserById] = useMutation(adminDeleteUserByIdMutation);
  const [adminUpdateUserRoleById] = useMutation(
    adminUpdateUserRoleByIdMutation
  );

  const allStudents = useQuery(adminGetAllStudentsQuery, {
    context: {
      headers: {
        Authorization: localStorage.getItem("accessToken"),
      },
    },
  });

  useEffect(() => {
    if (allStudents.loading) return;

    setAllStudents(allStudents?.data?.adminGetAllStudents);
  }, [allStudents.data]);

  const token = localStorage.getItem("accessToken");

  const handleChangeRole = (e) => {
    e.preventDefault();
    console.log("role changed");
    let user_id = e.target.id;
    let new_role = "teacher";
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
        allStudents.refetch();
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
    adminDeleteUserById({
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
        allStudents.refetch();
      })
      .catch((err) => {
        console.log("err", err);
        toast.error("User deletion failed ! ");
      });

    let data = students.filter((user) => {
      if (user.id !== user_id) return user;
    });

    setAllStudents(data);
  };
  console.log(allStudents.data);

  if (allStudents.loading) return <BoxLoading />;

  return (
    <div className="bg-white w-full  px-2 sm:px-8  py-2 sm:py-4">
      <div className="flex flex-col mt-4 border">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full sm:px-6 lg:px-8">
            <div
              className="border-b px-4 py-4 bg-primary-color-dark
            text-white flex justify-between items-center"
            >
              <h1 className="text-xl uppercase order-2 p-4 font-bold  ">
                student information
              </h1>
              <div className="flex items-center bg-white order-1 px-4 text-gray-400 h-[50px] rounded-lg">
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
                  allStudents.refetch()
                  }}/>
              </div>
            </div>
            <div className="overflow-scroll  max-h-[470px]">
              <table className="min-w-full relative">
                <thead className="bg-white border-b sticky top-0">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm w-[5rem] whitespace-nowrap overflow-auto font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      S No.
                    </th>
                    <th
                      scope="col"
                      className="text-sm w-[10rem] whitespace-nowrap overflow-auto font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm w-[10rem] whitespace-nowrap overflow-auto font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="text-sm w-[10rem] whitespace-nowrap overflow-auto font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Phone
                    </th>
                    <th
                      scope="col"
                      className="text-sm  w-[10rem] whitespace-nowrap  font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Change Role
                    </th>
                    <th
                      scope="col"
                      className="text-sm w-[10rem] whitespace-nowrap font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Delete Account
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {students
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
