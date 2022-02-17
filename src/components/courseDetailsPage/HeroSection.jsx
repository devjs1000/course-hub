import Button from '../../UI/Button';
import sectionHeroImg from '../../images/course-details-hero.jpg';

function HeroSection() {
	const sectionStyles = {
		backgroundImage: `linear-gradient(to right, rgba(0,0,0,.7), rgba(0,0,0,.7)) ,url(${sectionHeroImg})`,
		backgroundSize: 'cover',
	};

	return (
		<section
			className="h-screen text-white px-16 bg-no-repeat bg-center"
			style={sectionStyles}
		>
			<div className="flex flex-col items-start gap-2 pt-24">
				<h1 className="font-bold text-4xl xsm:text-5xl md:text-6xl">Title</h1>
				<p className="font-semibold tracking-wide xsm:text-xl xsm:tracking-wider md:text-2xl md:tracking-wide">
					tagline
				</p>
				<div className="flex flex-col items-center gap-4 mt-8 xsm:flex-row lg:mt-10">
					<Button isPrimary={true}>enroll now</Button>
					<Button>Learn More</Button>
				</div>
			</div>
		</section>
	);
}

export default HeroSection;
