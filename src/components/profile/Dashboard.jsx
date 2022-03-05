import React from 'react';
import OngoingCourseCard from './OngoingCourseCard';
import Button from '../../UI/Button';

function Dashboard() {
	return (
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
					<OngoingCourseCard
						tag="frontend"
						title="Beginner to Advance ReactJS"
					/>
					{/* end */}
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
