import { useState, useRef, Children } from 'react';
import { createPortal } from 'react-dom';
import { List } from 'react-bootstrap-icons';
import Button from '../../UI/Button';
import Sidebar from './Sidebar';
import Overlay from '../../UI/Overlay';
import { Link, useLocation } from 'react-router-dom';
import useStore from '../../context/useStore';
import useIntersection from '../../UI/useIntersection';

function Navbar() {
	const [openSidebar, setOpenSidebar] = useState(false);
	const { user } = useStore();

	// sticky nav start
	const target = useRef(null);
	const isVisible = useIntersection(target, {
		root: null,
		threshold: 1,
		rootMargin: '0px',
	});
	// sticky nav end

	const location = useLocation();
	const path = location.pathname.split('/')[1];

	//add objects in nullpath for hiding object in paths
	const nullPath = ['login', 'signup'];
	if (nullPath.includes(path)) return null;

	const openSidebarHandler = () => {
		setOpenSidebar(!openSidebar);
		document.getElementById('root').style.filter = 'blur(3px)';
	};

	const commonClasses = `${
		path === 'my-profile'
			? 'hidden'
			: 'text-white py-2 flex gap-3 items-center px-4 transition-all duration-300 z-50 xsm:gap-5 md:flex-row md:px-16'
	}`;

	const stickyNav = `text-black sticky top-0 left-0 bg-white shadow-md opacity-95`;

	const navClasses = isVisible
		? `${commonClasses}`
		: `${commonClasses} ${stickyNav}`;

	const navLinkClasses = `text-lg ${
		isVisible ? 'text-white' : 'text-black'
	} font-medium hover:font-semibold`;

	const targetDivClasses = ` ${
		path === 'my-profile' ? 'hidden' : 'h-1 bg-transparent'
	}`;

	const navLinks = ['Home', 'About', 'Courses', 'Teachers'];

	return (
		<>
			<nav className={navClasses}>
				{/* <List
					className="w-8 cursor-pointer text-7xl"
					onClick={openSidebarHandler}
				></List> */}

				<Link to="/">
					<h2 className="text-3xl font-semibold">XcitEducation</h2>
				</Link>

				{/* navlinks start */}
				<ul className="flex items-center justify-center gap-8 w-[40%]">
					{Children.toArray(
						navLinks.map(link => {
							return (
								<li>
									<a href="#" className={navLinkClasses}>
										{link}
									</a>
								</li>
							);
						}),
					)}
				</ul>
				{/* navlinks end */}

				<div className="flex items-center gap-4 ml-auto xsm:gap-6">
					{user == undefined || !user._id ? (
						<>
							<Link
								to="/login"
								className="link relative text-lg font-semibold xsm:text-base"
							>
								Login?
							</Link>
							<Link to="/signup">
								<Button isPrimary={true}>Get Started</Button>
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
			<div className={targetDivClasses} ref={target}></div>
		</>
	);
}

export default Navbar;
