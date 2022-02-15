import React, { useState, useEffect } from "react";
import {
  Activity,
  BoxArrowLeft,
  Journal,
  PatchCheck,
  Person,
  Play,
  Sliders,
  XDiamond,
} from "react-bootstrap-icons";
import useStore from "../context/useStore";
import useAuthHook from "../hooks/useAuthHook";
import { profileDesign } from "../styles/styleObjects";
const Profile = () => {
  const [active, setActive] = useState("profile");
  const { user } = useStore();
  const {logout} = useAuthHook();

  // const joining=new Date(Date.parse(user.data.createdAt)).toString()

  return (
    <div className={profileDesign.mainDiv}>
      <div className={profileDesign.leftMain}>
        <img
          className={profileDesign.profileImg}
          src={user?.data?.profilePicture}
          alt={user?.data?.name + " profile picture"}
        />

        <p className={profileDesign.profileName}>{user?.data?.name}</p>

        <p className={profileDesign.intro}>
          {user?.data?.isInstructor ? "Teacher" : "Student"}
        </p>
        {/* <p className={profileDesign.intro}>{joining}</p> */}

        <div
          onClick={() => setActive("profile")}
          className={
            active === "profile" ? profileDesign.active : profileDesign.mainBtn
          }
        >
          <Person className={profileDesign.mainIcon} />
          <p className={profileDesign.mainBtnText}>Profile</p>
        </div>

        <div
          onClick={() => setActive("edit")}
          className={
            active === "edit" ? profileDesign.active : profileDesign.mainBtn
          }
        >
          <Sliders className={profileDesign.mainIcon} />
          <p className={profileDesign.mainBtnText}>Edit Profile</p>
        </div>

        <div
          onClick={() => setActive("courses")}
          className={
            active === "courses" ? profileDesign.active : profileDesign.mainBtn
          }
        >
          <Journal className={profileDesign.mainIcon} />
          <p className={profileDesign.mainBtnText}>Courses</p>
        </div>

        <div
          onClick={() => setActive("verify")}
          className={
            active === "verify" ? profileDesign.active : profileDesign.mainBtn
          }
        >
          <PatchCheck className={profileDesign.mainIcon} />
          <p className={profileDesign.mainBtnText}>Verifications</p>
        </div>

        <div
          onClick={() => setActive("reset")}
          className={
            active === "reset" ? profileDesign.active : profileDesign.mainBtn
          }
        >
          <XDiamond className={profileDesign.mainIcon} />
          <p className={profileDesign.mainBtnText}>Reset Password</p>
        </div>

        <div
          onClick={() => setActive("activity")}
          className={
            active === "activity" ? profileDesign.active : profileDesign.mainBtn
          }
        >
          <Activity className={profileDesign.mainIcon} />
          <p className={profileDesign.mainBtnText}>Activity Log</p>
        </div>

        <div onClick={logout} className={profileDesign.mainBtn}>
          <BoxArrowLeft className={profileDesign.mainIcon} />
          <p className={profileDesign.mainBtnText}>Logout</p>
        </div>
      </div>
      
      <div className={profileDesign.rightMain}>
          {/* Top Part */}
        <div className="mb-5">
          <h1 className="text-xl font-bold">Welcome back, John!</h1>
          <p className="text-sm">You're doing great this week.Keep it up!</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-5 gap-3">
            <div className="">
              <p className="font-bold mb-3">Statistics</p>
              <div className="grid grid-cols-3 gap-2 text-white">
                <div className="bg-gradient-to-r from-red-700 to-red-300 p-2 rounded-xl ">
                  <h1 className="text-center text-2xl font-bold">5</h1>
                  <p className="text-sm text-center break-all">
                    Completed Courses
                  </p>
                </div>
                <div className="bg-gradient-to-r from-red-700 to-red-300 p-2 rounded-xl">
                  <h1 className="text-center text-2xl font-bold ">2</h1>
                  <p className="text-sm text-center break-all">
                    Courses in progress
                  </p>
                </div>
                <div className="bg-gradient-to-r from-red-700 to-red-300 p-2 rounded-xl">
                  <h1 className="text-center text-2xl font-bold">18.7</h1>
                  <p className="text-sm text-center break-all">Hour spent</p>
                </div>
              </div>
            </div>
            <div className="">
              <p className="font-bold mb-3">Continue to watch</p>
              <div className="bg-gradient-to-r from-red-400 to-orange-500 rounded-xl py-2 px-4">
                <Play className="h-8 w-8 text-white rounded-full bg-gradient-to-r from-blue-500 to-red-300 cursor-pointer" />
                <p className="text-sm text-white">Prototype and testing</p>
              </div>
            </div>
          </div>
        </div>
          {/* Info part */}
        <div className={profileDesign.infoMain}>
          <p>Name</p>
          <p>{user?.data?.name}</p>
        </div>

        <div className={profileDesign.infoMain}>
          <p>Email</p>
          <p>{user?.data?.email}</p>
        </div>

        <div className={profileDesign.infoMain}>
          <p>Phone</p>
          <p>{user?.data?.mobileNumber}</p>
        </div>

        <div className={profileDesign.infoMain}>
          <p>Linkedin</p>
          <p>{user?.data?.linkedInLink}</p>
        </div>

        <div className={profileDesign.infoMain}>
          <p>Github</p>
          <p>{user?.data?.githubLink}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
