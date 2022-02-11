import React, { useState } from 'react';
import {authDesign} from '../../styles/styleObjects'
import { Envelope, Lock, Person, TelephonePlusFill, ArrowLeft} from 'react-bootstrap-icons';
import useSignup from '../../context/ContextHooks/useSignup';
import { Link } from 'react-router-dom';

const Signup = () => {
    const {signup} = useSignup()
    const [signupData,setSignupData] = useState({isAdmin:false, isInstructor:false})

    const getSignupData=e=>{
        const name = e.target.name
        const value = e.target.value
        const newData = {...signupData}
        newData[name]=value
        setSignupData(newData)
    }

    const submitSignup=e=>{
        e.preventDefault()

        signup(signupData)
        e.target.reset()
    }



    return (
        <div className={authDesign.screen}>
            <div className={authDesign.mainDiv}>
            <Link to='/'>
            <ArrowLeft className='absolute left-[1rem] cursor-pointer' size={30}/>
            </Link>
            <h1 className={authDesign.title}>Signup</h1>

            <form onSubmit={submitSignup}>

                <div className={authDesign.itemDiv}>
                    <Person className={authDesign.inputIcon}/>
                    <input onChange={getSignupData} required name='name' placeholder='name' className={authDesign.input} type="text" />
                </div>

                <div className={authDesign.itemDiv}>
                    <Envelope className={authDesign.inputIcon}/>
                    <input onChange={getSignupData} required name='email' placeholder='email' className={authDesign.input} type="email" />
                </div>

                <div className={authDesign.itemDiv}>
                    <Lock className={authDesign.inputIcon}/>
                    <input onChange={getSignupData} required name='password' placeholder='password' className={authDesign.input} type="password" />
                </div>

                <div className={authDesign.itemDiv}>
                    <TelephonePlusFill className={authDesign.inputIcon}/>
                    <input onChange={getSignupData} required name='mobileNumber' placeholder='mobile number' className={authDesign.input} type="number" />
                </div>

                <button type='submit' className={authDesign.mainBtn}>Signup</button>

            </form>

            <p className={authDesign.bottomText}>Existing user?<Link to='/login'><span className={authDesign.bottomIn}>Login</span></Link></p>

            </div>
        </div>
    );
};

export default Signup;
