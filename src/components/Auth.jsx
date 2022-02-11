import { useEffect, useState } from 'react'
import '../styles/Auth.css'
import useSignup from '../context/ContextHooks/useSignup';
import useLogin from '../context/ContextHooks/useLogin';
const Auth = () => {
    const {signup} = useSignup()
    const {login} = useLogin()
    const [signupData,setSignupData] = useState({})
    const [loginData,setLoginData] = useState({})

    var container;

    const getSignupData=e=>{
        const name = e.target.name
        const value = e.target.value
        const newData = {...signupData}
        newData[name]=value
        setSignupData(newData)
    }
    const getLoginData=e=>{
        const name = e.target.name
        const value = e.target.value
        const newData = {...loginData}
        newData[name]=value
        setLoginData(newData)
    }

    const submitSignup=e=>{
        e.preventDefault()
        signup(signupData)
        e.target.reset()
    }

    const submitLogin=e=>{
        e.preventDefault()
        login(loginData)
        e.target.reset()
    }

    useEffect(() => {
      container = document.getElementById('container');
    }, [])

//functions for signup and signin switch
    const signUpSwitch=()=>{
      container.classList.add("right-panel-active");
    }
    const signInSwitch=()=>{
      container.classList.remove("right-panel-active");
    }

    return (
        <div className="flex justify-center items-center h-[100vh]">
            <div className="container" id="container">
                <div className="form-container sign-up-container">
                    <form onSubmit={submitSignup}>
                        <h1>Create Account</h1>
                        <span>or use your email for registration</span>
                        <input onChange={getSignupData} name='name' type="text" placeholder="Name" />
                        <input onChange={getSignupData} name='email' type="email" placeholder="Email" />
                        <input onChange={getSignupData} name='password' type="password" placeholder="Password" />
                        <button type='submit'>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form onSubmit={submitLogin}>
                        <h1>Sign in</h1>
                        <span>or use your account</span>
                        <input onChange={getLoginData} name='email' type="email" placeholder="Email" />
                        <input onChange={getLoginData} name='password' type="password" placeholder="Password" />
                        <a href="#">Forgot your password?</a>
                        <button type='submit'>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <h2 className='text-left'>To keep connected with us please login with your personal info</h2>
                            <button className="ghost"  onClick={signInSwitch} id="signIn">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <h2 className='text-left'>Enter your personal details and start journey with us</h2>
                            <button className="ghost"  onClick={signUpSwitch} id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth
