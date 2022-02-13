import React from 'react';
import { Clock, ArrowRight, Tag } from 'react-bootstrap-icons';

const CourseCard = ({ image, title, description, price, tagline, name, type }) => {
	const styles = {
		backgroundImage: `url(${image})`,
		backgroundSize: 'cover',
	};
	return <div className="overflow-hidden cursor-pointer hover:bg-[rgba(0,0,0,.5)] h-[14rem] w-[14rem] bg-slate-100 shadow-xl rounded-xl bg-contain bg-top-center bg-no-repeat" style={{backgroundImage:`url(${image}`}}>
<div className="h-[14rem] p-2 transition-all w-[14rem] bg-transparent hover:text-white text-transparent hover:bg-gray-900">

	Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam odit atque distinctio neque quos mollitia, deleniti natus veniam doloribus provident possimus facilis, architecto, eveniet iure excepturi! Debitis ad id quaerat!
</div>
		</div>
};

export default CourseCard;
