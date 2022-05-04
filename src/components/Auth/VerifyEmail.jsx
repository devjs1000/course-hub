import React, { useState } from "react";
import { ArrowLeft } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";
import FormControl from "../../UI/FormControl";
import Button from "../../UI/Button";
import toast from "react-hot-toast";
import { isValidUserQuery, checkOtpQuery } from "../../graphql/Queries";
import { useQuery, useMutation } from "@apollo/client";
import { forgetPasswordMutation } from "../../graphql/Mutations";
import useStore from "../../context/useStore";

// Toast for success and failure in email verification
const emailSuccess = () => toast.success("Email verified successfully");
const emailFailure = () => toast.error("Email does not exist");

//Toast for success and failuer in otp sending
const otpSuccess = () => toast.success("OTP sent successfully");
const otpFailure = () => toast.error("Error occurred in sending otp.Try again");

const VerifyEmail = () => {
  const { forgetPasswordData, setForgetPasswordData } = useStore();
  const navigate = useNavigate();

  const [forgetPassword] = useMutation(forgetPasswordMutation);

  const { loading, error, data, refetch } = useQuery(isValidUserQuery, {
    variables: {
      email: forgetPasswordData?.email,
    },
    enabled: false,
  });

  const getData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "email") {
      value = value.toLowerCase();
    }
    const newData = { ...forgetPasswordData };
    newData[name] = value;
    setForgetPasswordData(newData);
  };

  const SendOtp = async (e) => {
    e.preventDefault();
    let res = await refetch();

    // console.log(res?.data?.isValidUser + " -- email verified");

    if (res?.data?.isValidUser === true) {
      emailSuccess();

      let res2 = await forgetPassword({
        variables: {
          email: forgetPasswordData?.email,
        },
      });

      // console.log(res2?.data?.forgetPassword + "-- otp send");

      if (res2?.data?.forgetPassword) {
        otpSuccess();
        navigate("/check-otp");
      } else {
        otpFailure();
      }
    } else {
      document.getElementById("myForm").reset();
      emailFailure();
    }
  };

  return (
    <div className="min-h-screen bg-red-800 flex items-center justify-center">
      <div className="relative bg-white w-[25rem] mx-2 py-16 flex items-center justify-center rounded-xl sm:w-[27rem]">
        <Link to="/login">
          <ArrowLeft className="absolute top-4 left-11 text-2xl cursor-pointer text-gray-600 hover:text-gray-900" />
        </Link>
        <form className="w-4/5 h-full" id="myForm">
          <h2 className="text-4xl font-semibold mb-12">Verify Email</h2>
          <div className="flex flex-col items-start gap-6 mb-12">
            <FormControl
              type="email"
              label="email"
              icon="EMAIL"
              onChange={getData}
            />
          </div>

          <Button
            isPrimary={true}
            isWidthFull={true}
            type="submit"
            onClick={SendOtp}
          >
            Send OTP
          </Button>
        </form>
      </div>
    </div>
  );
};

export default VerifyEmail;
