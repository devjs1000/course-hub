import { Children, useState } from 'react';
import useStore from '../../context/useStore';

const AssignmentCard = () => {
	return (
		<div className="bg-white shadow-md p-4 rounded-md">
			<h4 className="text-primary-color-dark font-semibold text-xl">
				Data Science
			</h4>
			<p className="text-sm mt-3">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. In consequatur
				placeat officia cupiditate ea eius, praesentium dolorum? Cum, molestias
				in!
			</p>
			<div className="grid grid-cols-2 text-xs mt-4 text-gray-500">
				<span>Assignment Progress</span>
				<span className="text-right">40%</span>
				<progress
					value="40"
					max="100"
					className="w-full appearance-none border-none h-2 rounded-full overflow-hidden col-span-2 mt-1"
				></progress>
			</div>

			<div className="text-right text-sm mt-6">
				<a
					href="#"
					className="text-primary-color-dark font-semibold px-2 py-1 hover:bg-primary-color-dark hover:text-white transition-all duration-300"
				>
					Visit Course &rarr;
				</a>
			</div>
		</div>
	);
};

const Assignments = ({}) => {
	const { assignments, user, myCourses } = useStore();
	const [assignmentData, setAssignmentData] = useState({});
	const [courseInfo, setCourseInfo] = useState(null);
	const [isActive, setActive] = useState(false);
	const assignmentPrint = {
		title: 'My Assignments',
	};

	const getAssignmentData = e => {
		const name = e.target.name;
		const value = e.target.value;
		const newData = { ...assignmentData };
		newData[name] = value;
		setAssignmentData(newData);
	};

	const getSelected = e => {
		if (e.target.value === 'None') return setCourseInfo(null);
		const exact = myCourses.find(data => data.name === e.target.value);
		setCourseInfo({
			instructorId: exact.instructorId,
			courseId: exact._id,
			userId: user._id,
		});
	};

	const submitAssignment = e => {
		e.preventDefault();
		if (!courseInfo) return alert('Select the course for assignment');
		const finalData = { ...assignmentData, ...courseInfo };
		// Post request here
		e.target.reset();
		setCourseInfo(null);
	};

	const assignmentNav = ['All', 'Pending', 'Submitted'];

	return (
		<>
			<div className="px-16 pb-8 flex flex-col gap-8 items-start">
				<div className="assignment-navigation border-b-2 border-gray-500 relative py-1">
					{Children.toArray(
						assignmentNav.map(item => (
							<span className="text-center inline-block cursor-pointer">
								{item}
							</span>
						)),
					)}
					<div className="animated-border absolute bottom-[-0.15rem] left-0 w[3rem] h-[2px] bg-primary-color-dark"></div>
				</div>
				<div className="grid grid-cols-4 gap-4">
					<AssignmentCard />
					<AssignmentCard />
					<AssignmentCard />
					<AssignmentCard />
					<AssignmentCard />
				</div>
			</div>
		</>
	);
};

export default Assignments;
