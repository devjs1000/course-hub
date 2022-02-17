import AuthorIntro from '../components/courseDetailsPage/AuthorIntro';
import CourseSkills from '../components/courseDetailsPage/CourseSkills';
import HeroSection from '../components/courseDetailsPage/HeroSection';
import RelatedCourses from '../components/courseDetailsPage/RelatedCourses';
import WhatYouGet from '../components/courseDetailsPage/WhatYouGet';

const CourseDetails = () => {
	return (
		<>
			<HeroSection />
			<RelatedCourses />
			<WhatYouGet />
			<CourseSkills />
			<AuthorIntro />
		</>
	);
};

export default CourseDetails;
