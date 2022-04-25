import React from 'react';
import Button from '../UI/Button';
import SectionHeading from '../UI/SectionHeading';
import { Link } from 'react-router-dom';
import useStore from '../context/useStore';
import { useEffect, useState, Children } from 'react';
import { useQuery } from "@apollo/client";
import { allPopularCoursesQuery } from "../graphql/Queries";
import { Clock, ListUl, PeopleFill } from 'react-bootstrap-icons';
import author from '../images/author.jpg';

function PopularCourses() {
	const [ allPopularCoursesData ,setAllPopularCoursesData ] = useState([]);
	const [ allPopularCoursesLoading, setAllPopularCoursesLoading ] = useState(true);
	const {theme}  = useStore();
	const sectionStyles = `bg-${theme?'slate-800' : 'white'} px-8 py-8 md:py-16 lg:py-20 lg:px-16`
	const { loading, data, error } = useQuery(allPopularCoursesQuery);
	if(data) {
		let popularCourses = data.popularCourses;
		if (popularCourses.length > 6) {
			popularCourses = popularCourses.slice(0, 6);
		}
		if (allPopularCoursesData.length == 0) {
			setAllPopularCoursesData(popularCourses);
		}
	}
	useEffect(()=>{
		if (data && data.popularCourses) {
			let popularCourses = data.popularCourses;
			if (popularCourses.length > 6) {
				popularCourses = popularCourses.slice(0, 6);
			}
			setAllPopularCoursesData(popularCourses);
		}
	},[]);
	return (
		<section
			className={sectionStyles}
			id="courses"
		>
			<SectionHeading
				subHeading="Popular"
				heading="Our Most Popular & Trending Online Courses"
			/>
			{ (allPopularCoursesData && allPopularCoursesData.length>0) ? 
				<div className="pt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
					{allPopularCoursesData.map ((current,index)=>{
						if (current) {
							// console.log("current",current)
							return (
							<Link to={`all-courses/coursedetails/${current?.id}`} key={index}>
							<div className="m-4 border bg-gray-300">
								<div className="h-[12rem] rounded-t-sm overflow-hidden relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[rgba(255,160,0,0.09)]">
									<img
										src={current?.image}
										alt="course-image"
										className="object-cover w-full h-full"
									/>
								</div>
								<div className="relative px-8 py-10 bg-white text-slate-900 flex flex-col items-start gap-4">
									<span className="bg-orange-300 text-[10px] font-semibold rounded-sm text-white px-2 py-[.1rem] uppercase flex-end">
										{current?.type}
									</span>
									<div className="flex items-center gap-6">
										<div className="flex items-center gap-2 font-semibold text-gray-700">
											<Clock className="text-lg text-primary-color-light" />
											<span>35 Hours</span>
										</div>
										<div className="flex items-center gap-2 font-semibold text-gray-700">
											<ListUl className="text-xl text-primary-color-light" />
											<span>300</span>
										</div>
										{ current?.noOfSubscribers && 
											<div className="flex items-center gap-2 font-semibold text-gray-700">
												<PeopleFill className="text-lg text-primary-color-light" />
												<span>{current?.noOfSubscribers}</span>
											</div>
										}
										
									</div>
									<h3 className="leading-6 text-xl font-semibold h-12 text-slate-800">
										{current?.tagline}
									</h3>
									<div className="flex items-center gap-4">
										<div
											className="bg-cover h-12 w-12 rounded-full border bg-no-repeat bg-top"
											style={{ backgroundImage: `url(${author})` }}
										></div>
										<span>John Doe</span>
									</div>
									<span className="absolute top-[-1.1rem] right-[1rem] bg-[#fc2340] px-4 py-1 rounded-sm text-white text-xl">
										₹ { current?.price}/-{' '}
									</span>
								</div>
							</div>
							</Link>
							);
						}
					})}
				</div>
				: 
				<div className="pt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
					<div className="h-80 border bg-gray-300"></div>
					<div className="h-80 border bg-gray-300"></div>
					<div className="h-80 border bg-gray-300"></div>
					<div className="h-80 border bg-gray-300"></div>
					<div className="h-80 border bg-gray-300"></div>
					<div className="h-80 border bg-gray-300"></div>
				</div>
			}
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
