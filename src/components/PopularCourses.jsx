import React from 'react';
import Button from '../UI/Button';
import SectionHeading from '../UI/SectionHeading';
import { Link } from 'react-router-dom';

function PopularCourses() {
	return (
		<section className=" bg-white px-16 py-8" id="courses">
			<SectionHeading
				subHeading="Popular"
				heading="Our Most Popular & Trending Online Courses"
			/>
			<div className="pt-16 grid grid-cols-4">
				<div className="h-80 w-64 border bg-gray-300"></div>
				<div className="h-80 w-64 border bg-gray-300"></div>
				<div className="h-80 w-64 border bg-gray-300"></div>
				<div className="h-80 w-64 border bg-gray-300"></div>
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
