import { useState, useEffect, Children } from 'react';
import LongButton from '../../UI/LongButton';
import {
	Pen,
	Journal,
	JournalCode,
	Gear,
	Bell,
	Speedometer,
	Search,
	BoxArrowLeft,
	List,
} from 'react-bootstrap-icons';
import { Link, Outlet } from 'react-router-dom';
import useStore from '../../context/useStore';
import useAuthHook from '../../hooks/useAuthHook';
import { profileDesign } from '../../styles/styleObjects';

const Profile = () => {
	const [openAside, setOpenAside] = useState(false);
	const [showNotificationCard, setShowNotificationCard] = useState(false);
	const { user, myCourses } = useStore();
	const [isTeacher, setIsTeacher] = useState(user.isInstructor);
	console.log(myCourses);
	const { logout } = useAuthHook();
	const joining = new Date(Date.parse(user.createdAt)).toDateString();

	useEffect(() => {
		setIsTeacher(user.isInstructor);
	}, [user]);

	const toggleAsideHandler = () => {
		setOpenAside(!openAside);
	};

	const notificationToggleHandler = () => {
		setShowNotificationCard(!showNotificationCard);
	};

	const sidebarItems = [
		{ name: 'Dashboard', icon: <Speedometer />, path: '/my-profile/dashboard' },
		{ name: 'My Courses', icon: <Journal />, path: '/my-profile/courses' },
		{
			name: 'Assignments',
			icon: <JournalCode />,
			path: '/my-profile/assignments',
		},
		{
			name: 'Notifications',
			icon: <Bell />,
			path: '/my-profile/notifications',
		},
		{ name: 'Settings', icon: <Gear />, path: '/my-profile/settings' },
		{ name: 'Logout', icon: <BoxArrowLeft />, path: '/' },
	];

	const asideClasses = `sticky top-0 text-gray-600 shadow-xl h-screen ${
		openAside ? 'px-4 py-2 w-[35vh]' : 'w-0'
	} bg-[#ffffff] transition-all duration-300 lg:w-[35vh] lg:px-4 lg:py-2`;

	const notificationCardClasses = `absolute overflow-hidden right-[5rem] top-[4rem] w-[20rem] rounded-md shadow-xl bg-white ${
		showNotificationCard ? 'opacity-100' : 'opacity-0'
	} z-50 transition-all duration-300`;

	return (
		<>
			<div className="bg-white flex">
				<aside className={asideClasses}>
					<Link to="/">
						<h4 className="text-2xl font-semibold cursor-pointer">
							XcitEducation
						</h4>
					</Link>
					<ul className="mt-10 flex flex-col gap-12">
						{Children.toArray(
							sidebarItems.map(item => {
								return (
									<li className="flex items-center gap-3">
										<span className="text-2xl">{item.icon}</span>
										<Link to={item.path} className="text-xl">
											{item.name}
										</Link>
									</li>
								);
							}),
						)}
					</ul>
				</aside>

				<main className="w-full flex flex-col gap-6 bg-[#fff8f4]">
					<nav className="relative h-14 bg-white flex items-center justify-between px-4 border-l lg:px-16">
						<List
							className="visible opacity-100 text-4xl cursor-pointer lg:hidden lg:opacity-0"
							onClick={toggleAsideHandler}
						/>
						<div className="border h-[80%] flex items-center w-[40%] rounded-md overflow-hidden bg-gray-50">
							<input
								type="search"
								className="flex-[0.9] h-full px-4 border-r bg-gray-50 hover:bg-white focus:bg-white focus:outline-none"
								placeholder="Search Here"
							/>
							<Search className="flex-[0.1] text-2xl w-full px-4 font-semibold cursor-pointer" />
						</div>
						<div className="flex items-center gap-6">
							<Bell
								className="text-xl cursor-pointer"
								onClick={notificationToggleHandler}
							/>
							<div
								className="h-10 w-10 rounded-full border cursor-pointer bg-cover bg-center"
								style={{ backgroundImage: `url(${user.profilePicture})` }}
							></div>
						</div>
						<div className={notificationCardClasses}>
							<h4 className="bg-gray-50 p-2 font-semibold text-center">
								Notifications
							</h4>
							<div className="flex flex-col gap-1">
								{/* notification start */}
								<div className="relative px-4 py-1 before:absolute before:top-0 before:left-0 before:h-full before:w-1 before:bg-red-400">
									Lorem ipsum dolor sit amet.
								</div>
								<div className="relative px-4 py-1 before:absolute before:top-0 before:left-0 before:h-full before:w-1 before:bg-green-400">
									Lorem ipsum dolor sit amet.
								</div>
								<div className="relative px-4 py-1 before:absolute before:top-0 before:left-0 before:h-full before:w-1 before:bg-red-400">
									Lorem ipsum dolor sit amet.
								</div>
								{/* notification end */}
							</div>
						</div>
					</nav>
					<Outlet />
				</main>
			</div>
			{/*  */}
			
		</>
	);
};

export default Profile;
