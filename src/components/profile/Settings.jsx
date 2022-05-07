import React, { useState, Children } from "react";
import useStore from "../../context/useStore";
import Button from "./Button";
import { useQuery, useMutation } from "@apollo/client";
import { updateProfile } from "../../graphql/Mutations";
import toast from "react-hot-toast";
import { data } from "../Settings/data";
import InputField from "../Settings/inputField";

function Settings() {
  const { theme, setTheme, user } = useStore();

  const [password, setPassword] = useState(user.password);
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email);
  const [description, setDescription] = useState(user.description);
  const [image, setImage] = useState("");
  const [github, setGithub] = useState(
    user.github === undefined ? "" : user.github
  );
  const [linkedIn, setLinkedIn] = useState(
    user.linkedIn === undefined ? "" : user.linkedIn
  );
  let values = [
    name,
    email,
    phone,
    password,
    description,
    image,
    github,
    linkedIn,
  ];
  const token = localStorage.getItem("accessToken");
  const [updateProfile2] = useMutation(updateProfile, {
    context: {
      headers: {
        Authorization: token,
      },
    },
  });

  console.log(user);

  //styles
  const mainContainerStyles = `p-8 ${
    theme ? "bg-slate-800 text-white" : "white text-black"
  } h-full`;
  const btnStyles = `text-white bg-blue-700 mt-4 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`;

  //functions to handle the changes to the fields
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handlePassword = (e) => {
    if (e.target.value !== "" || e.target.value !== " ")
      setPassword(e.target.value);
  };

  const handleImage = (e) => {
    console.log(e.target.files[0].name);
    // setImage(e.target.files[0].name);
  };
  const handleGithub = (e) => {
    setGithub(e.target.value);
  };
  const handleLinkedIn = (e) => {
    setLinkedIn(e.target.value);
  };

  let handlers = [
    handleName,
    handleEmail,
    handlePhone,
    handlePassword,
    handleDescription,
    handleImage,
    handleGithub,
    handleLinkedIn,
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.promise(
      updateProfile2({
        headers: {
          Authorization: token,
        },
        variables: {
          name: name,
          email: email,
          phone: phone,
          description: description,
          image: image,
          github: github,
          linkedIn: linkedIn,
        },
      }).then((res) => console.log(res)),
      {
        loading: "Saving...",
        success: <b>Settings saved!</b>,
        error: <b>Could not save.</b>,
      }
    );
  };

  let i = -1;
  let list = Children.toArray(
    data.map((obj) => {
      i++;
      return (
        <InputField
          label={obj.label}
          labelTitle={obj.labelTitle}
          img={obj.img}
          type={obj.type}
          value={values[i]}
          handleFunc={handlers[i]}
        />
      );
    })
  );
  return (
    <div className={mainContainerStyles}>
      <div className=" w-3/4 flex flex-row">
        <span className="text-2xl">Dark Mode:</span>
        <Button />
      </div>
      <form
        action=""
        className="m-4 flex flex-col justify-around"
        onSubmit={handleSubmit}
      >
        <h1 className="my-4 text-lg font-bold text-blue-700">
          Update You Details
        </h1>
        {list}
        <button type="submit" className={btnStyles}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Settings;
