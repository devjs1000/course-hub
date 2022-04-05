import React, { useState } from "react";
import { Envelope, Lock, ArrowLeft } from "react-bootstrap-icons";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import FormControl from "../../UI/FormControl";
import Button from "../../UI/Button";
import useStore from "../../context/useStore";
import useAuthHook from "../../hooks/useAuthHook";

const AdminLogin = () => {
  const { login } = useAuthHook();
  const [loginData, setLoginData] = useState({});

  const getLoginData = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === "email") {
      value = value.toLowerCase();
    }
    const newData = { ...loginData };
    newData[name] = value;
    setLoginData(newData);
  };

  const submitLogin = (e) => {
    e.preventDefault();
    login(loginData);
  };

  return (
    <div className="min-h-screen bg-red-800 flex items-center justify-center">
      <div className="relative bg-white w-[25rem] mx-2 py-16 flex items-center justify-center rounded-xl sm:w-[27rem]">
        <Link to="/">
          <ArrowLeft className="absolute top-4 left-11 text-2xl cursor-pointer text-gray-600 hover:text-gray-900" />
        </Link>
        <form className="w-4/5 h-full" onSubmit={submitLogin}>
          <h2 className="text-4xl font-semibold mb-12">Login</h2>
          <div className="flex flex-col items-start gap-6 mb-12">
            <FormControl
              type="email"
              label="email"
              icon="PERSON"
              onChange={getLoginData}
            />
            <FormControl
              type="password"
              label="password"
              icon="LOCK"
              onChange={getLoginData}
            />
          </div>
          <Button isPrimary={true} isWidthFull={true} type="submit">
            Log In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
