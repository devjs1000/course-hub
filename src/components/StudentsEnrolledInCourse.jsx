import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useStore from "../context/useStore";
import NavTabs from "./NavTabs";
import { Tag, CardText, BackspaceFill } from "react-bootstrap-icons";
import { notifySpecificStudentMutation } from "../graphql/Mutations";
import { useMutation } from "@apollo/client";
import Button from "../UI/Button";
import toast from "react-hot-toast";

const StudentsEnrolledInCourse = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [notificationData, setNotificationData] = useState({
    title: "",
    about: "",
  });
  const [currentStudentId, setCurrentStudentId] = useState("");
  const { theme, myCourses } = useStore();
  const { id } = useParams();
  const [notifySpecificStudent] = useMutation(notifySpecificStudentMutation);

  const getAllSubscribers = () => {};

  useEffect(() => {
    let course = myCourses.filter((c) => c.id === id);
    setSubscribers(course[0]?.subscribers);
    // console.log(course[0]?.subscribers);
  }, [myCourses]);

  const getNotificationdata = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    const newData = { ...notificationData };
    newData[name] = value;
    // console.log(notificationData);
    // console.log(currentStudentId);
    setNotificationData(newData);
  };

  const submitNotifications = (e) => {
    e.preventDefault();
    // console.log(notificationData);

    if (
      (notificationData && !notificationData.title) ||
      (notificationData.title && notificationData.title.length == 0)
    ) {
      console.log("Invalid title");
      toast.error("Invalid title");
      return;
    }
    if (
      (notificationData && !notificationData.about) ||
      (notificationData.about && notificationData.about.length == 0)
    ) {
      console.log("Invalid description");
      toast.error("Invalid description");
      return;
    }
    if (
      notificationData &&
      notificationData.title &&
      notificationData.title.length > 1 &&
      notificationData.about &&
      notificationData.about.length > 1
    ) {
      const token = localStorage.getItem("accessToken");

      notifySpecificStudent({
        context: {
          headers: {
            Authorization: token,
          },
        },
        variables: {
          ...notificationData,
          target: currentStudentId,
        },
      })
        .then((res) => {
          console.log("res", res);
          toast.success("Notification send successfully");
          setCurrentStudentId("");
          setNotificationData({
            title: "",
            about: "",
          });
        })
        .catch((err) => {
          console.log("err", err);
          toast.error("Sending notification failed ! ");
        });
    }
  };

  const mainDivStyles = `${
    theme ? "bg-slate-800 text-white" : "bg-white"
  } py-8 px-16`;
  return (
    <div className={`${mainDivStyles}`}>
      <NavTabs id={id} />
      <div className="bg-white w-full px-8 py-4">
        <div className="flex flex-col mt-4 border">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full sm:px-6 lg:px-8">
              <div
                className="border-b px-4 py-4 bg-primary-color-dark
            text-white flex justify-between items-center"
              >
                <h1 className="text-lg uppercase p-2 font-bold  ">
                  Enrolled Students
                </h1>
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
                        Send Notification
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {subscribers?.map((subscriber, idx) => {
                      return (
                        <tr
                          className={`${
                            idx % 2 == 0 ? "bg-gray-100" : "bg-white"
                          } border-b`}
                          key={subscriber}
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {idx + 1}
                          </td>

                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {subscriber}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                            <button
                              id={subscriber}
                              onClick={(e) => setCurrentStudentId(e.target.id)}
                              className="bg-blue-500 flex justify-evenly
                            items-center p-2 font-bold
                            rounded-sm"
                            >
                              Notify
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
      {currentStudentId !== "" && (
        <div className="fixed top-0 left-0 w-[100%] h-full bg-gray-300">
          <div className="flex items-center justify-center min-h-full  py-8">
            <div className="border border-slate-300 relative bg-white w-[20rem] mx-2 p-8 flex items-center justify-center rounded-xl sm:w-[25rem]">
              <form
                className="w-full h-full"
                onSubmit={submitNotifications}
                id="notificationForm"
              >
                <p className="flex items-center text-3xl font-semibold mb-12 text-center">
                  <span
                    className="mr-4"
                    onClick={() => {
                      setCurrentStudentId("");
                    }}
                  >
                    <BackspaceFill size={"30px"} />
                  </span>
                  Send notifications
                </p>
                <div className="flex flex-col items-start gap-6 mb-12">
                  <div className="relative top-0 left-0 w-full">
                    <div className="absolute top-[50%] translate-y-[-50%] left-[2px] w-[3rem] h-[calc(100%-2px)] flex items-center justify-center rounded-tl-md rounded-bl-md border-r-[1px]">
                      <Tag className="TAGS" />
                    </div>
                    <input
                      type="text"
                      className="form-input border border-slate-300 w-full py-3 pr-2 pl-14 rounded-md bg-transparent hover:border-primary-color-dark focus:outline-none"
                      id="title"
                      autoComplete="off"
                      placeholder=" "
                      name="title"
                      onChange={getNotificationdata}
                      value={notificationData.title}
                      required
                    />
                    <label
                      htmlFor="title"
                      className="form-label text-slate-700 absolute left-[3.2rem] top-[0.7rem] transition-all duration-300 px-2 cursor-text bg-white"
                    >
                      {`${"title".slice(0, 1).toUpperCase()}${"title".slice(
                        1,
                        "title".length
                      )}`}
                    </label>
                  </div>
                  <div className="relative top-0 left-0 w-full">
                    <div className="absolute top-[50%] translate-y-[-50%] left-[2px] w-[3rem] h-[calc(100%-2px)] flex items-center justify-center rounded-tl-md rounded-bl-md border-r-[1px]">
                      <CardText className="DESCRIPTION" />
                    </div>
                    <input
                      type="text"
                      className="form-input border border-slate-300 w-full py-3 pr-2 pl-14 rounded-md bg-transparent hover:border-primary-color-dark focus:outline-none"
                      id="about"
                      autoComplete="off"
                      placeholder=" "
                      name="about"
                      onChange={getNotificationdata}
                      value={notificationData.about}
                      required
                    />
                    <label
                      htmlFor="about"
                      className="form-label text-slate-700 absolute left-[3.2rem] top-[0.7rem] transition-all duration-300 px-2 cursor-text bg-white"
                    >
                      {`${"about".slice(0, 1).toUpperCase()}${"about".slice(
                        1,
                        "about".length
                      )}`}
                    </label>
                  </div>
                </div>
                <div className="w-full flex justify-center">
                  <Button isPrimary={true} isWidthFull={true} type="submit">
                    Send
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentsEnrolledInCourse;
