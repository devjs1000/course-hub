import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import CarousalCard from './CarousalCard';
function Carousal(props) {
	return (
		<div className="carousal px-8">
			<Swiper
				slidesPerView={1}
				spaceBetween={0}
				slidesPerGroup={1}
				breakpoints={{
					640: {
						slidesPerView: 2,
						spaceBetween: 8,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 10,
					},
				}}
				navigation={true}
				modules={[Navigation]}
				className="h-full flex items-center justify-center sm:bg-primary-color-dark rounded shadow-xl"
			>
				{
					props.related.map(a=>{
						return 	<SwiperSlide>
						<CarousalCard url={a.url} punchline={a.punchline} title={a.title} price={a.price} />
					</SwiperSlide>
					})
				}
			
			</Swiper>	
		</div>
	);
}

export default Carousal;
