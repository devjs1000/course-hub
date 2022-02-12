import {Children, useEffect, useState} from 'react';
import{allFrontendCourses} from '../../fetch/courseApi'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import courseImg from '../../images/course-img.jpg';
import CourseCard from './CourseCard';

function Courses({courseArray=[], title}) {
	if(courseArray==[]) return null

	return <div className="h-screen bg-slate-50 px-16 py-16 select-none">
			<h2 className="text-4xl font-semibold w-full text-slate-700 text-center">{title}</h2>

			<Swiper
				style={{
					'--swiper-navigation-color': '#000',
				}}
				slidesPerView={1}
				spaceBetween={20}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
				breakpoints={{
					640: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 40,
					},
					1024: {
						slidesPerView: 4,
						spaceBetween: 50,
					},
				}}
				navigation={true}
				modules={[Navigation]}
				className="mt-16 py-8"
			>
			{
				courseArray.map((course, i)=>{
					return <>
					<SwiperSlide key={course.name+course.type+i}>
						<CourseCard  image={course.image} title={course.name} tagline={course.tagline} price={course.price}  type={course.type} description={course.description} />
					</SwiperSlide>
					</>
				})
			}
			</Swiper>
		</div>
}

export default Courses;
