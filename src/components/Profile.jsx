import React from 'react';
import { Activity, BoxArrowLeft, Journal, PatchCheck, Person,  Sliders, XDiamond } from 'react-bootstrap-icons';

const Profile = () => {
    const image = 'https://cdn.pixabay.com/photo/2020/05/11/15/38/tom-5158824_960_720.png'

    const profileDesign={
        mainDiv:'grid grid-cols-12 gap-3 p-3 my-3 mx-3 md:mx-12 bg-slate-100',
        leftMain:'col-span-12 md:col-span-4 lg:col-span-3  p-4 h-fit bg-slate-100',
        profileImg:'p-2 w-24 h-24 rounded-full block mx-auto shadow-2xl',
        profileName:'text-lg font-bold text-center mt-4 text-gray-800',
        intro:'text-center text-md font-semibold',
        mainBtn:'ease-in duration-200 w-full flex items-center mt-3 hover:bg-red-700 hover:text-white py-1 rounded-lg shadow-md cursor-pointer bg-white',
        mainIcon:'mx-2 w-8 h-8 p-1',
        mainBtnText:'text-md font-bold',
        rightMain:'col-span-12 md:col-span-8 lg:col-span-9 shadow-lg p-4 rounded-lg h-fit bg-white',
        infoMain:'flex justify-between items-center border-b pb-2 text-md font-semibold px-3 mb-3',
    }
    
    return (
        <div className={profileDesign.mainDiv}>
            <div className={profileDesign.leftMain}>

                <img className={profileDesign.profileImg} src={image} alt="" />

                <p className={profileDesign.profileName}>Shakil Ahmed</p>

                <p className={profileDesign.intro}>Student</p>
                <p className={profileDesign.intro}>Joined at 10th July 2020</p>

                <div className={profileDesign.mainBtn}>
                <Person className={profileDesign.mainIcon}/>
                <p className={profileDesign.mainBtnText}>Profile</p>
                </div>

                <div className={profileDesign.mainBtn}>
                <Sliders className={profileDesign.mainIcon}/>
                <p className={profileDesign.mainBtnText}>Edit Profile</p>
                </div>

                <div className={profileDesign.mainBtn}>
                <Journal className={profileDesign.mainIcon}/>
                <p className={profileDesign.mainBtnText}>Courses</p>
                </div>

                <div className={profileDesign.mainBtn}>
                <PatchCheck className={profileDesign.mainIcon}/>
                <p className={profileDesign.mainBtnText}>Verifications</p>
                </div>

                <div className={profileDesign.mainBtn}>
                <XDiamond className={profileDesign.mainIcon}/>
                <p className={profileDesign.mainBtnText}>Reset Password</p>
                </div>

                <div className={profileDesign.mainBtn}>
                <Activity className={profileDesign.mainIcon}/>
                <p className={profileDesign.mainBtnText}>Activity Log</p>
                </div>

                <div className={profileDesign.mainBtn}>
                <BoxArrowLeft className={profileDesign.mainIcon}/>
                <p className={profileDesign.mainBtnText}>Logout</p>
                </div>

            </div>
            <div className={profileDesign.rightMain}>

                <div className={profileDesign.infoMain}>
                    <p>Name</p>
                    <p>Shakil Ahmed</p>
                </div>

                <div className={profileDesign.infoMain}>
                    <p>Email</p>
                    <p>someone@mail.com</p>
                </div>

                <div className={profileDesign.infoMain}>
                    <p>Phone</p>
                    <p>+14786892365</p>
                </div>

                <div className={profileDesign.infoMain}>
                    <p>Address</p>
                    <p>4092 Hickman Street,Northbrook </p>
                </div>

                <div className={profileDesign.infoMain}>
                    <p>Linkedin</p>
                    <p>https://linkedin.com</p>
                </div>

                <div className={profileDesign.infoMain}>
                    <p>Github</p>
                    <p>https://github.com</p>
                </div>

                <div className={profileDesign.infoMain}>
                    <p>Skills</p>
                    <p>no experience</p>
                </div>

            </div>
        </div>
    );
};

export default Profile;