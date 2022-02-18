import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AuthorIntro from '../components/courseDetailsPage/AuthorIntro';
import CourseSkills from '../components/courseDetailsPage/CourseSkills';
import HeroSection from '../components/courseDetailsPage/HeroSection';
// import RelatedCourses from '../components/courseDetailsPage/RelatedCourses';
import WhatYouGet from '../components/courseDetailsPage/WhatYouGet';
import useStore from '../context/useStore';

const CourseDetails = () => {
	const {allCoursesData} = useStore()
	const [current,setCurrent] = useState({})
	const {id} = useParams()

	useEffect(()=>{
		const data = allCoursesData.find(course=>course._id===id)
		setCurrent(data)
	})
	return (
		<>
			<HeroSection course={current}/>
			{/* <RelatedCourses course={current}/> */}
			<WhatYouGet course={current}/>
			<CourseSkills course={current}/>
			<AuthorIntro course={current}/>
		</>
	);
};

export default CourseDetails;
