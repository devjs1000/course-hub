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
  //styles
  const mainContainerStyles = `p-8 ${
    theme ? "bg-slate-800 text-white" : "white text-black"
  } h-full`;

  

  return (
    <div className={mainContainerStyles}>
      
      <ProfileSettings/>
      <ContactSettings/>
      <Socials/>

    </div>

  );
}

export default Settings;
