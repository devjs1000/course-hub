import { useState, useEffect, useLayoutEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/header/Navbar';
import Loading from './UI/BoxLoading';
import PrivateRoute from './components/PrivateRoute';
import CreateCourse from './components/CreateCourse';
import  CreateQuiz  from './components/CreateQuiz';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Profile from './components/Profile';
import MyCourses from './components/MyCourses';
import Footer from './components/Footer';
import Assignment from './components/Assignment';
import Community from './components/Community/Community';
import CourseDetails from './pages/CourseDetails';
import CreateAssignment from './components/CreateAssignment';


function App() {
	const [loading, setLoading] = useState(true);
console.log(import.meta.env.VITE_DB);
	useLayoutEffect(() => {
		setTimeout(() => setLoading(false), 1500);
	}, []);

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<div>
					<Navbar />
					<Suspense fallback={<Loading />}>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/login" element={<Login />} />
							<Route path="/signup" element={<Signup />} />
							<Route
								path="/my-profile"
								element={
									<PrivateRoute>
										<Profile />
									</PrivateRoute>
								}
							/>
							<Route path="/my-courses" element={<MyCourses />} />
							<Route path="/my-assignments" element={<Assignment />} />
							<Route path="/Community" element={<Community />} />
							<Route path="/create-course" element={<CreateCourse />} />
							<Route path="/create-quiz" element={<CreateQuiz />} />
							<Route path="/create-assignment" element={<CreateAssignment />} />

							<Route path="/*" element={<NotFound />} />

							<Route
								path="/coursedetails/:id"
								element={<CourseDetails />}
							/>
						</Routes>
						<Footer />
					</Suspense>
				</div>
			)}
		</>
	);
}

export default App;
