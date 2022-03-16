import { Children, useEffect, useState } from 'react';
import useStore from '../../context/useStore';
import { useQuery } from '@apollo/client';
import { myProjectsQuery } from '../../graphql/Queries';

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
					teacher comment
				</p>
				<div className="w-[70%] grid grid-cols-2 text-xs mt-4 text-gray-500">
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
	const { user, myCourses } = useStore();
	const {loading,error, data}=useQuery(myProjectsQuery, {
		variables:{
			"userId": user.id
		}
	})

	console.log(data);
	const [assignmentData, setAssignmentData] = useState({});
	const [courseInfo, setCourseInfo] = useState(null);
	const [isActive, setActive] = useState(false);
	const assignmentPrint = {
		title: 'My Assignments',
	};

	

	const assignmentNav = ['All', 'Pending', 'Submitted'];

if(loading) return 'loading...'
if(error) return 'error'
	return (
		<>
			<div className="px-4 pb-8 flex flex-col gap-8 items-start lg:px-16">
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
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{Children.toArray(data.map(a=>{
						return <AssignmentCard title={a?.projects?.projectLink} tag="design" />
					}))}
					
					
				
				</div>
			</div>
		</>
	);
};

export default Assignments;
