import React from 'react';
import { Facebook, Github, Google, Headphones, LightbulbOff, Linkedin, Twitter } from 'react-bootstrap-icons';

const Profile = () => {
    const image = 'https://cdn.pixabay.com/photo/2020/05/11/15/38/tom-5158824_960_720.png'

    const profileDesign={
        mainDiv:'grid grid-cols-12 gap-3 p-3 my-3 mx-3 md:mx-12 bg-slate-100',
        leftMain:'col-span-12 md:col-span-4 lg:col-span-3  p-4 h-fit bg-slate-100',
        profileImg:'p-2 w-24 h-24 rounded-full block mx-auto shadow-2xl',
        profileName:'text-lg font-bold text-center mt-4 text-gray-800',
        editBtn:'ease-in duration-200 pb-1 border-2 border-red-700 rounded-md font-semibold text-md text-red-700 px-2 block mx-auto my-3 hover:bg-red-700 hover:text-white',
        mainBtn:'ease-in duration-200 w-full flex items-center mt-3 hover:bg-red-700 hover:text-white py-1 rounded-lg shadow-md cursor-pointer bg-white',
        mainIcon:'mx-2 text-red-700 w-8 h-8 p-1 bg-white rounded-full',
        mainBtnText:'text-md font-bold',
        rightMain:'col-span-12 md:col-span-8 lg:col-span-9 shadow-lg p-4 rounded-lg h-fit bg-white',
        infoMain:'flex justify-between items-center border-b border-red-700 pb-2 text-md font-semibold px-3 mb-3',
    }
    
    return (
        <div className={profileDesign.mainDiv}>
            <div className={profileDesign.leftMain}>

                <img className={profileDesign.profileImg} src={image} alt="" />

                <p className={profileDesign.profileName}>Shakil Ahmed</p>

                <button className={profileDesign.editBtn}>Edit Profile</button>

                <div className={profileDesign.mainBtn}>
                <Facebook className={profileDesign.mainIcon}/>
                <p className={profileDesign.mainBtnText}>Dashboard</p>
                </div>

                <div className={profileDesign.mainBtn}>
                <Headphones className={profileDesign.mainIcon}/>
                <p className={profileDesign.mainBtnText}>Profile</p>
                </div>

                <div className={profileDesign.mainBtn}>
                <Twitter className={profileDesign.mainIcon}/>
                <p className={profileDesign.mainBtnText}>Edit Profile</p>
                </div>

                <div className={profileDesign.mainBtn}>
                <Linkedin className={profileDesign.mainIcon}/>
                <p className={profileDesign.mainBtnText}>Affiliate</p>
                </div>

                <div className={profileDesign.mainBtn}>
                <Google className={profileDesign.mainIcon}/>
                <p className={profileDesign.mainBtnText}>Courses</p>
                </div>

                <div className={profileDesign.mainBtn}>
                <Github className={profileDesign.mainIcon}/>
                <p className={profileDesign.mainBtnText}>Find More</p>
                </div>

                <div className={profileDesign.mainBtn}>
                <LightbulbOff className={profileDesign.mainIcon}/>
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