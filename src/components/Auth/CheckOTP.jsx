import React, { useState, useEffect } from "react";
import { ArrowLeft } from "react-bootstrap-icons";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import FormControl from "../../UI/FormControl";
import Button from "../../UI/Button";
import toast from "react-hot-toast";
import { checkOtpQuery } from "../../graphql/Queries";
import { useQuery, useMutation } from "@apollo/client";
import { forgetPasswordMutation } from "../../graphql/Mutations";
import useStore from "../../context/useStore";

const CheckOTP = () => {
  const { forgetPasswordData, setForgetPasswordData } = useStore();
  const [timer, setTimer] = useState(120);
  const navigate = useNavigate();

  const [forgetPassword] = useMutation(forgetPasswordMutation);

  const { refetch } = useQuery(checkOtpQuery, {
    variables: {
      otp: forgetPasswordData?.otp,
      email: forgetPasswordData?.email,
    },
    enabled: false,
  });

  useEffect(() => {
    let timerRef = setTimeout(() => {
      setTimer(timer - 1);
    }, 1000);

    if (timer <= 0) {
      toast.error("Token has expired");
      navigate("/verify-email");
    }
  }, [timer]);

  const getData = (e) => {
    let name = "otp";
    let value = parseInt(e.target.value);
    const newData = { ...forgetPasswordData };
    newData[name] = value;

    console.log(newData);
    setForgetPasswordData(newData);
  };

  const otpVerification = async (e) => {
    e.preventDefault();

    let res = await refetch();
    console.log(res?.data?.checkOtp);
    if (res?.data?.checkOtp === false) navigate("/new-password");
  };

  return (
    <div className="min-h-screen bg-red-800 flex items-center justify-center">
      <div className="relative bg-white w-[25rem] mx-2 py-16 flex items-center justify-center rounded-xl sm:w-[27rem]">
        <Link to="/verify-email">
          <ArrowLeft className="absolute top-4 left-11 text-2xl cursor-pointer text-gray-600 hover:text-gray-900" />
        </Link>
        <form className="w-4/5 h-full">
          <h2 className="text-4xl font-semibold mb-12">Check OTP</h2>
          <div className="flex flex-col items-start gap-2 mb-8">
            <FormControl
              type="number"
              label="enter otp"
              icon="PERSON"
              onChange={getData}
            />
            <p className="self-end text-red-500">{timer} seconds left</p>
          </div>

          <Button
            isPrimary={true}
            isWidthFull={true}
            type="submit"
            onClick={otpVerification}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CheckOTP;
