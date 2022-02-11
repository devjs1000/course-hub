import React, { useState } from 'react';
import { Envelope, Lock, ArrowLeft} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import useLogin from '../../context/ContextHooks/useLogin';
import { authDesign } from '../../styles/styleObjects';

const Login = () => {

    const {login} = useLogin()
    const [loginData,setLoginData] = useState({})

    const getLoginData=e=>{
        const name = e.target.name
        const value = e.target.value
        const newData = {...loginData}
        newData[name]=value
        setLoginData(newData)
    }


    const submitLogin=e=>{
        e.preventDefault()
        login(loginData)
        e.target.reset()
    }



    return (
        <div className={authDesign.screen}>
            <div className={authDesign.mainDiv}>
            <Link to='/'>
            <ArrowLeft className='absolute left-[1rem] cursor-pointer' size={30}/>
            </Link>

            <h1 className={authDesign.title}>Login</h1>

            <form onSubmit={submitLogin}>

                <div className={authDesign.itemDiv}>
                    <Envelope className={authDesign.inputIcon}/>
                    <input onChange={getLoginData} required name='email' placeholder='Enter your email' className={authDesign.input} type="text" />
                </div>

                <div className={authDesign.itemDiv}>
                    <Lock className={authDesign.inputIcon}/>
                    <input onChange={getLoginData} required name='password' placeholder='Enter your password' className={authDesign.input} type="password" />
                </div>

                <p className={authDesign.forgotPass}>Forgot Password?</p>

                <button type='submit' className={authDesign.mainBtn}>Login</button>

            </form>

            <p className={authDesign.bottomText}>New here?<Link to='/signup'><span className={authDesign.bottomIn}>Signup</span></Link></p>

            </div>
        </div>
    );
};

export default Login;
