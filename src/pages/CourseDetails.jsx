import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailsNavigation from '../components/courseDetailsPage/details/DetailsNavigation';
import HeroSection from '../components/courseDetailsPage/HeroSection';
import WhatYouGet from '../components/courseDetailsPage/details/WhatYouGet';
import DetailsAbout from '../components/courseDetailsPage/details/DetailsAbout';
import useStore from '../context/useStore';
import AuthorIntro from '../components/courseDetailsPage/AuthorIntro';
import DetailsReview from '../components/courseDetailsPage/details/DetailsReview';
import FAQ from '../components/courseDetailsPage/FAQ';

const CourseDetails = ({id}) => {
	const { allCoursesData } = useStore();
	const [current, setCurrent] = useState({});
	// const { id } = useParams();
	console.log(id);

	useEffect(() => {
		const data = allCoursesData.find(course => course._id === id);
		setCurrent(data);
	});

	return (
		<>
			<HeroSection course={current} />
			<DetailsNavigation />
			<div className="px-4 py-6 grid grid-cols-1 text-gray-600 bg-white lg:grid-cols-6 lg:px-16 lg:py-8 lg:gap-2">
				<div className="col-span-4 order-2 p-2">
					<DetailsAbout />
					<AuthorIntro />
					<DetailsReview />
					<FAQ />
				</div>
				<WhatYouGet className="lg:col-start-5 lg:col-end-[-1] lg:order-2" />
			</div>
		</>
	);
};

export default CourseDetails;
