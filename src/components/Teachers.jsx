import React from 'react';
import { Instagram, Linkedin, Twitter } from 'react-bootstrap-icons';
import instOneImage from '../images/instructors/Inst-1.jpg';
import instTwoImage from '../images/instructors/Inst-2.jpg';
import instThreeImage from '../images/instructors/Inst-3.jpg';
import instFourImage from '../images/instructors/Inst-4.jpg';
import SectionHeading from '../UI/SectionHeading';
import useStore from '../context/useStore'
const InstructorCard = ({ image }) => {
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
			<div className="flex-[0.8] p-4 flex flex-col items-start gap-4">
				<div>
					<h6 className="text-2xl font-semibold">John Doe</h6>
					<span>Professional React Developer</span>
				</div>
				<div className="h-[2px] bg-primary-color-light w-[50%]"></div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
					placeat!
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
	const teachersStyles = ` ${theme? 'bg-slate-800 text-white' : 'text-slate-900 bg-white'} px-8 py-8 flex flex-col items-start lg:px-16 md:py-16 lg:py-20`
	return (
		<div className={teachersStyles} >
			<SectionHeading
				subHeading="Instructors"
				heading="Our professional & Expert Course Instructors"
			/>
			<div className="w-full grid grid-cols-1 gap-4 mt-16 md:grid-cols-2">
				<InstructorCard image={instOneImage} />
				<InstructorCard image={instTwoImage} />
				<InstructorCard image={instThreeImage} />
				<InstructorCard image={instFourImage} />
			</div>
		</div>
	);
}

export default Teachers;
