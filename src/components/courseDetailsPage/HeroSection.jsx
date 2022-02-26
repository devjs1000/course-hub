import { Children } from 'react';
import Button from '../../UI/Button';

function HeroSection({ course }) {
	console.log(course);
	// { backgroundImage: `url(${course?.image})` }
	return (
		<div className="details-hero h-[60vh] overflow-hidden bg-center bg-fixed bg-no-repeat bg-cover flex justify-between items-center px-16">
			<div className="flex flex-col items-start sm:w-full backdrop-blur-[100px] py-8 sm:rounded-xl ">
				<div className="mb-7">
					<h1 className="text-4xl font-bold text-white uppercase tracking-wide">
						{course.name}
					</h1>
					<p className="text-xl text-white">{course.tagline}</p>
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
					<div className="flex items-center gap-4 my-4">
						<Button isPrimary={true}>Enroll</Button>
						<Button>Learn More</Button>
					</div>
				</div>
			</div>
			<div
				className="h-[80%] w-full bg-cover bg-no-repeat bg-center rounded-md relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:mix-blend-multiply after:bg-gray-600 after:opacity-75"
				style={{ backgroundImage: `url(${course?.image})` }}
			></div>
		</div>
	);
}

export default HeroSection;
