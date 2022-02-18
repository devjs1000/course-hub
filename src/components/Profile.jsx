import { useState, useEffect, Children } from "react";
import LongButton from "../UI/LongButton";
import { Pen } from "react-bootstrap-icons";
import useStore from "../context/useStore";
import useAuthHook from "../hooks/useAuthHook";
import { profileDesign } from "../styles/styleObjects";

const Profile = () => {
  const { user, myCourses } = useStore();

  console.log(myCourses);
  const { logout } = useAuthHook();
  const joining = new Date(Date.parse(user.createdAt)).toDateString();
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
          <LongButton icon="PERSONCIRCLE">Person Info</LongButton>

          <LongButton icon="PHONE">Contact Info</LongButton>
        </div>

        <h1 className={profileDesign.activityH1}>Your Activites</h1>

        <div className={profileDesign.mainBtnDiv}>
          <LongButton icon="CARDTEXT">Assignments</LongButton>
          <LongButton icon="FILEEARMARK">Worksheets</LongButton>
          <LongButton icon="MOON">Dark Them</LongButton>
          <LongButton icon="BOXARROWLEFT" onClick={logout}>
            Logout
          </LongButton>
        </div>
      </div>

      <div className={profileDesign.rightMain}>
        <div className="hidden md:block">
          <div className="relative">
            <img className="h-52 w-full" src={img1} alt="" />
            <Pen className="absolute bottom-3 right-3 h-6 w-6 text-white cursor-pointer" />
          </div>
          <div className="ml-5 border-b-2 border-red-500 pb-4">
            <h1 className="my-5 text-xl text-red-600 font-bold">{user.name}</h1>
            <p className="text-sm text-slate-800 font-medium">
              Date of joining
              <span className="ml-5 text-slate-500">{joining}</span>
            </p>
          </div>
        </div>
        <div className="m-3 md:ml-5">
          <h2 className="text-xl font-semibold text-slate-700 md:mt-4">
            Courses Enrolled
          </h2>
          {myCourses.length != 0
            ? Children.toArray(
                myCourses.map((a) => {
                  return (
                    <div className="bg-slate-100 flex items-center p-3 mt-4">
                      <h1 className="w-full text-xl  text-slate-700">
                        {a.courseId.name}
                      </h1>
                    </div>
                  );
                })
              )
            : "no courses"}
        </div>
      </div>
    </div>
  );
};

export default Profile;
