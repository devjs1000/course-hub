import React from 'react';
import OngoingCourseCard from './OngoingCourseCard';

function Courses() {
	return (
		<div className="px-12 grid grid-cols-4 gap-4">
			<OngoingCourseCard tag="frontend" title="Beginner to Advanced ReactJS" />
			<OngoingCourseCard tag="backend" title="Beginner to Advanced NodeJS" />
			<OngoingCourseCard tag="database" title="Beginner to Advanced MongoDB" />
			<OngoingCourseCard tag="fullstack" title="Beginner to Advanced MERN" />
		</div>
	);
}

export default Courses;
