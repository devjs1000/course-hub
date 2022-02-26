import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AuthorIntro from '../components/courseDetailsPage/AuthorIntro';
import DetailsNavigation from '../components/courseDetailsPage/details/DetailsNavigation';
import HeroSection from '../components/courseDetailsPage/HeroSection';
// import RelatedCourses from '../components/courseDetailsPage/RelatedCourses';
import WhatYouGet from '../components/courseDetailsPage/details/WhatYouGet';
import DetailsAbout from '../components/courseDetailsPage/details/DetailsAbout';
import useStore from '../context/useStore';

const CourseDetails = () => {
	const { allCoursesData } = useStore();
	const [current, setCurrent] = useState({});
	const { id } = useParams();

	useEffect(() => {
		const data = allCoursesData.find(course => course._id === id);
		setCurrent(data);
	});

	const sectionClasses = 'col-span-4';
	return (
		<>
			<HeroSection course={current} />
			<DetailsNavigation />
			<div className="grid grid-cols-1 lg:grid-cols-6 lg:px-16 lg:py-8">
				<DetailsAbout className={sectionClasses}>1</DetailsAbout>
				<WhatYouGet className="lg:col-start-5 lg:col-end-[-1]">2</WhatYouGet>
				<div className={sectionClasses}>3</div>
				<div className={sectionClasses}>4</div>
			</div>
			{/* <RelatedCourses course={current}/> */}
			{/* <WhatYouGet course={current} />
			<AuthorIntro course={current} /> */}
		</>
	);
};

export default CourseDetails;
