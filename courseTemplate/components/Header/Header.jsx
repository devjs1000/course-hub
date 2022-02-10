import React from 'react';
import logo from '../../assets/logo.png';
import Button from '../Button/Button';

function Header(props) {
	return (
		<header className="relative flex flex-col gap-4 items-center justify-between py-4 px-8 xsm:flex-row">
			<img
				src={logo}
				alt="logo"
				className="cursor-pointer w-32 sm:w-36 lg:w-40"
			/>
			<div className="flex items-center gap-4">
				<a
					href="#"
					className="link text-base font-semibold text-white relative sm:text-lg"
				>
					New here?
				</a>
				<Button>Register</Button>
			</div>
		</header>
	);
}

export default Header;
