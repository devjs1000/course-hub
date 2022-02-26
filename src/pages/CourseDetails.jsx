import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AuthorIntro from '../components/courseDetailsPage/AuthorIntro';
import CourseSkills from '../components/courseDetailsPage/CourseSkills';
import DetailsNavigation from '../components/courseDetailsPage/details/DetailsNavigation';
import HeroSection from '../components/courseDetailsPage/HeroSection';
// import RelatedCourses from '../components/courseDetailsPage/RelatedCourses';
import WhatYouGet from '../components/courseDetailsPage/details/WhatYouGet';
import useStore from '../context/useStore';

const CourseDetails = () => {
	const { allCoursesData } = useStore();
	const [current, setCurrent] = useState({});
	const { id } = useParams();

	useEffect(() => {
		const data = allCoursesData.find(course => course._id === id);
		setCurrent(data);
	});

	const sectionClasses = 'lg:col-span-4 bg-red-400';
	return (
		<>
			<HeroSection course={current} />
			<DetailsNavigation />
			<div className="grid grid-cols-1 lg:grid-cols-6">
				<div className={sectionClasses}>1</div>
				<WhatYouGet className="lg:col-start-5 lg:col-end-[-1]">2</WhatYouGet>
				<div className={sectionClasses}>3</div>
				<div className={sectionClasses}>4</div>
			</div>
			{/* <RelatedCourses course={current}/> */}
			{/* <WhatYouGet course={current} />
			<CourseSkills course={current} />
			<AuthorIntro course={current} /> */}
		</>
	);
};

export default CourseDetails;
