import React from 'react';
import Button from '../UI/Button';
import SectionHeading from '../UI/SectionHeading';
import { Link } from 'react-router-dom';
import useStore from '../context/useStore';
import { useEffect, useState, Children } from 'react';

function PopularCourses() {
	const { allPopularCoursesData } = useStore();
	const [allPopularCourses, setallPopularCourses] = useState([]);
	useEffect(()=>{
		try {
			if (!allPopularCoursesData.length) return;
			setallPopularCourses(allPopularCoursesData);
		} catch(err) {
			console.log(err);
		}
	},[allPopularCoursesData])
	return (
		<section
			className=" bg-white px-8 py-8 md:py-16 lg:py-20 lg:px-16"
			id="courses"
		>
			<SectionHeading
				subHeading="Popular"
				heading="Our Most Popular & Trending Online Courses"
			/>
			<div className="pt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
				<div className="h-80 border bg-gray-300">
				</div>
				<div className="h-80 border bg-gray-300"></div>
				<div className="h-80 border bg-gray-300"></div>
				<div className="h-80 border bg-gray-300"></div>
				<div className="h-80 border bg-gray-300"></div>
				<div className="h-80 border bg-gray-300"></div>
			</div>
			<div className="text-center pt-8">
				<Link to="/all-courses">
					<Button isOutline={true} textPrimary={true}>
						See More
					</Button>
				</Link>
			</div>
		</section>
	);
}

export default PopularCourses;
