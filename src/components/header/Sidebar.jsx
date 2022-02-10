import React from 'react';
import closeIcon from '../../images/icons/close.svg';

function Sidebar({ openSidebar, setOpenSidebar }) {
	const closeSidebarHandler = () => {
		setOpenSidebar(!openSidebar);
	};

	const sideNav = ['some', 'some', 'some', 'some', 'some', 'some', 'some'];
	return (
		<aside className="absolute top-0 left-0 w-1/5 h-screen bg-slate-300 py-12 px-12">
			<ul className="flex flex-col items-start gap-4">
				<li className="self-end">
					<img
						src={closeIcon}
						alt="close-icon"
						className="w-10 cursor-pointer"
						onClick={closeSidebarHandler}
					/>
				</li>
				{React.Children.toArray(
					sideNav.map(sidenav => {
						return (
							<li>
								<a href="#">{sidenav}</a>
							</li>
						);
					}),
				)}
			</ul>
		</aside>
	);
}

export default Sidebar;
