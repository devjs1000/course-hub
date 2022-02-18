import CourseCard from '../courses/CourseCard';
import useStore from '../../context/useStore';

function RelatedCourses() {
	const { frontendCourses } = useStore();

	return (
		<section className="section-related-course h-screen bg-primary-color-dark skew-y-[-5deg] mt-[-5rem] flex flex-col justify-center items-center px-16">
			<h2 className="text-white skew-y-[5deg] font-bold mb-12 text-3xl sm:text-4xl md:text-5xl">
				Related Courses
			</h2>
			<div className="grid grid-cols-4 gap-4 skew-y-[5deg]  w-full">
				{frontendCourses.data
					.filter((_, index) => index < 4)
					.map((course, i) => {
						return (
							<CourseCard
								key={course.name + course.type + i}
								image={course.image}
								title={course.name}
								tagline={course.tagline}
								price={course.price}
								type={course.type}
								description={course.description}
							/>
						);
					})}
			</div>
		</section>
	);
}

export default RelatedCourses;
