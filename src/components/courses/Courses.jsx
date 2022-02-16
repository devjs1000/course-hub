import { Children, useEffect, useState } from 'react';
import { allFrontendCourses } from '../../fetch/courseApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import CourseCard from './CourseCard';

function Courses({ courseArray = [], title }) {
	if (courseArray == []) return null;

	return (
		<div className="bg-slate-50 px-16 h-[100%] pt-8 select-none lg:pt-16">
			<h2 className="text-4xl font-semibold w-full text-slate-700 uppercase">
				{title}
			</h2>

			<Swiper
				style={{
					'--swiper-navigation-color': '#000',
				}}
				slidesPerView={1}
				spaceBetween={20}
				navigation={true}
				modules={[Navigation]}
				className="mt-4 py-8 lg:py-8"
			>
				{courseArray.map((course, i) => {
					return (
						<SwiperSlide key={course.name + course.type + i}>
							<CourseCard
								image={course.image}
								title={course.name}
								tagline={course.tagline}
								price={course.price}
								type={course.type}
								description={course.description}
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
}

export default Courses;
