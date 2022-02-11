import { useState } from 'react';
import { createPortal } from 'react-dom';
import logoPrimary from '../../images/logo-primary.png';
import menuBar from '../../images/icons/menu-bar.svg';
import Button from '../../UI/Button';
import Sidebar from './Sidebar';
import Link from 'react-router-dom'
function Navbar() {
	const [openSidebar, setOpenSidebar] = useState(false);

	const openSidebarHandler = () => {
		setOpenSidebar(!openSidebar);
		document.getElementById('root').style.filter = 'blur(3px)';
	};

	return (
		<nav className="flex flex-col gap-3 items-center justify-between px-4 py-2 bg-white relative xsm:gap-5 md:flex-row md:px-16">
			<img src={logoPrimary} alt="primary-logo-img" className="w-36 lg:w-48" />

			<div className="flex items-center gap-4 xsm:gap-6">
				<Link
					to='/login'
					className="link relative text-sm text-primary-color-dark font-semibold xsm:text-base"
				>
					Login?
				</Link>
				<Link to='/signup'>
				<Button isPrimary={true}>Register</Button>
				</Link>
				<img
					src={menuBar}
					alt="ham-menu-icon"
					className="w-8 cursor-pointer ml-4"
					onClick={openSidebarHandler}
				/>
			</div>
			{createPortal(
				<Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />,
				document.getElementById('sidebar'),
			)}
		</nav>
	);
}

export default Navbar;
