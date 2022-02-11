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
		<nav className="flex items-center justify-between px-16 py-2 bg-white relative">
			<div className="flex items-center gap-10">
				<img
					src={menuBar}
					alt="ham-menu-icon"
					className="w-10 cursor-pointer"
					onClick={openSidebarHandler}
				/>
				<img src={logoPrimary} alt="primary-logo img" />
			</div>
			<div className="flex items-center gap-4">
				<a
					href="#"
					className="link relative text-primary-color-dark font-semibold"
				>
					New here?
				</a>
				<Button isPrimary={true}>Register</Button>
			</div>
			{openSidebar && (
				<Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
			)}
		</nav>
	);
}

export default Navbar;