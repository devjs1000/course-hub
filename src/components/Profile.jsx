import React, { useState, useEffect } from 'react';
import { Activity, BoxArrowLeft, Journal, PatchCheck, Person,  Sliders, XDiamond } from 'react-bootstrap-icons';
import useStore from '../context/useStore'
import {profileDesign} from '../styles/styleObjects'
const Profile = () => {
    const [active,setActive] = useState('profile')
    const {user}=useStore()

    if(!user.success) return null

const joining=new Date(Date.parse(user.data.createdAt)).toString()

        return (
            <div className={profileDesign.mainDiv}>
                <div className={profileDesign.leftMain}>

                    <img className={profileDesign.profileImg} src={user.data.profilePicture} alt={user.data.name+' profile picture'} />

                    <p className={profileDesign.profileName}>{user.data.name}</p>

                    <p className={profileDesign.intro}>{user.data.isInstructor? "Teacher" : 'Student'}</p>
                    <p className={profileDesign.intro}>{joining}</p>

                    <div onClick={()=>setActive('profile')} className={active==='profile'?profileDesign.active:profileDesign.mainBtn}>
                    <Person className={profileDesign.mainIcon}/>
                    <p className={profileDesign.mainBtnText}>Profile</p>
                    </div>

                    <div onClick={()=>setActive('edit')} className={active==='edit'?profileDesign.active:profileDesign.mainBtn}>
                    <Sliders className={profileDesign.mainIcon}/>
                    <p className={profileDesign.mainBtnText}>Edit Profile</p>
                    </div>

                    <div onClick={()=>setActive('courses')} className={active==='courses'?profileDesign.active:profileDesign.mainBtn}>
                    <Journal className={profileDesign.mainIcon}/>
                    <p className={profileDesign.mainBtnText}>Courses</p>
                    </div>

                    <div onClick={()=>setActive('verify')} className={active==='verify'?profileDesign.active:profileDesign.mainBtn}>
                    <PatchCheck className={profileDesign.mainIcon}/>
                    <p className={profileDesign.mainBtnText}>Verifications</p>
                    </div>

                    <div onClick={()=>setActive('reset')} className={active==='reset'?profileDesign.active:profileDesign.mainBtn}>
                    <XDiamond className={profileDesign.mainIcon}/>
                    <p className={profileDesign.mainBtnText}>Reset Password</p>
                    </div>

                    <div onClick={()=>setActive('activity')} className={active==='activity'?profileDesign.active:profileDesign.mainBtn}>
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
                        <p>{user.data.name}</p>
                    </div>

                    <div className={profileDesign.infoMain}>
                        <p>Email</p>
                        <p>{user.data.email}</p>
                    </div>

                    <div className={profileDesign.infoMain}>
                        <p>Phone</p>
                        <p>{user.data.mobileNumber}</p>
                    </div>

                    <div className={profileDesign.infoMain}>
                        <p>Linkedin</p>
                        <p>{user.data.linkedInLink}</p>
                    </div>

                    <div className={profileDesign.infoMain}>
                        <p>Github</p>
                        <p>{user.data.githubLink}</p>
                    </div>

                </div>
            </div>
        );
    };

    export default Profile;
