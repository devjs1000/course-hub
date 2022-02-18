import AuthorIntro from '../components/courseDetailsPage/AuthorIntro';
import { useState, useEffect } from 'react';
import CourseSkills from '../components/courseDetailsPage/CourseSkills';
import HeroSection from '../components/courseDetailsPage/HeroSection';
// import RelatedCourses from '../components/courseDetailsPage/RelatedCourses';
import WhatYouGet from '../components/courseDetailsPage/WhatYouGet';
import { oneCourse } from '../fetch/courseApi';
import { useParams } from 'react-router-dom';
import useStore from '../context/useStore';
import BoxLoading from '../UI/BoxLoading';

const CourseDetails = () => {
	const [courseData, setCourseData] = useState({});

	const {
		frontendCourses,
		backendCourses,
		designingCourses,
		fullstackCourses,
		otherCourses,
	} = useStore();

	const param = useParams();
	console.log(param);

	useEffect(() => {
		let isMount = true;

		if (isMount) {
			oneCourse(param.courseId, data => {
				setCourseData(data.data);
				console.log(courseData);
			});
		}

		return () => {
			isMount = false;
		};
	}, []);
	return (
		<>
			<HeroSection />
			{/* <RelatedCourses /> */}
			<WhatYouGet />
			<CourseSkills />
			<AuthorIntro />
		</>
	);
};

export default CourseDetails;
