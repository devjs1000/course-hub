import currentCourseImg from '../../images/course-current.jpeg';
import Button from '../../UI/Button';

import useStore from '../../context/useStore'

import dashboardImg from '../../images/dashboard.svg';
import NextVideo from './byte-components/NextVideo';


function Dashboard() {
	//styling for dark mode --cjreads665

	const {theme, user} = useStore()
	let mainContainerStyles = ` px-4 w-full bg-${theme? 'slate-800' : 'white'} h-full py-8 lg:px-16 `
	const h4Style = `text-xl mb-3 font-semibold`
	const courseTitle = `font-semibold text-black`
	console.log(dashboardImg);

	return (
		<div className={mainContainerStyles}>
			<div className="relative bg-[#FFBF98] w-full rounded-lg flex flex-col items-start justify-center gap-4 px-4 py-8 lg:px-16">
				<h2 className="text-4xl text-primary-color-light">
					Welcome back, {user?.name}
				</h2>
				<p className="text-lg">
					Education is the passport to the future So, Learn more & more
				</p>
				<Button isPrimary={true}>Browse</Button>
				<img
					src={dashboardImg}
					alt="dashboard svg"
					className="opacity-0 absolute w-[35%] right-0 top-[50%] translate-y-[-50%] lg:opacity-100"
				/>
			</div>
			<div className="w-full flex flex-col gap-6 mt-6 md:flex-row">
				<div className="w-full lg:w-[40%]">
					<h4 className={h4Style}>Currently Watching</h4>
					<div className="rounded-lg p-2 bg-white shadow-md">
						<div
							className="h-[10rem] bg-cover bg-center rounded-lg mb-2"
							style={{ backgroundImage: `url(${currentCourseImg})` }}
						></div>
						<h6 className={courseTitle}>1.1 Introduction to ReactJs</h6>
						<p className='text-black'>Name of Author</p>
						<progress className="h-2 rounded"></progress>
					</div>
				</div>
				<div className="w-full lg:w-[60%]">
					<h4 className="text-xl mb-3 font-semibold">Next Videos</h4>
					<div className="rounded-md overflow-y-scroll flex flex-col gap-4 p-2 bg-white shadow-md md:h-[16rem]">
						<NextVideo
							lesson="Lesson1"
							title="History of ReactJS"
							length="10:00"
						/>
						<NextVideo
							lesson="Lesson1"
							title="History of ReactJS"
							length="10:00"
						/>
						<NextVideo
							lesson="Lesson1"
							title="History of ReactJS"
							length="10:00"
						/>
						<NextVideo
							lesson="Lesson1"
							title="History of ReactJS"
							length="10:00"
						/>
						<NextVideo
							lesson="Lesson1"
							title="History of ReactJS"
							length="10:00"
						/>
						<NextVideo
							lesson="Lesson1"
							title="History of ReactJS"
							length="10:00"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
