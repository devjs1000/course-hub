import { useState } from 'react';
import logoPrimary from '../../images/logo-primary.png';
import menuBar from '../../images/icons/menu-bar.svg';
import Button from '../../UI/Button';
import Sidebar from './Sidebar';

function Navbar() {
	const [openSidebar, setOpenSidebar] = useState(false);

	const openSidebarHandler = () => {
		setOpenSidebar(!openSidebar);
	};

	return (
		<nav className="flex flex-col gap-3 items-center justify-between px-4 py-2 bg-white relative xsm:gap-5 md:flex-row md:px-16">
			<img src={logoPrimary} alt="primary-logo-img" className="w-36" />

			<div className="flex items-center gap-4 xsm:gap-6">
				<a
					href="#"
					className="link relative text-sm text-primary-color-dark font-semibold xsm:text-base"
				>
					New here?
				</a>
				<Button isPrimary={true}>Register</Button>
				<img
					src={menuBar}
					alt="ham-menu-icon"
					className="w-8 cursor-pointer ml-4"
					onClick={openSidebarHandler}
				/>
			</div>

			<Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
		</nav>
	);
}

export default Navbar;
