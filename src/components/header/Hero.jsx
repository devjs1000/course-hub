import React from 'react';
import heroImg from '../../images/hero-img.png';
import Button from '../../UI/Button';
import rectDesign from '../../images/rect-design.svg';

function Hero() {
	return (
		<section className="section-hero z-10 bg-white flex flex-col gap-2 items-center px-4 py-4 relative sm:px-8 md:flex-row md:pt-0 lg:items-start lg:pt-12 xl:pt-16 xl:px-16">
			<div className="flex flex-col items-center gap-4 order-2 xsm:gap-6 md:items-start md:w-1/2 lg:gap-10">
				<h1 className="text-4xl text-center md:text-left lg:text-6xl xl:text-7xl">
					Lorem ipsum la casa de papel.
				</h1>
				<p className="w-full">
					It has roots in a piece of classical Latin literature from 45 BC,
					making it over 2000 years old. Richard McClintock, a Latin professor
					at Hampden-Sydney College in Virginia
				</p>
				<div className="flex items-center gap-4">
					<Button isPrimary={true}>Start now</Button>
					<Button isOutline={true} textPrimary={true}>
						Find more
					</Button>
				</div>
			</div>
			<img
				src={heroImg}
				alt="image of excited girl"
				className="w-full object-cover mr-16  md:order-2 md:mr-0 md:w-2/4 xl:w-2/4"
			/>
			<img
				src={rectDesign}
				alt="rectangualr svg desgin for decoration"
				className="absolute bottom-0 opacity-0 lg:w-60 lg:opacity-100 xl:w-auto"
			/>
		</section>
	);
}

export default Hero;
