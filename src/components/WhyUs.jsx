import React,{Children} from 'react';
import Button from '../UI/Button';
import SectionHeading from '../UI/SectionHeading';
import { Check } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import useStore from '../context/useStore'


const WhyFeature = ({ title ,description }) => {
const {theme} = useStore()
const paraStyles = ` ${theme? 'text-white' : 'text-slate-700'} `
const titleStyles = `${theme? 'text-white' : 'text-slate-900'} text-2xl font-semibold mb-2`
	return (
		<div className="relative">
			<div className="absolute top-[.2rem] left-[-4rem] w-8 h-8 border rounded-full bg-primary-color-light grid place-content-center">
				<Check className="text-white text-xl" />
			</div>
			<h4 className={titleStyles}>{title}</h4>
			<p className={paraStyles} >
				{description}
			</p>
		</div>
	);
};

function WhyUs() {
const {theme} = useStore()
	const whyUsStyles = `about-section ${theme? 'bg-slate-800' : 'bg-white' } py-8 px-8 flex flex-col items-center gap-10 lg:flex-row md:py-16 lg:py-20`
	const paraStyles = `w-full ${theme? 'text-white': 'text-slate-700'} lg:w-[90%]`
	let featuresArray=[
	{
		'title' : 'Low Cost',
		'description' : 'We offer premium courses at affordable prices so you can focus more on your studies' ,
	},
	{
		'title' : 'Learn With Experts',
		'description' : `Our instructors are from premier Institutes like IITs, Nits, Harvard, etc and from 
		Fortune 500 startups and companies
		` ,


	},
	{
		'title' : 'Different Course Variation',
		'description' : 'Our courses range from basic internet usage to more advance topics such as Web developement, DevOps, AI-ML,etc' ,
	},
	]

	

	return (
<section
	className={whyUsStyles}
	id="about"
>
	<div className="flex-1 flex flex-col items-start gap-4 lg:flex-[0.5]">
		<SectionHeading subHeading="WhyUs?" heading="Why Learn Here?" />
		<p className={paraStyles} >
			We offer the best of educational courses at affordable prices! Our instructors
			are Senior Engineers from Premier Institues and Fortune 500 start-ups and companies.
		</p>
		<Link to="/about-us">
			<Button isPrimary={true}>Discover More</Button>
		</Link>
	</div>

			<div className="flex-[0.5] flex flex-col gap-6 bor border-l pl-12">
		{
Children.toArray(
			featuresArray.map(obj=>{
				return	<WhyFeature title={obj.title} description={obj.description}/>
			})
			)
		}
			</div>
</section>
	);
}

export default WhyUs;
