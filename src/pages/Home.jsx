import Header from '../components/header/Header';
import CourseSections from '../components/courses/CourseSections';
import { createCourse } from '../fetch/courseApi';
import CreateCourse from '../components/CreateCourse';

const Home = () => {
	return (
		<>
			<Header />
			<CreateCourse />
			<CourseSections />
		</>
	);
};
export default Home;
