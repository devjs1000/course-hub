import { useEffect, useState } from 'react'
import '../styles/Auth.css'

const Auth = () => {
    let container;
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
                    <form action='#'>
                        <h1>Create Account</h1>
                        <span>or use your email for registration</span>
                        <input  type="text" placeholder="Name" />
                        <input  type="email" placeholder="Email" />
                        <input  type="password" placeholder="Password" />
                        <button type='submit'>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action='#'>
                        <h1>Sign in</h1>
                        <span>or use your account</span>
                        <input  type="email" placeholder="Email" />
                        <input  type="password" placeholder="Password" />
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
