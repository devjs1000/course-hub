import React, { useEffect, useState } from "react";
import { ArrowLeft } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";
import FormControl from "../../UI/FormControl";
import Button from "../../UI/Button";
import useAuthHook from "../../hooks/useAuthHook";
import useStore from "../../context/useStore";

const Signup = () => {
  const { user } = useStore();
  const { signup } = useAuthHook();
  const [signupData, setSignupData] = useState({});
  const navigate = useNavigate();

  const getSignupData = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === "email") {
      value = value.toLowerCase();
    }
    const newData = { ...signupData };
    newData[name] = value;
    setSignupData(newData);
  };

  const submitSignup = (e) => {
    e.preventDefault();
    signup(signupData);
  };

//if the id is available, redirect to homepage
  useEffect(() => {
    if (user?.id) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="bg-gradient-to-r from-red-400 to-pink-300  flex items-center justify-center h-[100vh]  py-2">
    <img 
      src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="man-laughing-with-team"
        className='hidden lg:block h-3/5 mr-20'
      />
      <div className="relative bg-white w-[25rem] mx-2 py-14 flex items-center justify-center rounded-xl sm:w-[30rem]">
        <Link to="/">
          <ArrowLeft className="absolute top-4 left-11 text-2xl cursor-pointer text-gray-600 hover:text-gray-900" />
        </Link>
        <form className="w-4/5 h-full" onSubmit={submitSignup}>
          <h2 className="text-4xl font-semibold mb-12">Sign up</h2>
          <div className="flex flex-col items-start gap-6 mb-12">
            <FormControl
              type="text"
              label="name"
              icon="PERSON"
              onChange={getSignupData}
            />
            <FormControl
              type="email"
              label="email"
              icon="EMAIL"
              onChange={getSignupData}
            />
            <FormControl
              type="password"
              label="password"
              icon="LOCK"
              onChange={getSignupData}
            />
            <FormControl
              type="text"
              label="description"
              icon="PHONE"
              onChange={getSignupData}
            />
            <FormControl
              type="text"
              label="phone"
              icon="PHONE"
              onChange={getSignupData}
            />
            <FormControl
              type="text"
              label="image"
              icon="PHONE"
              onChange={getSignupData}
            />
          </div>
          <Button isPrimary={true} isWidthFull={true} type="submit">
            Sign up
          </Button>
          <p className="text-center mt-5">
            Already have an account?{" "}
            <Link to="/login" className="text-primary-color-dark font-semibold">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
