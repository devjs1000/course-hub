import React from 'react';

function OngoingCourseCard({ tag, title }) {
	return (
		<div className="shadow-md h-[10rem] py-2 px-4 rounded-md bg-white flex flex-col gap-2">
			<div className="text-center bg-orange-500 rounded-md text-white">
				{tag}
			</div>
			<h4 className="text-md font-semibold">{title}</h4>
			<div className="flex items-center gap-4 mt-auto">
				<p>Instructor</p>
				<progress className="h-2 rounded-full"></progress>
			</div>
		</div>
	);
}

export default OngoingCourseCard;
