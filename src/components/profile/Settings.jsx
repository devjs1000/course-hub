import React, { useState, Children } from "react";
import useStore from "../../context/useStore";
import Button from "./Button";
import { useQuery, useMutation } from "@apollo/client";
import { updateProfile } from "../../graphql/Mutations";
import toast from "react-hot-toast";
import { data } from "../Settings/data";
import InputField from "../Settings/inputField";
import ProfileSettings from "../Settings/ProfileSettings";
import ContactSettings from "../Settings/ContactSettings";
import Socials from "../Settings/Socials";


function Settings() {
  const { theme, setTheme, user } = useStore();

  const [password, setPassword] = useState(user.password);
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email);
  const [description, setDescription] = useState(user.description);
  const [image, setImage] = useState("");
  const [image2, setImage2] = useState("");
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
    image,
    github,
    linkedIn,
    description,
  ];
  const token = localStorage.getItem("accessToken");
  const [updateProfile2] = useMutation(updateProfile, {
    context: {
      headers: {
        Authorization: token,
      },
    },
  });

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
    // setImage2(URL.createObjectURL(e.target.files[0]));
    console.log(e.target.files[0].name);
  };
  const handleGithub = (e) => {
    setGithub(e.target.value);
  };
  const handleLinkedIn = (e) => {
    setLinkedIn(e.target.value);
  };


  return (
    <div className={mainContainerStyles}>
      
      <ProfileSettings/>
      <ContactSettings/>
      <Socials/>

    </div>

  );
}

export default Settings;
