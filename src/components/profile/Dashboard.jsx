import currentCourseImg from '../../images/course-current.jpeg';
import Button from '../../UI/Button';
import dashboard from '../../images/dashboard.svg';

import NextVideo from './byte-components/NextVideo';

function Dashboard() {
	return (
		<div className="px-12 w-full">
			<div className="relative bg-[#FFBF98] w-[90%] rounded-lg flex flex-col items-start justify-center gap-4 px-12 py-8">
				<h2 className="text-4xl text-primary-color-light">
					Welcome back, Adnan
				</h2>
				<p className="text-lg">
					Education is the passport to the future So, Learn more & more
				</p>
				<Button isPrimary={true}>Browse</Button>
				<img
					src={dashboard}
					alt="dashboard svg"
					className="absolute w-[35%] right-0 top-[50%] translate-y-[-50%]"
				/>
			</div>
			<div className="w-[90%] flex gap-6 mt-6 mb-4">
				<div className="w-[40%]">
					<h4 className="text-xl mb-3 font-semibold">Currently Watching</h4>
					<div className="rounded-lg p-2 bg-white shadow-md">
						<div
							className="h-[10rem] bg-cover rounded-lg mb-2"
							style={{ backgroundImage: `url(${currentCourseImg})` }}
						></div>
						<h6 className="font-semibold">1.1 Introduction to ReactJs</h6>
						<p>Name of Author</p>
						<progress className="h-2 rounded"></progress>
					</div>
				</div>
				<div className="w-[60%]">
					<h4 className="text-xl mb-3 font-semibold">Next Videos</h4>
					<div className="rounded-md overflow-y-scroll flex flex-col gap-4 p-2 h-[16rem] bg-white shadow-md">
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
