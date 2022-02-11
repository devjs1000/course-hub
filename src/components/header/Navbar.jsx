import { useState } from 'react';
import { createPortal } from 'react-dom';
import logoPrimary from '../../images/logo-primary.png';
import { List } from 'react-bootstrap-icons';
import Button from '../../UI/Button';
import Sidebar from './Sidebar';
import { Link, useLocation } from 'react-router-dom'
function Navbar() {
	const [openSidebar, setOpenSidebar] = useState(false);

	//this line of code makes navbar hidden in login and signup
	const location = useLocation()
  const path = location.pathname.split('/')[1];
  if(path==='login'||path==='signup')return null;

	const openSidebarHandler = () => {
		setOpenSidebar(!openSidebar);
		document.getElementById('root').style.filter = 'blur(3px)';
	};


	return (
		<nav className="flex flex-col gap-3 items-center justify-between px-4 py-2 bg-white relative xsm:gap-5 md:flex-row md:px-16">
			<img src={logoPrimary} alt="primary-logo-img" className="w-36 lg:w-48" />

			<div className="flex items-center gap-4 xsm:gap-6">
				<Link to='/login' className="link relative text-sm text-primary-color-dark font-semibold xsm:text-base">
					Login?
				</Link>
				<Link to='/signup'>
					<Button isPrimary={true}>Register</Button>
				</Link>

				<List className="w-8 cursor-pointer ml-4 text-7xl" onClick={openSidebarHandler}></List>

			</div>
			{(createPortal(
		   <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />,
		   document.getElementById('sidebar')
	   ))}
		</nav>

	);
}

export default Navbar;
