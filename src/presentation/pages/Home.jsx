import Header from '../components/header/Header';

import Teachers from '../components/Teachers';
import WhyUs from '../components/WhyUs';
import PopularCourses from '../components/PopularCourses';

const Home = () => {
	return (
		<>
			<Header />
			<WhyUs />
			<PopularCourses />
			<Teachers />
		</>
	);
};
export default Home;
