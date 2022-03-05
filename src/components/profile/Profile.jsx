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
} from 'react-bootstrap-icons';
import useStore from '../../context/useStore';
import useAuthHook from '../../hooks/useAuthHook';
import { profileDesign } from '../../styles/styleObjects';
import Button from '../../UI/Button';

const Profile = () => {
	const { user, myCourses } = useStore();
	const [isTeacher, setIsTeacher] = useState(user.isInstructor);
	console.log(myCourses);
	const { logout } = useAuthHook();
	const joining = new Date(Date.parse(user.createdAt)).toDateString();

	useEffect(() => {
		setIsTeacher(user.isInstructor);
	}, [user]);

	const sidebarItems = [
		{ name: 'Dashboard', icon: <Speedometer /> },
		{ name: 'Courses', icon: <Journal /> },
		{ name: 'Assignments', icon: <JournalCode /> },
		{ name: 'Notifications', icon: <Bell /> },
		{ name: 'Settings', icon: <Gear /> },
	];

	return (
		<>
			<div className="bg-white flex">
				<aside className=" h-screen w-[18vw] bg-slate-300 px-6 sticky top-0">
					<h4 className="text-2xl font-semibold">XcitEducation</h4>
					<ul className="mt-10 flex flex-col gap-10">
						{Children.toArray(
							sidebarItems.map(item => {
								return (
									<li className="flex items-center gap-3">
										<span className="text-2xl">{item.icon}</span>
										<a href="#" className="text-xl">
											{item.name}
										</a>
									</li>
								);
							}),
						)}
					</ul>
				</aside>

				<main className="w-full flex flex-col gap-6 bg-[#fff8f4]">
					<nav className="h-14 bg-white flex items-center justify-between px-12">
						<div className="border h-[80%] flex items-center w-[40%] rounded-md overflow-hidden bg-gray-50">
							<input
								type="search"
								className="flex-[0.9] h-full px-4 border-r bg-gray-50 hover:bg-white focus:bg-white focus:outline-none"
								placeholder="Search Here"
							/>
							<Search className="flex-[0.1] text-2xl w-full px-4 font-semibold cursor-pointer" />
						</div>
						<div className="flex items-center gap-6">
							<Bell className="text-xl cursor-pointer" />
							<div
								className="h-10 w-10 rounded-full border cursor-pointer bg-cover bg-center"
								style={{ backgroundImage: `url(${user.profilePicture})` }}
							></div>
						</div>
					</nav>
					<div className="px-12 w-full">
						<div className="bg-[#FFBF98] w-[90%] rounded-lg flex flex-col items-start justify-center gap-4 px-12 py-8">
							<h2 className="text-4xl text-primary-color-light">
								Welcome back, Adnan
							</h2>
							<p className="text-lg">
								Education is the passport to the future So, Learn more & more
							</p>
							<Button isPrimary={true}>Browse</Button>
						</div>
						<div className="w-[90%] mt-6">
							<h4 className="text-xl mb-3 font-semibold">Ongoing Courses</h4>
							<div className="rounded-lg flex items-center gap-4">
								{/* start */}
								<div className="border h-[10rem] py-2 px-4">
									<div className="text-center bg-orange-500 rounded-md text-white">
										Frontend
									</div>
									<h4 className="text-md font-semibold">
										Beginner to Advance ReactJS
									</h4>
								</div>
								{/* end */}
							</div>
						</div>
					</div>
				</main>
			</div>
			{/*  */}
			{user._id !== undefined ? (
				<div className={profileDesign.mainDiv}>
					<div className={profileDesign.leftMain}>
						<div className={profileDesign.person}>
							<img className={profileDesign.leftPersonBg} src="" alt="" />

							<img
								className={profileDesign.profileImg}
								src={user.profilePicture}
								alt={user.name + ' profile picture'}
							/>

							<div className={profileDesign.leftInfoMain}>
								<p className={profileDesign.profileName}>{user.name}</p>
								<p className={profileDesign.intro}>{user.email}</p>
								<button className={profileDesign.editBtn}>Edit Profile</button>
							</div>
						</div>

						<div className={profileDesign.mainBtnDiv}>
							<LongButton icon="PERSONCIRCLE">Person Info</LongButton>

							<LongButton icon="PHONE">Contact Info</LongButton>
						</div>

						<h1 className={profileDesign.activityH1}>Your Activites</h1>

						<div className={profileDesign.mainBtnDiv}>
							<LongButton icon="CARDTEXT">Assignments</LongButton>
							<LongButton icon="FILEEARMARK">Worksheets</LongButton>
							<LongButton icon="MOON">Dark Them</LongButton>
							<LongButton icon="BOXARROWLEFT" onClick={logout}>
								Logout
							</LongButton>
						</div>
					</div>

					<div className={profileDesign.rightMain}>
						<div className="hidden md:block">
							<div className="relative">
								<img className="h-52 w-full" src="" alt="" />
								<Pen className="absolute bottom-3 right-3 h-6 w-6 text-white cursor-pointer" />
							</div>
							<div className="ml-5 border-b-2 border-red-500 pb-4">
								<h1 className="my-5 text-xl text-red-600 font-bold">
									{user?.name}
								</h1>
								<p className="text-sm text-slate-800 font-medium">
									Date of joining
									<span className="ml-5 text-slate-500">{joining}</span>
								</p>
							</div>
						</div>
						<div className="m-3 md:ml-5">
							<h2 className="text-xl font-semibold text-slate-700 md:mt-4">
								Courses Enrolled
							</h2>
							<div className="h-[20rem] overflow-auto">
								{myCourses.length != 0 && myCourses !== undefined
									? Children.toArray(
											myCourses.map(a => {
												return (
													<h1 className="w-full bg-slate-100 flex items-center p-3 mt-4 text-xl hover:opacity-[50%] cursor-pointer  text-slate-700">
														{isTeacher ? a?.name : a?.courseId?.name}
													</h1>
												);
											}),
									  )
									: 'no courses'}
							</div>
						</div>
					</div>
				</div>
			) : (
				<BoxLoading />
			)}
		</>
	);
};

export default Profile;
