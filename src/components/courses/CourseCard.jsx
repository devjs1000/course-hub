import React from 'react';
import { Clock } from 'react-bootstrap-icons';

const CourseCard = ({ courseImg }) => {
	const styles = {
		backgroundImage: `url(${courseImg})`,
		backgroundSize: 'cover',
	};
	return (
		<div className="overflow-hidden shadow-xl rounded-md">
			<div
				className="course-img h-40 bg-slate-800 bg-no-repeat bg-center relative"
				style={styles}
			></div>
			<h3 className="course-heading rounded-tl-[1rem] hover:text-red-600 pt-2 truncate h-[5rem] bg-slate-50 text-2xl absolute top-24 right-0 text-red-800 font-semibold w-3/4 uppercase text-right">
				<span>React js 50 Lectures, 22hrs 50 Lectures, 22hrs</span>
			</h3>
			<div className="p-4 flex flex-col items-start gap-2">
				<p className="text-sm">Author name</p>
				<p className="flex items-center gap-1 text-sm">
					<Clock /> <span>50 Lectures, 22hrs</span>
				</p>
				<p className="text-lg font-semibold"> ₹ 1500 /- </p>
				<a
					href="#"
					className="relative text-primary-color-dark font-semibold px-2 py-1 rounded-sm hover:bg-primary-color-dark hover:text-white hover:px-4 transition-all"
				>
					Enroll &rarr;
				</a>
			</div>
		</div>
	);
};

export default CourseCard;
