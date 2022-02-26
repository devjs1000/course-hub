import { Children } from 'react';
import Button from '../../UI/Button';

function HeroSection({ course }) {
	console.log(course);
	// { backgroundImage: `url(${course?.image})` }
	return (
		<div className="details-hero relative h-[60vh] overflow-hidden bg-center bg-fixed bg-no-repeat bg-cover">
			<div className="absolute top-[50%] left-0 translate-y-[-50%] flex flex-col items-start sm:w-full backdrop-blur-[100px] px-16 py-8 sm:rounded-xl ">
				<div
					className="h-28 w-96 bg-cover bg-no-repeat bg-center rounded-md"
					style={{ backgroundImage: `url(${course?.image})` }}
				></div>

				<div className="mb-7">
					<h1 className="text-4xl font-bold text-white">{course.name}</h1>
					<h2 className="text-xl text-white">{course.tagline}</h2>
				</div>

				<div className="">
					<div className="my-4 flex items-center gap-2">
						{Children.toArray(
							course?.advantages?.map(a => {
								return (
									<span className="inline-block rounded-full bg-white px-4 py-1 text-slate-700">
										{a.advantageName}
									</span>
								);
							}),
						)}
					</div>
					<div className="flex items-center gap-4 mt-4">
						<Button isPrimary={true}>Enroll</Button>
						<Button>Learn More</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeroSection;
