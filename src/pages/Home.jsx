import Header from '../components/header/Header';
import Courses from '../components/courses/Courses';
import Teachers from '../components/Teachers';
import WhyUs from '../components/WhyUs';

const Home = () => {
	return (
		<>
			<Header />
			<WhyUs />
			<Courses />
			<Teachers />
		</>
	);
};
export default Home;
