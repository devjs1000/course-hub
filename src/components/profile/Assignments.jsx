import { Children, useState } from 'react';
import useStore from '../../context/useStore';

const AssignmentCard = ({ title, tag }) => {
	let borderColor;
	if (tag === 'backend') {
		borderColor = 'before:from-emerald-500 before:to-emerald-300';
	} else if (tag === 'frontend') {
		borderColor = 'before:from-yellow-500 before:to-yellow-300';
	} else if (tag === 'database') {
		borderColor = 'before:from-orange-500 before:to-orange-300';
	} else if (tag === 'design') {
		borderColor = 'before:from-indigo-500 before:to-indigo-300';
	}

	const cardClasses = `relative overflow-hidden bg-white shadow-md p-4 rounded-md flex flex-col gap-4 before:absolute before:top-0 before:left-0 before:h-full before:w-2 before:bg-gradient-to-b ${borderColor}`;

	return (
		<div className={cardClasses}>
			<div>
				<h4 className="text-slate-900 font-semibold text-xl">{title}</h4>
				<span>{tag}</span>
			</div>
			<div>
				<p className="text-sm mt-3">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. In
					consequatur placeat officia cupiditate ea eius, praesentium dolorum?
					Cum, molestias in!
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
				<div className="grid grid-cols-3 gap-4">
					<AssignmentCard title="Figma" tag="design" />
					<AssignmentCard title="HTML" tag="frontend" />
					<AssignmentCard title="NodeJS" tag="backend" />
					<AssignmentCard title="ReactJS" tag="frontend" />
					<AssignmentCard title="MongoDB" tag="database" />
				</div>
			</div>
		</>
	);
};

export default Assignments;
