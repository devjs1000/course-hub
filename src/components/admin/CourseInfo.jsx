import React, { useEffect, useState } from "react";
import useStore from "../../context/useStore";
import { FileEarmarkArrowDownFill, Search, Trash } from "react-bootstrap-icons";
import { adminDeleteCourseByIdMutation } from "../../graphql/Mutations";
import { useMutation } from "@apollo/client";

export const CourseInfo = () => {
  const { allCoursesData, setAllCoursesData, allUsersData } = useStore();
  const [inputField, setInputField] = useState("");
  const [data, setData] = useState([]);
  const [adminDeleteCourseById] = useMutation(adminDeleteCourseByIdMutation);

  useEffect(() => {
    if (!allCoursesData.length) return;

    let tem = [];
    allCoursesData.forEach((element) => {
      tem.push(element);
    });

    tem.sort((a, b) => {
      if (a.name.toLowerCase() <= b.name.toLowerCase()) return -1;
      return 1;
    });

    setData(tem);
  }, [allCoursesData]);

  const token = localStorage.getItem("accessToken");
  const handleDeleteCourse = async (e) => {
    e.preventDefault();
    let c_id = e.target.id;

    await adminDeleteCourseById({
      variables: {
        courseId: c_id,
      },
      context: {
        headers: {
          Authorization: token,
        },
      },
    });

    const data = allCoursesData.filter((course) => {
      if (course.id !== c_id) return course;
    });
    //console.log(data)
    setAllCoursesData(data);
  };

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
                courses information
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
                      Tutor
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      No. of Subscribers
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
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
                          className={`${
                            idx % 2 == 0 ? "bg-gray-100" : "bg-white"
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
                            {allUsersData
                              ?.filter((user) => {
                                if (user.id === course.teacherId) return user;
                              })
                              .map((user) => user.name)}
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
