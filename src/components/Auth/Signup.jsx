import React, { useState } from 'react';
import { authDesign } from '../../styles/styleObjects';
import {
	Envelope,
	Lock,
	Person,
	TelephonePlusFill,
	ArrowLeft,
} from 'react-bootstrap-icons';
import useSignup from '../../context/ContextHooks/useSignup';
import { Link } from 'react-router-dom';
import FormControl from './FormControl';
import Button from '../../UI/Button';

const Signup = () => {
	const { signup } = useSignup();
	const [signupData, setSignupData] = useState({
		isAdmin: false,
		isInstructor: false,
	});

	const getSignupData = e => {
		const name = e.target.name;
		const value = e.target.value;
		const newData = { ...signupData };
		newData[name] = value;
		setSignupData(newData);
	};

	const getChecks = e => {
		const name = e.target.name;
		const value = e.target.checked;
		const newData = { ...signupData };
		newData[name] = value;
		setSignupData(newData);
	};

	const submitSignup = e => {
		e.preventDefault();
		// console.log(signupData);
		signup(signupData);
		e.target.reset();
	};

	return (
		<div className="bg-primary-color-dark flex items-center justify-center py-2">
			<div className="relative bg-white w-[20rem] py-16 flex items-center justify-center rounded-xl sm:w-[27rem]">
				<Link to="/">
					<ArrowLeft className="absolute top-4 left-11 text-2xl cursor-pointer text-gray-600 hover:text-gray-900" />
				</Link>
				<form className="w-4/5 h-full" onSubmit={submitSignup}>
					<h2 className="text-4xl font-semibold mb-12">Sign up</h2>
					<div className="flex flex-col items-start gap-6 mb-12">
						<FormControl type="text" label="name" onChange={getSignupData} />
						<FormControl type="email" label="email" onChange={getSignupData} />
						<FormControl
							type="password"
							label="password"
							onChange={getSignupData}
						/>
						<FormControl
							type="number"
							label="mobile"
							onChange={getSignupData}
						/>
						<div className="flex items-center gap-10">
							<div className="flex items-center gap-2">
								<input
									type="radio"
									name="for_whome"
									id="student"
									value="student"
									className="accent-primary-color-dark"
								/>
								<label htmlFor="student">Student</label>
							</div>
							<div className="flex items-center gap-2">
								<input
									type="radio"
									name="for_whome"
									id="instructor"
									value="instructor"
									className="accent-primary-color-dark"
								/>
								<label htmlFor="instructor">Instuctor</label>
							</div>
						</div>
					</div>
					<Button isPrimary={true} isWidthFull={true} type="submit">
						Sign up
					</Button>
					<p className="text-center mt-5">
						Already have an account?{' '}
						<Link to="/login" className="text-primary-color-dark font-semibold">
							Log in
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Signup;
