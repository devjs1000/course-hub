import React from 'react';
import { Clock, ArrowRight, Tag } from 'react-bootstrap-icons';
import {Link} from 'react-router-dom'
const CourseCard = ({ image, title, description, price, tagline, name, type, enrolled=false }) => {
	const styles = {
		backgroundImage: `url(${image})`,
		backgroundSize: 'cover',
	};
	return <div className="overflow-hidden cursor-pointer  hover:bg-[rgba(0,0,0,.5)] h-[14rem] w-[14rem] bg-slate-100 shadow-xl rounded-xl bg-contain bg-top-center bg-no-repeat" style={{backgroundImage:`url(${image}`}}>
<div className="h-[14rem] flex justify-center opacity-0 hover:opacity-100 items-center flex-wrap p-2 transition-all w-[14rem]  bg-transparent hover:text-slate-50 text-transparent hover:bg-[rgba(0,0,0,.6)] hover:backdrop-blur-[10px]">
<h1 className='font-bold text-center text-xl w-full'>{title}</h1>
{
	enrolled?
	<Link className='bg-red-700 py-2 text-center font-bold w-full mx-4' to='/'>start course</Link>
:
<>
<div className='flex justify-start w-full mx-4 gap-0 items-center'>
<span className='bg-red-500 inline-block w-1/2 px-2 py-1'>	{type}
</span>
<span className='bg-white text-red-500 inline-block w-1/2 px-2 py-1'>		{price}

</span>


</div>
<Link className='bg-red-700 py-2 text-center font-bold w-full mx-4' to='/'>enroll course</Link>
</>

}
</div>
		</div>
};

export default CourseCard;
