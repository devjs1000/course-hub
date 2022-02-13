import { useState } from 'react';
import { createPortal } from 'react-dom';
import logoPrimary from '../../images/logo-primary.png';
import { List } from 'react-bootstrap-icons';
import Button from '../../UI/Button';
import Sidebar from './Sidebar';
import { Link, useLocation } from 'react-router-dom'
import useStore from '../../context/useStore'
function Navbar() {
	const [openSidebar, setOpenSidebar] = useState(false);
	const {user}=useStore()

	const location = useLocation()
	const path = location.pathname.split('/')[1];
  //add objects in nullpath for hiding object in paths
  const nullPath=['login', 'signup', 'my-assignments']
	if(nullPath.includes(path)) return null

	const openSidebarHandler = () => {
		setOpenSidebar(!openSidebar);
		document.getElementById('root').style.filter = 'blur(3px)';
	};


	return (
		<nav className="flex flex-col gap-3 items-center justify-between px-4 py-2 bg-white relative xsm:gap-5 md:flex-row md:px-16">
			<img src={logoPrimary} alt="primary-logo-img" className="w-36 lg:w-48" />

			<div className="flex items-center gap-4 xsm:gap-6">
			{!user.token ? <>
				<Link to='/login' className="link relative text-sm text-primary-color-dark font-semibold xsm:text-base">
					Login?
				</Link>
				<Link to='/signup'>
					<Button isPrimary={true}>Register</Button>
				</Link>
</>: <div>welcome, <span className='text-red-800 text-xl'>{user.data.name}</span></div>
}

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
