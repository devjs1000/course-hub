import React, { useState } from 'react';
import { Envelope, Lock, ArrowLeft } from 'react-bootstrap-icons';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { authDesign } from '../../styles/styleObjects';
import FormControl from '../../UI/FormControl';
import Button from '../../UI/Button';
import useAuthHook from '../../hooks/useAuthHook';
import useStore from '../../context/useStore';

const Login = () => {
	const { user } = useStore();
	const { login } = useAuthHook();
	const [loginData, setLoginData] = useState({});
	const getlocation = useLocation();
	const path = getlocation?.state?.location;

	const getLoginData = e => {
		const name = e.target.name;
		let value = e.target.value;
		if (name === 'email') {
			value = value.toLowerCase();
		}
		const newData = { ...loginData };
		newData[name] = value;
		setLoginData(newData);
	};

	const submitLogin = e => {
		e.preventDefault();
		login(loginData);
		e.target.reset();
	};

	return (
		<div className="h-screen bg-primary-color-dark flex items-center justify-center">
			{user._id && path && <Navigate to={path} />}
			{user._id && !path && <Navigate to="/" />}
			<div className="relative bg-white w-[25rem] mx-2 py-16 flex items-center justify-center rounded-xl sm:w-[27rem]">
				<Link to="/">
					<ArrowLeft className="absolute top-4 left-11 text-2xl cursor-pointer text-gray-600 hover:text-gray-900" />
				</Link>
				<form className="w-4/5 h-full" onSubmit={submitLogin}>
					<h2 className="text-4xl font-semibold mb-12">Login</h2>
					<div className="flex flex-col items-start gap-6 mb-12">
						<FormControl type="email" label="email" onChange={getLoginData} />
						<FormControl
							type="password"
							label="password"
							onChange={getLoginData}
						/>
						<a
							href="#"
							className="relative text-gray-700 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-current hover:text-gray-800 hover:font-semibold transition-all duration-200"
						>
							Forgot password
						</a>
					</div>
					<Button isPrimary={true} isWidthFull={true} type="submit">
						Log In
					</Button>

					<p className="text-center mt-5">
						Don't have an account yet?{' '}
						<Link
							to="/signup"
							className="text-primary-color-dark font-semibold"
						>
							Sign up
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Login;
