import React from 'react';
import { Clock, ArrowRight, Tag } from 'react-bootstrap-icons';

const CourseCard = ({ image, title, description, price, tagline, name, type }) => {
	const styles = {
		backgroundImage: `url(${image})`,
		backgroundSize: 'cover',
	};
	return <div className="overflow-hidden shadow-xl rounded-xl">
			<div
				className="course-img h-40 bg-slate-800 bg-no-repeat bg-center relative"
				style={styles}
			></div>
			<h3 className="course-heading flex items-center rounded-t transition-all w-full cursor-pointer  truncate h-[2rem] bg-white text-xl absolute top-[0] right-0 text-slate-700 font-semibold uppercase ">
				<span>{title}</span>
			</h3>
			<div className="p-4 flex flex-col items-start gap-2">
				<p className="text-sm bg-slate-200 px-2 rounded-full text-slate-700">{type}</p>
				<p className="flex items-center gap-1 text-sm">
					<span>{tagline}</span>
				</p>
				<p className="text-lg font-semibold text-slate-700 flex gap-2"><Tag />  {price}</p>
				<a
					href="#"
					className="relative flex items-center gap-2 justify-between  text-primary-color-dark font-semibold px-2 py-1 rounded-sm hover:bg-primary-color-dark hover:text-white hover:px-4 transition-all"
				>
					Enroll <ArrowRight />
				</a>
			</div>
		</div>
};

export default CourseCard;
