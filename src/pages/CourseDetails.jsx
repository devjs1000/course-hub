import AuthorIntro from '../components/courseDetailsPage/AuthorIntro';
import HeroSection from '../components/courseDetailsPage/HeroSection';
import RelatedCourses from '../components/courseDetailsPage/RelatedCourses';
import WhatYouGet from '../components/courseDetailsPage/WhatYouGet';

const CourseDetails = () => {
	return (
		<>
			<HeroSection />
			<RelatedCourses />
			<WhatYouGet />
			<AuthorIntro />
		</>
	);
};

export default CourseDetails;
