import React from 'react';

import Button from '../../components/Button/Button';
import Carousal from '../carousal/Carousal';

function Hero(props) {
	return (
		<section className="hero-section bg-white text-white p-8 bg-no-repeat bg-center relative">
			<div className="flex flex-col items-start gap-1">
				<h1 className="font-bold text-4xl xsm:text-5xl md:text-6xl">
					{props.title}
				</h1>
				<p className="font-semibold tracking-wide xsm:text-xl xsm:tracking-wider md:text-2xl md:tracking-wide">
					{props.punchline}
				</p>
				<div className="flex flex-col items-center gap-4 mt-8 xsm:flex-row lg:mt-10">
					{props.logged ?
					<Button isPrimary={true}>Log in</Button>
					:					<Button isPrimary={true}>enroll now</Button>

					}
					<Button>Learn More</Button>
				</div>
			</div>
			<Carousal related={props.related} />
		</section>
	);
}

export default Hero;
