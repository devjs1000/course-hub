import AuthorIntro from '../components/courseDetailsPage/AuthorIntro';
import { useState, useEffect } from 'react';
import CourseSkills from '../components/courseDetailsPage/CourseSkills';
import HeroSection from '../components/courseDetailsPage/HeroSection';
// import RelatedCourses from '../components/courseDetailsPage/RelatedCourses';
import WhatYouGet from '../components/courseDetailsPage/WhatYouGet';
// import { oneCourse } from '../fetch/courseApi';
import { useParams } from 'react-router-dom';
import BoxLoading from '../UI/BoxLoading';
import axios from 'axios';

const CourseDetails = () => {
	const [courseData, setCourseData] = useState({});
	// const [courseInfo, setCourseInfo] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	const param = useParams();

	useEffect(() => {
		let isMount = true;

		if (isMount) {
			// oneCourse(param.courseId, data => {
			// 	setCourseData(data.data);
			// 	console.log(courseData);
			// });
			axios
				.get('../../reference/course.json')
				.then(res => {
					res.data.map(course => {
						Object.keys(course).map(() => {
							course.data.map(courseDetails => {
								if (courseDetails._id === param.courseId) {
									setCourseData(courseData);
								}
							});
						});
					});
				})
				.catch(err => console.log(err))
				.finally(() => {
					setIsLoading(false);
				});
		}

		return () => {
			isMount = false;
		};
	}, []);

	// !isLoading &&
	// 	courseData.map(course => {
	// 		Object.keys(course).map(() => {
	// 			course.data.map(courseDetails => {
	// 				if (courseDetails._id === param.courseId) {
	// 					setCourseInfo(courseDetails);
	// 				}
	// 			});
	// 		});
	// 	});

	const { name, tagline, type, price, advantages } = courseData;
	console.log(courseData);

	return (
		<>
			{isLoading ? (
				<BoxLoading />
			) : (
				<>
					<HeroSection
						name={name}
						tagline={tagline}
						type={type}
						price={price}
						advantages={advantages}
					/>
					{/* <RelatedCourses /> */}
					<WhatYouGet />
					<CourseSkills />
					<AuthorIntro />
				</>
			)}
		</>
	);
};

export default CourseDetails;
