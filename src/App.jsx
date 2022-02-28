import { useState, useEffect, useLayoutEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
	Assignment,
	CreateAssignment,
	CreateCourse,
	CreateQuiz,
	Footer,
	MyCourses,
	PrivateRoute,
	Profile,
} from './components';
import { Home, CourseDetails, NotFound } from './pages';
import { Login, Signup } from './components/Auth';

import Navbar from './components/header/Navbar';
import Loading from './UI/BoxLoading';
import Community from './components/Community/Community';

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
