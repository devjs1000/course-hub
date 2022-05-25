import React, { useEffect, useState } from "react";
import useStore from "../../context/useStore";
import { FileEarmarkArrowDownFill, Search, Trash, ArrowClockwise } from "react-bootstrap-icons";
import { adminDeleteCourseByIdMutation } from "../../graphql/Mutations";
import { allCoursesQuery } from "../../graphql/Queries";
import { useMutation, useQuery } from "@apollo/client";
import toast from "react-hot-toast";

export const CourseInfo = () => {
  const [inputField, setInputField] = useState("");
  const [data, setData] = useState([]);
  const [adminDeleteCourseById] = useMutation(adminDeleteCourseByIdMutation);
  const allCoursesData = useQuery(allCoursesQuery);

  console.log();

  useEffect(() => {
    if (allCoursesData.loading) return;

    let tem = allCoursesData.data.courses;
    console.log(tem);

    setData(tem);
  }, [allCoursesData.data]);

  const token = localStorage.getItem("accessToken");
  const handleDeleteCourse = async (e) => {
    e.preventDefault();
    let c_id = e.target.id;
    //console.log("deleted", e.target.id);
    adminDeleteCourseById({
      variables: {
        courseId: c_id,
      },
      context: {
        headers: {
          Authorization: token,
        },
      },
    })
      .then((res) => {
        console.log("res", res);
        toast.success("Course deleted succesfully ! ");
        allCoursesData.refetch();
      })
      .catch((err) => {
        console.log("err", err);
        toast.error("Course deletion failed ! ");
      });

    const data = allCoursesData.filter((course) => {
      if (course.id !== c_id) return course;
    });

    //console.log(data);
    setAllCoursesData(data);
  };

  return (
    <div className="bg-white w-full sm:px-8 p-2 sm:py-4">
      <div className="flex flex-col mt-4 border">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full sm:px-6 lg:px-8">
            <div
              className="border-b px-4 py-4 bg-primary-color-dark
            text-white flex justify-between items-center"
            >
              <h1 className="text-xl uppercase p-4 font-bold  order-2 ">
                courses information
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
                  allCoursesData.refetch()
                  }}/>
              </div>
            </div>
            <div className="overflow-scroll  max-h-[470px]">
              <table className="min-w-full relative">
                <thead className="bg-white border-b sticky top-0">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm w-[5rem] whitespace-nowrap font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      S No.
                    </th>
                    <th
                      scope="col"
                      className="text-sm w-[10rem] whitespace-nowrap font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Name
                    </th>

                    <th
                      scope="col"
                      className="text-sm w-[10rem] whitespace-nowrap font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Tutor
                    </th>
                    <th
                      scope="col"
                      className="text-sm w-[10rem] whitespace-nowrap font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="text-sm w-[10rem] whitespace-nowrap font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      No. of Subscribers
                    </th>
                    <th
                      scope="col"
                      className="text-sm whitespace-nowrap font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Delete Course
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data
                    ?.filter((course) => {
                      if (inputField === "") return course;
                      else if (
                        course.name
                          .toLowerCase()
                          .includes(inputField.toLowerCase()) === true
                      )
                        return course;
                    })
                    ?.map((course, idx) => {
                      return (
                        <tr
                          className={`${idx % 2 == 0 ? "bg-gray-100" : "bg-white"
                            } border-b`}
                          key={course.id}
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {idx + 1}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {course.name}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {/*allUsersData
                              ?.filter((user) => {
                                if (user.id === course.teacherId) return user;
                              })
                              .map((user) => user.name)*/}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {course.price}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {course.noOfSubscribers === null
                              ? 0
                              : course.noOfSubscribers}
                          </td>

                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                            <button
                              id={course.id}
                              onClick={handleDeleteCourse}
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
