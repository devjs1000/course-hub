import React from 'react';
import Button from '../../UI/Button';
import hero from '../../images/hero.svg';

function Hero() {
	const bluePrint = {
		heading: 'Hold our hand on the path of your career.',
		subHeading:
			'Take on the professional world by learning and practicing in-demand skills with us.',
		callToAction: 'Enroll Now',
	};

	return (
		<section className="flex py-8 flex-col gap-2 items-center px-4 sm:px-8 md:flex-row xl:px-16">
			<div className="flex items-center">
				<div className="text-white w-[50%] flex flex-col items-start gap-6">
					<h6 className="text-primary-color-light relative uppercase font-semibold text-lg after:absolute after:right-[-55%] after:top-[50%] after:translate-y-[-50%] after:h-[2px] after:bg-current after:w-[50%]">
						Path to your future
					</h6>
					<h1 className="text-7xl font-bold">{bluePrint.heading}</h1>
					<p className="text-xl">{bluePrint.subHeading}</p>
					<Button isPrimary={true}>Enroll</Button>
				</div>
				<div className="object-cover">
					<img src={hero} alt="" className="block w-full" />
				</div>
			</div>
		</section>
	);
}

export default Hero;
