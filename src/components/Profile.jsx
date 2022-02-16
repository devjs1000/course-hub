import React, { useState, useEffect } from "react";
import {
  BoxArrowLeft,
  CardText,
  CaretRight,
  FileEarmark,
  Moon,
  Pen,
  PersonCircle,
  Phone,
} from "react-bootstrap-icons";
import useStore from "../context/useStore";
import useAuthHook from "../hooks/useAuthHook";
import { profileDesign } from "../styles/styleObjects";
const Profile = () => {
  const { user } = useStore();
  const { logout } = useAuthHook();

  const joining = new Date(Date.parse(user.createdAt)).toString();
  const img1 =
    "https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?size=626&ext=jpg";

  return (
    <div className={profileDesign.mainDiv}>
      <div className={profileDesign.leftMain}>
        <div className={profileDesign.person}>
          <img className={profileDesign.leftPersonBg} src={img1} alt="" />

          <img
            className={profileDesign.profileImg}
            src={user.profilePicture}
            alt={user.name + " profile picture"}
          />

          <div className={profileDesign.leftInfoMain}>
            <p className={profileDesign.profileName}>{user.name}</p>
            <p className={profileDesign.intro}>{user.email}</p>
            <button className={profileDesign.editBtn}>Edit Profile</button>
          </div>
        </div>

        <div className={profileDesign.mainBtnDiv}>
          <div className={profileDesign.mainBtn}>
            <div className="flex items-center">
              <PersonCircle className={profileDesign.mainIcon} />
              <p className={profileDesign.mainBtnText}>Personal Info</p>
            </div>
            <CaretRight />
          </div>

          <div className={profileDesign.mainBtn}>
            <div className="flex items-center">
              <Phone className={profileDesign.mainIcon} />
              <p className={profileDesign.mainBtnText}>Contact Info</p>
            </div>
            <CaretRight />
          </div>
        </div>

        <h1 className={profileDesign.activityH1}>Your Activites</h1>

        <div className={profileDesign.mainBtnDiv}>
          <div className={profileDesign.mainBtn}>
            <div className="flex items-center">
              <CardText className={profileDesign.mainIcon} />
              <p className={profileDesign.mainBtnText}>Assignments</p>
            </div>
            <CaretRight />
          </div>

          <div className={profileDesign.mainBtn}>
            <div className="flex items-center">
              <FileEarmark className={profileDesign.mainIcon} />
              <p className={profileDesign.mainBtnText}>Worksheets</p>
            </div>
            <CaretRight />
          </div>

          <div className={profileDesign.mainBtn}>
            <div className="flex items-center">
              <Moon className={profileDesign.mainIcon} />
              <p className={profileDesign.mainBtnText}>Dark Theme</p>
            </div>
            <CaretRight />
          </div>

          <div onClick={logout} className={profileDesign.mainBtn}>
            <div className="flex items-center">
              <BoxArrowLeft className={profileDesign.mainIcon} />
              <p className={profileDesign.mainBtnText}>Logout</p>
            </div>
          </div>
        </div>
      </div>

      <div className={profileDesign.rightMain}>
        <div className="hidden md:block">
         <div className="relative">
         <img className="h-52 w-full" src={img1} alt="" />
         <Pen className="absolute bottom-3 right-3 h-6 w-6 text-white cursor-pointer"/>
         </div>
          <div className="ml-5 border-b-2 border-red-500 pb-4">
            <h1 className="my-5 text-xl text-red-600 font-bold">
              Detective Duche
            </h1>
            <p className="text-sm text-red-600 font-medium">
              Date of Birth <span className="ml-5">01.01.2000 (22Y)</span>
            </p>
          </div>
        </div>
        <div className="m-3 md:ml-5">
          <h2 className="text-xl font-semibold text-gray-700 md:mt-4">Courses Enrolled</h2>
          <div className="bg-gray-200 flex items-center p-3 mt-4">
            <h1 className="w-3/6 text-xl font-semibold text-red-700">Data Sceince</h1>
            <div className="flex items-center justify-between w-3/6">
              <p className="text-xs font-semibold">Completed</p>
              <p className="text-xs font-semibold underline text-red-700 cursor-pointer ml-3">Download Certificate</p>
            </div>
          </div>
          <div className="bg-gray-200 flex items-center p-3 mt-4">
            <h1 className="w-3/6 text-xl font-semibold text-red-700">Artificial Intelligance</h1>
            <div className="flex items-center justify-between w-3/6">
              <p className="text-xs font-semibold">Completed</p>
              <p className="text-xs font-semibold underline text-red-700 cursor-pointer ml-3">Download Certificate</p>
            </div>
          </div>
          <div className="bg-gray-200 flex items-center p-3 mt-4">
            <h1 className="w-3/6 text-xl font-semibold text-red-700">Frontend Developer</h1>
            <div className="flex items-center justify-between w-3/6">
              <p className="text-xs font-semibold">Completed</p>
              <p className="text-xs font-semibold underline text-red-700 cursor-pointer ml-3">Download Certificate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
