import React, {useContext} from 'react';	
import useStore from '../../context/useStore'

function OngoingCourseCard({ tag, title }) {
	let tagGradient;
	const {theme} = useStore()
	if (tag === 'frontend') {
		tagGradient = 'from-yellow-500 to-yellow-300';
	} else if (tag === 'backend') {
		tagGradient = 'from-green-500 to-green-300';
	} else if (tag === 'database') {
		tagGradient = 'from-orange-500 to-orange-300';
	} else if (tag === 'fullstack') {
		tagGradient = 'from-blue-500 to-blue-300';
	}

	const tagClasses = `text-center bg-gradient-to-r ${tagGradient} rounded-md text-white p-1`;
	const cardClasses = `shadow-md p-4 rounded-md ${theme ? 'bg-slate-700': 'bg-white'} flex flex-col gap-4 h-[13rem]`
	return (
		<div className={cardClasses}>
			<div className={tagClasses}>{tag}</div>
			<h4 className="text-md font-semibold">{title}</h4>
			<div className="flex items-center gap-4 mt-auto">
				<p>Instructor</p>
				<progress className="h-2 rounded-full"></progress>
			</div>
		</div>
	);
}

export default OngoingCourseCard;
