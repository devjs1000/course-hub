import React from 'react';
import Button from '../UI/Button';
import SectionHeading from '../UI/SectionHeading';
import { Check } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const WhyFeature = ({ title }) => {
	return (
		<div className="relative">
			<div className="absolute top-[.2rem] left-[-4rem] w-8 h-8 border rounded-full bg-primary-color-light grid place-content-center">
				<Check className="text-white text-xl" />
			</div>
			<h4 className="text-2xl font-semibold mb-2 text-slate-900">{title}</h4>
			<p className="text-slate-700">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
				sequi asperiores eius molestias unde accusantium.
			</p>
		</div>
	);
};

function WhyUs() {
	return (
		<section
			className="about-section py-8 px-8 flex flex-col items-center gap-10 lg:flex-row md:py-16 lg:py-20"
			id="about"
		>
			<div className="flex-1 flex flex-col items-start gap-4 lg:flex-[0.5]">
				<SectionHeading subHeading="WhyUs?" heading="Why Learn Here?" />
				<p className="w-full text-slate-700 lg:w-[90%]">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eius
					est ducimus eos, pariatur labore, necessitatibus explicabo repudiandae
					ipsam cumque quo hic porro, enim at? Corporis, eum quaerat ea
					reprehenderit fuga quo saepe sint nisi commodi totam asperiores odit
					beatae!
				</p>
				<Link to="/about-us">
					<Button isPrimary={true}>Discover More</Button>
				</Link>
			</div>

			<div className="flex-[0.5] flex flex-col gap-6 bor border-l pl-12">
				<WhyFeature title="Low Cost" />
				<WhyFeature title="Learn With Experts" />
				<WhyFeature title="Diffrent Course Variation" />
			</div>
		</section>
	);
}

export default WhyUs;
