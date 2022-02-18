import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import CourseCard from './CourseCard';
import BoxLoading from '../../UI/BoxLoading'
function Courses({ courseArray = [], title }) {

	return (
	<>
	{courseArray.length? 
		<div className="bg-slate-50 px-16 h-[100%] pt-8 select-none lg:pt-16">
			<h2 className="text-4xl font-semibold w-full text-slate-700 uppercase">
				{title}
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
		</div>: 
		<BoxLoading />
		}
		</>
	);
}

export default Courses;
