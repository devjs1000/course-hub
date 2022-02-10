import React from 'react';
import heroImg from '../../images/hero-img.png';
import Button from '../../UI/Button';
import rectDesign from '../../images/rect-design.svg';

function Hero() {
	return (
		<section className="section-hero bg-primary-color-dark flex text-white px-16 relative pt-12">
			<div className="flex flex-col items-start gap-10">
				<h1 className="text-7xl">Lorem ipsum la casa de papel.</h1>
				<p className="w-3/4">
					It has roots in a piece of classical Latin literature from 45 BC,
					making it over 2000 years old. Richard McClintock, a Latin professor
					at Hampden-Sydney College in Virginia
				</p>
				<div className="flex items-center gap-4">
					<Button>Start now</Button>
					<Button isOutline={true} textWhite={true}>
						Find more
					</Button>
				</div>
			</div>
			<img
				src={heroImg}
				alt="image of excited girl"
				className="w-3/4 object-cover"
			/>
			<img
				src={rectDesign}
				alt="rectangualr svg desgin for decoration"
				className="section-hero-svg"
			/>
		</section>
	);
}

export default Hero;
