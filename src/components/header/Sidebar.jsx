import React from 'react';
import { createPortal } from 'react-dom';
import { House, Journal, Book, Person, XLg } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
const Overlay = ({ closeSidebarHandler }) => {
	return <div className="overlay" onClick={closeSidebarHandler}></div>;
};

function Sidebar({ openSidebar, setOpenSidebar }) {
	let asideClasses = `fixed top-0 right-0 w-full  ${
		openSidebar ? 'transform translate-x-0' : 'transform translate-x-full'
	} h-full bg-white py-6 px-8 drop-shadow-lg transition ease-out duration-500 md:w-4/12 md:top-0 lg:w-1/4`;

	const closeSidebarHandler = () => {
		setOpenSidebar(!openSidebar);
		document.getElementById('root').style.filter = 'blur(0)';
	};

	const sideNav = [
		{
			name: 'Home',
			icon: House,
			path: '/',
		},
		{
			name: 'My Courses',
			icon: Journal,
			path: '/my-courses',
		},
		{
			name: 'My Assignments',
			icon: Book,
			path: '/my-assignments',
		},
		{
			name: 'My Profile',
			icon: Person,
			path: '/my-profile',
		},
	];

	return (
		<aside className={asideClasses}>
			<ul className="flex flex-col items-start gap-10 top">
				<li className="self-end cursor-pointer">
					<XLg
						className="w-12 cursor-pointer hover:rotate-180 transition-all text-3xl"
						onClick={closeSidebarHandler}
					/>
				</li>
				{React.Children.toArray(
					sideNav.map(sidenav => {
						return (
							<Link
								to={sidenav.path}
								className="flex items-center gap-2 hover:translate-x-2 hover:text-primary-color-dark transition-all"
								onClick={closeSidebarHandler}
							>
								{<sidenav.icon className="text-lg" />}
								<span href="#" className="text-lg">
									{sidenav.name}
								</span>
							</Link>
						);
					}),
				)}
			</ul>
			{openSidebar &&
				createPortal(
					<Overlay closeSidebarHandler={closeSidebarHandler} />,
					document.getElementById('overlay'),
				)}
		</aside>
	);
}

export default Sidebar;
