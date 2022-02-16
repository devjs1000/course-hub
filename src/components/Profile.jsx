import React, { useState, useEffect } from "react";
import {
  BoxArrowLeft,
  CardText,
  CaretRight,
  FileEarmark,
  Moon,
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
    "https://jooinn.com/images/silhouette-of-a-boy-during-sunset.jpg";

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

      <div className={profileDesign.rightMain}></div>
    </div>
  );
};

export default Profile;
