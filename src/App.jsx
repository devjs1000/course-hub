import { useState, useEffect, useLayoutEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
	Footer,
	Assignment,
	CreateAssignment,
	CreateCourse,
	CreateQuiz,
	MyCourses,
	PrivateRoute,
	Profile,
} from './components';
import Navbar from './components/header/Navbar';
import Loading from './UI/BoxLoading';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Community from './components/Community/Community';
import CourseDetails from './pages/CourseDetails';

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

							<Route path="/coursedetails/:id" element={<CourseDetails />} />
						</Routes>
						<Footer />
					</Suspense>
				</div>
			)}
		</>
	);
}

export default App;
