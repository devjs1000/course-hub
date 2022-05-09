
import { ArrowLeft } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import FormControl from "../../UI/FormControl";
import Button from "../../UI/Button";
import { 
    Person,
    Tag,
    CardText
 } from "react-bootstrap-icons";
import { useMutation } from "@apollo/client";
import { 
    sendStudentNotificationsMutation,
    sendTeacherNotificationsMutation
} from "../../graphql/Mutations";
import toast, {Toaster} from 'react-hot-toast';

export const SendNotifications = () => {
    const [sendStudentNotificationsFunction] = useMutation(sendStudentNotificationsMutation);
    const [sendTeacherNotificationsFunction] = useMutation(sendTeacherNotificationsMutation);

    const [notificationData, setNotificationData] = useState({
        title:"",
        about:"",
        role:"undefined"});
    const getNotificationdata = (e) => {
      const name = e.target.name;
      let value = e.target.value;
      const newData = { ...notificationData };
      newData[name] = value;
      setNotificationData(newData);
    };
    const submitNotifications = (e) => {
      console.log(notificationData);
      e.preventDefault();
      if ( notificationData  && notificationData.role && notificationData.role == "undefined") {
        console.log("Select appropiate target group")
        toast.error('Select appropiate target group');
        return ;
      }
      if ( notificationData  &&  ! notificationData.title || (notificationData.title && notificationData.title.length ==0)) {
        console.log("Invalid title")
        toast.error("Invalid title");
        return ;
      }
      if ( notificationData  &&  ! notificationData.about || (notificationData.about && notificationData.about.length ==0)) {
        console.log("Invalid description")
        toast.error("Invalid description");
        return ;
      }
      if ( notificationData && notificationData.title && notificationData.title.length > 1
         && notificationData.about && notificationData.about.length >1 
         && notificationData.role && notificationData.role != "undefined") {
          console.log(notificationData);
          const token = localStorage.getItem("accessToken");
          console.log(token);
          if (notificationData.role == "student") {
            sendStudentNotificationsFunction(
                {
                    context: {
                    headers: {
                        Authorization: token,
                    },
                    },
                    variables: notificationData
                }).then((res)=>{
                    console.log("res",res);
                    toast.success("Notification send successfully");
                    setNotificationData({
                        title:"",
                        about:"",
                        role:"undefined"});
                    // setTimeout(() => {
                    //   location.reload();
                    // }, 3000);
                }).catch((err)=>{
                console.log("err",err);
                toast.error("Sending notification failed ! ")
                });
          } else if (notificationData.role == "teacher") {
            sendTeacherNotificationsFunction(
                {
                    context: {
                    headers: {
                        Authorization: token,
                    },
                    },
                    variables: notificationData
                }).then((res)=>{
                    console.log("res",res);
                    toast.success("Notification send successfully");
                    setNotificationData({
                        title:"",
                        about:"",
                        role:"undefined"});
                    // setTimeout(() => {
                    //   location.reload();
                    // }, 3000);
                }).catch((err)=>{
                console.log("err",err);
                toast.error("Sending notification failed ! ")
                });
          } else {
              toast.error("Invalid operation !");
          }
      }
  
    };
    return (
        <div>
            <div className="flex items-center justify-center min-h-full  py-8">
                <div className="border border-slate-300 relative bg-white w-[20rem] mx-2 p-8 flex items-center justify-center rounded-xl sm:w-[25rem]">
                    <form className="w-full h-full" 
                    onSubmit={submitNotifications}
                    >
                    <p className="text-3xl font-semibold mb-12 text-center">Send notifications</p>
                    <div className="flex flex-col items-start gap-6 mb-12">

                        <div className="relative top-0 left-0 w-full">
                            <div className="absolute top-[50%] translate-y-[-50%] left-[2px] w-[3rem] h-[calc(100%-2px)] flex items-center justify-center rounded-tl-md rounded-bl-md border-r-[1px]">
                                <Tag className="TAGS" />
                            </div>
                            <input
                                type="text"
                                className="form-input border border-slate-300 w-full py-3 pr-2 pl-14 rounded-md bg-transparent hover:border-primary-color-dark focus:outline-none"
                                id="title"
                                autoComplete="off"
                                placeholder=" "
                                name="title"
                                onChange={getNotificationdata}
                                value = {notificationData.title}
                                required
                            />
                            <label
                                htmlFor="title"
                                className="form-label text-slate-700 absolute left-[3.2rem] top-[0.7rem] transition-all duration-300 px-2 cursor-text bg-white"
                            >
                                {`${"title".slice(0, 1).toUpperCase()}${"title".slice(1, "title".length)}`}
                            </label>
                        </div>
                        <div className="relative top-0 left-0 w-full">
                            <div className="absolute top-[50%] translate-y-[-50%] left-[2px] w-[3rem] h-[calc(100%-2px)] flex items-center justify-center rounded-tl-md rounded-bl-md border-r-[1px]">
                                <CardText className="DESCRIPTION" />
                            </div>
                            <input
                                type="text"
                                className="form-input border border-slate-300 w-full py-3 pr-2 pl-14 rounded-md bg-transparent hover:border-primary-color-dark focus:outline-none"
                                id="about"
                                autoComplete="off"
                                placeholder=" "
                                name="about"
                                onChange={getNotificationdata}
                                value = {notificationData.about}
                                required
                            />
                            <label
                                htmlFor="about"
                                className="form-label text-slate-700 absolute left-[3.2rem] top-[0.7rem] transition-all duration-300 px-2 cursor-text bg-white"
                            >
                                {`${"about".slice(0, 1).toUpperCase()}${"about".slice(1, "about".length)}`}
                            </label>
                        </div>
                        <div className="relative top-0 left-0 w-full">
                            <div className="absolute top-[50%] translate-y-[-50%] left-[2px] w-[3rem] h-[calc(100%-2px)] flex items-center justify-center rounded-tl-md rounded-bl-md border-r-[1px]">
                            <Person className="PERSON" />
                            </div>
                            <select
                                className="form-input border border-slate-300 w-full py-3 pr-2 pl-14 rounded-md bg-transparent hover:border-primary-color-dark focus:outline-none"
                                id="Type"
                                name="role"
                                required
                                onChange={getNotificationdata}
                                value = {notificationData.role}
                            >
                                <optgroup>
                                    <option value="undefined" disabled>Target group</option>
                                    <option value="student">Student</option>
                                    <option value="teacher">Teacher</option>
                                </optgroup>
                                </select>
                            </div>
                    </div>
                    <div className="w-full flex justify-center">
                        <Button isPrimary={true} isWidthFull={true} type="submit">
                            Send
                        </Button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
}