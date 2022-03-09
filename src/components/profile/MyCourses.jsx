import React from 'react';
import OngoingCourseCard from './OngoingCourseCard';

function MyCourses() {
	return (
		<div className="px-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-16">
			<OngoingCourseCard tag="frontend" title="Beginner to Advanced ReactJS" />
			<OngoingCourseCard tag="backend" title="Beginner to Advanced NodeJS" />
			<OngoingCourseCard tag="database" title="Beginner to Advanced MongoDB" />
			<OngoingCourseCard tag="fullstack" title="Beginner to Advanced MERN" />
		</div>
	);
}

export default MyCourses;
