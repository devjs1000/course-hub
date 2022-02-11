import React, { useState } from 'react';
import {authDesign} from '../styles/styleObjects'
import { Envelope, Lock, Person} from 'react-bootstrap-icons';
import useSignup from '../context/ContextHooks/useSignup';
import { Link } from 'react-router-dom';

const Signup = () => {
    const {signup} = useSignup()
    const [signupData,setSignupData] = useState({})

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

            <h1 className={authDesign.title}>Signup</h1>

            <form onSubmit={submitSignup}>

                <div className={authDesign.itemDiv}>
                    <Person className={authDesign.inputIcon}/>
                    <input onChange={getSignupData} required name='name' placeholder='Enter your name' className={authDesign.input} type="text" />
                </div>

                <div className={authDesign.itemDiv}>
                    <Envelope className={authDesign.inputIcon}/>
                    <input onChange={getSignupData} required name='email' placeholder='Enter your email' className={authDesign.input} type="email" />
                </div>

                <div className={authDesign.itemDiv}>
                    <Lock className={authDesign.inputIcon}/>
                    <input onChange={getSignupData} required name='password' placeholder='Enter your password' className={authDesign.input} type="password" />
                </div>

                <div className={authDesign.itemDiv}>
                    <Lock className={authDesign.inputIcon}/>
                    <input onChange={getSignupData} required name='password2' placeholder='Retype your password' className={authDesign.input} type="password" />
                </div>

                <button type='submit' className={authDesign.mainBtn}>Signup</button>

            </form>

            <p className={authDesign.bottomText}>Existing user?<Link to='/login'><span className={authDesign.bottomIn}>Login</span></Link></p>

            </div>
        </div>
    );
};

export default Signup;