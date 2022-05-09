import React, { useState } from "react";
import useStore from "../context/useStore";
import { useMutation } from "@apollo/client";
import { projectSubmitMutation } from "../graphql/Mutations";
import toast from "react-hot-toast";

export default ({ courseId, chapterId }) => {
  const { user, myCourses } = useStore();
  const [formData, setFormData] = useState({});
  const [submitProject] = useMutation(projectSubmitMutation);
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormData((val) => ({ ...val, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("accessToken");
    submitProject({
      headers:{
        Authorization: token
      },
      variables: { ...formData, teacherId: user.id, courseId, chapterId },
    }).then((res)=>{
      setFormData({});
      console.log("res",res);
      toast.success("Assignment created succesfully ! ");
      setTimeout(() => {
        location.reload();
      }, 3000);
    }).catch((err)=>{
      console.log("err",err);
      toast.error("Assignment creation failed ! ")
    });
  };

  return (
    <div className="w-full h-screen bg-red-700 flex items-center">
      <div className="w-[25rem] mx-auto bg-white p-3 rounded-lg my-3">
        <h1 className="text-2xl font-bold  px-5 text-red-700">
          Create Assignment
        </h1>
        <form
          className="bg-white p-5 flex flex-col items-center justify-between"
          onSubmit={handleSubmit}
        >
          <input
            className="w-full my-2 bg-slate-100  px-2 py-2 rounded-md outline-none"
            required
            onChange={handleChange}
            placeholder="Assignment Link"
            name="assignmentLink"
            type="text"
          />

          <button
            className="m-btn px-3 py-2 mt-2 font-bold bg-red-700 text-slate-100 w-full"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
