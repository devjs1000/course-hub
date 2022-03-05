import React from 'react';
import OngoingCourseCard from './OngoingCourseCard';

function Courses() {
	return (
		<div className="px-12 grid grid-cols-4 gap-4">
			<OngoingCourseCard tag="frontend" title="Beginner to Advanced ReactJS" />
			<OngoingCourseCard tag="frontend" title="Beginner to Advanced ReactJS" />
			<OngoingCourseCard tag="frontend" title="Beginner to Advanced ReactJS" />
			<OngoingCourseCard tag="frontend" title="Beginner to Advanced ReactJS" />
		</div>
	);
}

export default Courses;
