import React from 'react';
import { Instagram, Linkedin, Twitter } from 'react-bootstrap-icons';
import instOneImage from '../images/instructors/Inst-1.jpg';
import instTwoImage from '../images/instructors/Inst-2.jpg';
import instThreeImage from '../images/instructors/Inst-3.jpg';
import instFourImage from '../images/instructors/Inst-4.jpg';

const InstructorCard = ({ image }) => {
	return (
		<div className="shadow-md flex items-start h-[14rem] rounded-sm overflow-hidden">
			<div
				className="flex-[0.4] h-full bg-cover bg-top relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,.2)]"
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
	return (
		<div className="bg-[#fffdfd] text-slate-900 flex flex-col items-start px-16 py-16">
			<div className="w-[50%] flex flex-col gap-10">
				<h4 className="max-w-min text-slate-400 text-2xl font-semibold relative after:absolute after:bottom-[-1rem] after:left-0 after:h-1 after:w-[40%] after:bg-primary-color-light">
					Instructors
				</h4>
				<h2 className="text-5xl font-semibold leading-[3.5rem]">
					Our professional & Expert Course Instructors
				</h2>
			</div>
			<div className="w-full grid grid-cols-2 gap-6 mt-16">
				<InstructorCard image={instOneImage} />
				<InstructorCard image={instTwoImage} />
				<InstructorCard image={instThreeImage} />
				<InstructorCard image={instFourImage} />
			</div>
		</div>
	);
}

export default Teachers;
