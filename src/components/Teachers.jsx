import React,{Children} from 'react';
import { Instagram, Linkedin, Twitter } from 'react-bootstrap-icons';
import instOneImage from '../images/instructors/Inst-1.jpg';
import instTwoImage from '../images/instructors/Inst-2.jpg';
import instThreeImage from '../images/instructors/Inst-3.jpg';
import instFourImage from '../images/instructors/Inst-4.jpg';
import SectionHeading from '../UI/SectionHeading';
import useStore from '../context/useStore'
const InstructorCard = ({ image, name,quote, role }) => {
	return (
		<div
			className="shadow-md flex items-start rounded-sm overflow-hidden"
			id="teachers"
		>
			<div
				className="flex-[0.5] h-full bg-cover bg-top relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,.2)]"
				style={{ backgroundImage: `url(${image})` }}
			>
				&nbsp;
			</div>
			<div className="flex-[0.8] p-4 flex flex-col items-start gap-4 h-[275px]">
				<div>
					<h6 className="text-2xl font-semibold">{name}</h6>
					<span>{role}</span>
				</div>
				<div className="h-[2px] bg-primary-color-light w-[50%]"></div>
				<p>
					{quote}
				</p>
				<div className="text-2xl flex items-center gap-4 text-primary-color-light">
					<Instagram />
					<Twitter />
					<Linkedin />
					
				</div>
				
			</div>
		</div>
	);
};

function Teachers() {
	const {theme} = useStore()
	let teachersArray = [
	{
		'name' : 'Akshay Acharya',
		'quote' : 'Education is what survives when what has been learned is forgotten.',
		'role' : 'Professional React Developer',
		'img': instOneImage
	},
	{
		'name' : 'Sahil Gupta',
		'quote' : 'Our task, regarding creativity, is to help children climb their own mountains, as high as possible. No one can do more',
		'role' : 'Software Engineer at BlackBuck Inc.',
		'img': instTwoImage


	},
	{
		'name' : 'Sneha Sharma',
		'quote' : 'Education is for improving the lives of others and for leaving your community and world better than you found it.',
		'role' : 'Sr. Front End Developer at Swiggy',
		'img': instThreeImage


	},
	{
		'name' : 'Sourav Mishra',
		'quote' : 'Education is not to reform students or amuse them or to make them expert technicians. It is to unsettle their minds, widen their horizons, inflame their intellects, teach them to think straight, if possible.',
		'role' : 'Sr. DevOps Engineer',
		'img': instFourImage


	},
	]

	

	const teachersStyles = ` ${theme? 'bg-slate-800 text-white' : 'text-slate-900 bg-white'} px-8 py-8 flex flex-col items-start lg:px-16 md:py-16 lg:py-20`
	return (
		<div className={teachersStyles} >
			<SectionHeading
				subHeading="Instructors"
				heading="Our professional & Expert Course Instructors"
			/>
			<div className="w-full grid grid-rows-4 gap-4 mt-16">
				{
					Children.toArray(
						teachersArray.map(obj=>{
							return <InstructorCard image={obj.img} name={obj.name} quote={obj.quote} role={obj.role} />

						})
					)
				}
			</div>
		</div>
	);
}

export default Teachers;
