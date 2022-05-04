import React, { useState } from "react";
import { Envelope, Lock, ArrowLeft } from "react-bootstrap-icons";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import FormControl from "../../UI/FormControl";
import Button from "../../UI/Button";
import toast from "react-hot-toast";
import { useMutation } from "@apollo/client";
import { updatePasswordMutation } from "../../graphql/Mutations";

const NewPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const token = localStorage.getItem("accessToken");
  const [updatePassword] = useMutation(updatePasswordMutation);
  const navigate = useNavigate();

  const getPassword = (e) => {
    console.log(e.target.value);
    setNewPassword(e.target.value);
  };

  const submitPassword = async (e) => {
    e.preventDefault();

    let res;
    try {
      res = await updatePassword({
        variables: {
          password: newPassword,
        },
        context: {
          headers: {
            Authorization: token,
          },
        },
      });

      if (res?.data?.updatePassword) {
        toast.success("Password changed successfully");
        navigate("/login");
      } else {
        toast.error("Password updation failed.Try again");
        document.getElementById("myForm").reset();
      }
    } catch (err) {
      // console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-red-800 flex items-center justify-center">
      <div className="relative bg-white w-[25rem] mx-2 py-16 flex items-center justify-center rounded-xl sm:w-[27rem]">
        <Link to="/login">
          <ArrowLeft className="absolute top-4 left-11 text-2xl cursor-pointer text-gray-600 hover:text-gray-900" />
        </Link>
        <form className="w-4/5 h-full" onSubmit={submitPassword} id="myForm">
          <h2 className="text-4xl font-semibold mb-12">Change Password</h2>
          <div className="flex flex-col items-start gap-6 mb-12">
            <FormControl
              type="password"
              label="new password"
              icon="LOCK"
              onChange={getPassword}
            />
          </div>
          <Button isPrimary={true} isWidthFull={true} type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
