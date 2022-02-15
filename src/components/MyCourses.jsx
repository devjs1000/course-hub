import React, { useState, useEffect, Children } from 'react';
import CourseCard from './courses/CourseCard';
import useStore from '../context/useStore';

const MyCourses = ({}) => {
	const { myCourses } = useStore();
	if (!myCourses.data) return null;
	console.log(myCourses.data);
	return (
		<div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-10 m-6">
			{Children.toArray(
				myCourses.data.map(course => {
					return (
						<CourseCard
							title={course.courseId.name}
							enrolled={true}
							image={course.courseId.image}
							description={course.courseId.description}
							tagline={course.courseId.tagline}
							type={course.courseId.type}
						/>
					);
				}),
			)}
		</div>
	);
};

export default MyCourses;
