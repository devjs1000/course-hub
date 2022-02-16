import Header from '../components/header/Header';
import CourseSections from '../components/courses/CourseSections';
import { createCourse } from '../fetch/courseApi';

const Home = () => {
	return (
		<>
			<Header />

			<CourseSections />
		</>
	);
};
export default Home;
