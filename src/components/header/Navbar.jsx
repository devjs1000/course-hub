import { useState } from 'react';
import { createPortal } from 'react-dom';
import logoPrimary from '../../images/logo-primary.png';
import { List } from 'react-bootstrap-icons';
import Sidebar from './Sidebar';
import { Link, useLocation } from 'react-router-dom';
import useStore from '../../context/useStore';

const Overlay = ({ openSidebarHandler }) => {
	return <div className="overlay" onClick={openSidebarHandler}></div>;
};

function Navbar() {
	const [openSidebar, setOpenSidebar] = useState(false);
	const { user } = useStore();

	const location = useLocation();
	const path = location.pathname.split('/')[1];
	//add objects in nullpath for hiding object in paths
	const nullPath = ['login', 'signup'];
	if (nullPath.includes(path)) return null;

	const openSidebarHandler = () => {
		setOpenSidebar(!openSidebar);
		document.getElementById('root').style.filter = 'blur(3px)';
	};

	return (
		<nav className="flex gap-3 items-center  px-4 py-2 bg-white relative xsm:gap-5 md:flex-row md:px-16">
			<List
				className="w-8 cursor-pointer text-7xl"
				onClick={openSidebarHandler}
			></List>

			<Link to="/">
				<img
					src={logoPrimary}
					alt="primary-logo-img"
					className="w-36 lg:w-48"
				/>
			</Link>

			<div className="flex items-center gap-4 ml-auto xsm:gap-6">
				{user == undefined || !user._id ? (
					<>
						<Link
							to="/login"
							className="link relative text-sm text-primary-color-dark font-semibold xsm:text-base"
						>
							Login?
						</Link>
						<Link to="/signup">
							<button className="bg-red-700 text-white mx-2 px-2 py-1 rounded sm:px-4 sm:py-2">
								signup
							</button>
						</Link>
					</>
				) : (
					<Link to="/my-profile" className="flex gap-3 items-center">
						<span className="text-red-800 text-xl">{user.name}</span>
						<img
							src={user.profilePicture}
							className="h-10 w-10 p-1 object-cover rounded-full"
						/>
					</Link>
				)}
			</div>
			{createPortal(
				<Sidebar
					openSidebar={openSidebar}
					user={user}
					setOpenSidebar={setOpenSidebar}
				/>,
				document.getElementById('sidebar'),
			)}
			{openSidebar &&
				createPortal(
					<Overlay closeSidebarHandler={openSidebarHandler} />,
					document.getElementById('overlay'),
				)}
		</nav>
	);
}

export default Navbar;
