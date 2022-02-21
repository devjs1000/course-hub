import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import CourseCard from './CourseCard';
import useStore from '../../context/useStore';
import BoxLoading from '../../UI/BoxLoading';
import { useEffect, useState } from 'react';

function Courses() {
	const {allCoursesData} = useStore();
	const [coursesByType,setCoursesByType] = useState([])

	useEffect(()=>{
		let tempType = []
		let tempData=[]
		if(allCoursesData.length===0) return
		allCoursesData.forEach(course=>{
			if(!tempType.includes(course.type)){
				tempType.push(course.type)
			}
		})
		tempType.forEach(type=>{
			const data = allCoursesData.filter(course=>course.type===type)
			tempData =[...tempData,{type,data}]
		})
		setCoursesByType(tempData)
	},[allCoursesData])

	return (
		<>
		{
			coursesByType.map(eachType=> <div className="">
				<div className="bg-slate-50 px-16 h-[100%] pt-8 select-none lg:pt-16">
			<h2 className="text-4xl font-semibold w-full text-slate-700 uppercase">
				{eachType.type}
			</h2>

			<Swiper
				style={{
					'--swiper-navigation-color': '#000',
				}}
				breakpoints={{
					// when window width is >= 640px
					640: {
						width: 640,
						slidesPerView: 1,
					},
					// when window width is >= 768px
					768: {
						width: 768,
						slidesPerView: 2,
					},
				}}
				spaceBetween={20}
				navigation={true}
				modules={[Navigation]}
				className="mt-4 py-8 lg:py-8"
			>
				{eachType.data.map((course) => {
					return (
						<SwiperSlide key={course._id}>
							<CourseCard id={course._id}/>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
			</div> )
		}
		</>
	);
}

export default Courses;
